import React from "react";
import { Link } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../spinner/Spinner";
const FollowerItem = ({ followerId }) => {
	const { document: follower, isPending } = useDocument("users", followerId);

	if (isPending) {
		return <Spinner />;
	}

	return (
		<Link to={`/profile/${follower.id}`}>
			<div>
				<div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
					<img
						src={follower.photoURL}
						className='w-full h-full object-center object-cover group-hover:opacity-75'
					/>
				</div>
				<h2>{follower.displayName}</h2>
			</div>
		</Link>
	);
};

export default FollowerItem;
