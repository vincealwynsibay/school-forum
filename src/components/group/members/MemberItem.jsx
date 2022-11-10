import React from "react";
import { Link } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../spinner/Spinner";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { auth, db } from "../../../utils/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #ccc;
	padding: 1rem;
	border-radius: 3px;
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
`;

const Button = styled.button`
	padding: 0.8rem 1.5rem;
	background-color: #1c3d52;
	color: white;
	border-radius: 3px;
`;

const MemberItem = ({ memberId }) => {
	const { document: member, isPending } = useDocument("users", memberId);

	const { user } = useAuthContext();

	const { document: currentUser, isPending: userPending } = useDocument(
		"users",
		user && user.uid
	);

	if (isPending) {
		return <Spinner />;
	}

	const followUser = async () => {
		const memberRef = doc(db, "users", member.id);
		const currentUserRef = doc(db, "users", auth.currentUser.uid);
		await updateDoc(memberRef, {
			followers: arrayUnion(auth.currentUser.uid),
		});
		await updateDoc(currentUserRef, {
			following: arrayUnion(member.id),
		});
	};

	const unfollowUser = async () => {
		const memberRef = doc(db, "users", member.id);
		const currentUserRef = doc(db, "users", auth.currentUser.uid);

		await updateDoc(memberRef, {
			followers: arrayRemove(auth.currentUser.uid),
		});

		await updateDoc(currentUserRef, {
			following: arrayRemove(member.id),
		});
	};

	return (
		<Container>
			<Link to={`/profile/${member.id}`}>
				<Content>
					<div>
						<Avatar src={member.photoURL} />
					</div>
					<h2>{member.displayName}</h2>
				</Content>
			</Link>
			{auth.currentUser &&
				(currentUser && currentUser.following.includes(member.id) ? (
					<Button onClick={unfollowUser}>Unfollow</Button>
				) : (
					<Button onClick={followUser}>Follow</Button>
				))}
		</Container>
	);
};

export default MemberItem;
