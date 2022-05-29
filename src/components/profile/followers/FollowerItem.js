import React from "react";
import { Link } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../layout/Spinner";
const FollowerItem = ({ followerId }) => {
	const { document: follower, isPending } = useDocument("users", followerId);

	if (isPending) {
		return <Spinner />;
	}

	return (
		<div style={{ width: "18rem" }}>
			<div>
				<img src={follower.photoURL} />

				<h2>{follower.displayName}</h2>
				<p className='mb-2 text-muted'>{follower.bio}</p>

				<Link to={`/profile/${follower.id}`}>View Profile</Link>
			</div>
		</div>
	);
};

export default FollowerItem;
