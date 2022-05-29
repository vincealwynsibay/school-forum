import React from "react";
import { useCollection } from "../../hooks/useCollection";
import GroupsList from "./GroupsList";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";

const Groups = () => {
	const { documents, error } = useCollection("groups");

	return (
		<div>
			{auth.currentUser && <Link to='/group/create'>Create Group</Link>}
			{error && <p>{error.message}</p>}
			<GroupsList groups={documents} />
		</div>
	);
};

export default Groups;
