import React from "react";
import { Link } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../spinner/Spinner";
import styled from "styled-components";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../utils/firebase";
import { useAuthContext } from "../../../hooks/useAuthContext";

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

const FollowerItem = ({ followerId }) => {
	const { document: follower, isPending } = useDocument("users", followerId);
	const { document: currentUser, isPending: userPending } = useDocument(
		"users",
		auth.currentUser?.uid
	);

	if (isPending || userPending) {
		return <Spinner />;
	}

	const followUser = async () => {
		const profileRef = doc(db, "users", followerId);
		const currentUserRef = doc(db, "users", auth.currentUser.uid);
		await updateDoc(profileRef, {
			followers: arrayUnion(auth.currentUser.uid),
		});
		await updateDoc(currentUserRef, {
			following: arrayUnion(followerId),
		});
	};

	return (
		<Container>
			<Link to={`/profile/${follower.id}`}>
				<Content>
					<div>
						<Avatar src={follower.photoURL} />
					</div>
					<p>{follower.displayName}</p>
				</Content>
			</Link>
			{currentUser.following.includes(followerId) ? null : (
				<Button onClick={followUser}>Follow Back</Button>
			)}
		</Container>
	);
};

export default FollowerItem;
