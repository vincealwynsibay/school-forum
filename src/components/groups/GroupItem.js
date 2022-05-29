import React from "react";
import { Link } from "react-router-dom";

const GroupItem = ({ group }) => {
	if (!group) {
		return null;
	}

	return (
		<div>
			<div style={{ width: "18rem" }}>
				<div>
					<img src={group.photoURL} />

					<h2>{group.name}</h2>
					<p className='mb-2 text-muted'>{group.description}</p>

					<Link to={`/group/${group.id}`}>View Group</Link>
				</div>
			</div>
		</div>
	);
};

export default GroupItem;
