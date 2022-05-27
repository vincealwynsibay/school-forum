import React from "react";
import GroupItem from "./GroupItem";

const GroupsList = ({ groups }) => {
	if (!groups) {
		return null;
	}

	return (
		<div>
			{groups &&
				groups.map((group) => (
					<GroupItem key={group.id} group={group} />
				))}
		</div>
	);
};

export default GroupsList;
