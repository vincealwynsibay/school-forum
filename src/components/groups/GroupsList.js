import React from "react";
import GroupItem from "./GroupItem";

const GroupsList = ({ groups }) => {
	if (!groups) {
		return null;
	}

	return (
		<div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
			{groups &&
				groups.map((group) => (
					<GroupItem key={group.id} group={group} />
				))}
		</div>
	);
};

export default GroupsList;
