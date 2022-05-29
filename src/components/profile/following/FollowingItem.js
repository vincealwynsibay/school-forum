import React from "react";
import { Link } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../layout/Spinner";
const FollowerItem = ({ followingId }) => {
	const { document: following, isPending } = useDocument(
		"users",
		followingId
	);

	if (isPending) {
		return <Spinner />;
	}

	return (
		<div style={{ width: "18rem" }}>
			<div>
				<img src={following.photoURL} />

				<h2>{following.displayName}</h2>
				<p className='mb-2 text-muted'>{following.bio}</p>

				<p as={Link} to={`/profile/${following.id}`}>
					View Profile
				</p>
			</div>
		</div>
	);
};

export default FollowerItem;
