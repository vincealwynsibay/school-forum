import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import { auth, db } from "../../utils/firebase";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: ${(props) => props.theme.primary};
	border-radius: 20px;
`;
const Avatar = styled.img`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
`;
const Content = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	color: ${(props) => props.theme.black};

	p {
		font-weight: 700;
		font-size: 1rem;

		:hover {
			color: ${(props) => props.theme.accent};
	}
`;

const Button = styled.button`
	padding: 0.8rem 1.5rem;
	background-color: ${(props) => props.theme.accent};
	color: white;
	border-radius: 20px;
	:hover {
		background-color: ${(props) => props.theme.accentHover};
	}
`;

const ProfileItem = ({ profile }) => {
	if (!profile) {
		return null;
	}

	const { user } = useAuthContext();

	const { document: currentUser, isPending: userPending } = useDocument(
		"users",
		user && user.uid
	);

	const followUser = async () => {
		const profileRef = doc(db, "users", profile.id);
		const currentUserRef = doc(db, "users", auth.currentUser.uid);
		await updateDoc(profileRef, {
			followers: arrayUnion(auth.currentUser.uid),
		});
		await updateDoc(currentUserRef, {
			following: arrayUnion(profile.id),
		});
	};

	const unfollowUser = async () => {
		const profileRef = doc(db, "users", profile.id);
		const currentUserRef = doc(db, "users", auth.currentUser.uid);

		await updateDoc(profileRef, {
			followers: arrayRemove(auth.currentUser.uid),
		});

		await updateDoc(currentUserRef, {
			following: arrayRemove(profile.id),
		});
	};

	return (
		<Container>
			<Link to={`/profile/${profile.id}`}>
				<Content>
					<div>
						<Avatar src={profile.photoURL} />
					</div>
					<p>{profile.displayName}</p>
				</Content>
			</Link>
			{auth.currentUser &&
				(currentUser && currentUser.following.includes(profile.id) ? (
					<Button onClick={unfollowUser}>Unfollow</Button>
				) : (
					<Button onClick={followUser}>Follow</Button>
				))}
		</Container>
	);
};

export default ProfileItem;
