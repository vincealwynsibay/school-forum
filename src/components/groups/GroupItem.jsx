import React from "react";
import { Link } from "react-router-dom";

const GroupItem = ({ group }) => {
	if (!group) {
		return null;
	}

	return (
		<div>
			<Link to={`/group/${group.id}`} className='group'>
				<div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
					<img
						src={group.photoURL}
						alt={`${group.name}'s Group Photo`}
						className='w-full object-center object-cover group-hover:opacity-75'
					/>
				</div>
				<p className='text-base font-semibold text-gray-900'>
					{group.name}
				</p>
			</Link>
		</div>
	);
};

export default GroupItem;
