import React from "react";
import { Link } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../layout/Spinner";
const FollowerItem = ({ memberId }) => {
	const { document: member, isPending } = useDocument("users", memberId);

	if (isPending) {
		return <Spinner />;
	}

	return (
		<div style={{ width: "18rem" }}>
			<div>
				<img src={member.photoURL}></img>

				<h2>{member.displayName}</h2>
				<p className='mb-2 text-muted'>{member.bio}</p>

				<Link to={`/profile/${member.id}`}>View Profile</Link>
			</div>
		</div>
	);
};

export default FollowerItem;
