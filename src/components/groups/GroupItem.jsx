import React from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../utils/firebase";
import styled from "styled-components";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: ${(props) => props.theme.primary};
	border-radius: 20px;
	cursor: pointer;
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
		margin: 0.5rem;
	}
	p:first-of-type {
		font-weight: 700;
		font-size: 1.2rem;
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

const GroupItem = ({ group }) => {
	if (!group) {
		return null;
	}

	const joinGroup = async () => {
		const groupRef = doc(db, "groups", group.id);
		updateDoc(groupRef, {
			members: arrayUnion(auth.currentUser.uid),
		});
		toast.success(`You joined ${group.name}`);
	};
	const leaveGroup = async () => {
		const groupRef = doc(db, "groups", group.id);
		updateDoc(groupRef, {
			members: arrayRemove(auth.currentUser.uid),
		});
		toast.success(`You left ${group.name}`);
	};

	return (
		<Container>
			<Link to={`/group/${group.id}`}>
				<Content>
					<div>
						<Avatar
							src={group.photoURL}
							alt={`${group.name}'s Group Photo`}
						/>
					</div>
					<div>
						<p>{group.name}</p>
						<p>{group.description}</p>
					</div>
				</Content>
			</Link>

			{auth.currentUser &&
				(group &&
				group.members.some(
					(member) => member === auth.currentUser.uid
				) ? (
					<Button onClick={leaveGroup}>Leave Group</Button>
				) : (
					<Button onClick={joinGroup}>Join Group</Button>
				))}
		</Container>
	);
};

export default GroupItem;
