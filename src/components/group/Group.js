import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import { auth, db } from "../../utils/firebase";
import EditDescription from "./edit/EditDescription";
import Spinner from "../layout/Spinner";

const Group = () => {
	const { id } = useParams();
	const { document: group, error, isPending } = useDocument("groups", id);
	const groupRef = doc(db, "groups", id);

	if (isPending) {
		return <Spinner />;
	}

	const joinGroup = async () => {
		updateDoc(groupRef, {
			members: arrayUnion(auth.currentUser.uid),
		});
	};
	const leaveGroup = async () => {
		updateDoc(groupRef, {
			members: arrayRemove(auth.currentUser.uid),
		});
	};

	return (
		<div>
			{group ? (
				<>
					<img
						src={group.photoURL}
						alt={`${group.name} Group Photo`}
					/>
					<h3>{group.name}</h3>
					<p>{group.description}</p>
					{auth.currentUser &&
						auth.currentUser.uid === group.admin && (
							<EditDescription
								id={group.id}
								descriptionValue={group.description}
							/>
						)}
					{auth.currentUser && (
						<>
							{!group.members.some(
								(member) => member === auth.currentUser.uid
							) ? (
								<button onClick={joinGroup}>Join</button>
							) : (
								<button onClick={leaveGroup}>Leave</button>
							)}
						</>
					)}
					<div>
						<Link to={`/group/${id}/members`}>
							<p>Members: {group.members.length}</p>
						</Link>
					</div>
				</>
			) : (
				<p>document does not exist</p>
			)}
		</div>
	);
};

export default Group;
