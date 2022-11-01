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
		<Link to={`/profile/${following.id}`}>
			<div>
				<div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
					<img
						src={following.photoURL}
						className='w-full h-full object-center object-cover group-hover:opacity-75'
					/>
				</div>
				<h2>{following.displayName}</h2>
			</div>
		</Link>
	);
};

export default FollowerItem;
