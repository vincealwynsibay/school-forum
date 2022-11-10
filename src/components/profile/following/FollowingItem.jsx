import React from "react";
import { Link } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../spinner/Spinner";
import styled from "styled-components";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../utils/firebase";

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

const FollowerItem = ({ followingId }) => {
	const { document: following, isPending } = useDocument(
		"users",
		followingId
	);

	if (isPending) {
		return <Spinner />;
	}

	const unfollowUser = async () => {
		const profileRef = doc(db, "users", followingId);
		const currentUserRef = doc(db, "users", auth.currentUser.uid);

		await updateDoc(profileRef, {
			followers: arrayRemove(auth.currentUser.uid),
		});

		await updateDoc(currentUserRef, {
			following: arrayRemove(followingId),
		});
	};

	return (
		<Container>
			<Link to={`/profile/${following.id}`}>
				<Content>
					<div>
						<Avatar src={following.photoURL} />
					</div>
					<h2>{following.displayName}</h2>
				</Content>
			</Link>
			<Button onClick={unfollowUser}>Unfollow</Button>
		</Container>
	);
};

export default FollowerItem;
