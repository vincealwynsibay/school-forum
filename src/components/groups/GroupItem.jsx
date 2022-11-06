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
	border: 1px solid #ccc;
	padding: 1rem;
	border-radius: 3px;
`;
const Avatar = styled.img`
	width: 3.5rem;
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
			<Link to={`/group/${group.id}`} className='group'>
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

			{group &&
			group.members.some((member) => member === auth.currentUser.uid) ? (
				<Button onClick={leaveGroup}>Leave Group</Button>
			) : (
				<Button onClick={joinGroup}>Join Group</Button>
			)}
		</Container>
	);
};

export default GroupItem;
