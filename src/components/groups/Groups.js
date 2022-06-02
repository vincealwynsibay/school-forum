import React from "react";
import { useCollection } from "../../hooks/useCollection";
import GroupsList from "./GroupsList";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";

const Groups = () => {
	const { documents, error } = useCollection("groups");

	return (
		<div className='max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-full lg:px-40'>
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-5xl font-medium'>Groups</h2>
				{auth.currentUser && (
					<Link
						to='/group/create'
						className='font-bold text-indigo-600 hover:text-indigo-500'
					>
						Create Group
					</Link>
				)}
			</div>
			{error && <p>{error.message}</p>}
			<GroupsList groups={documents} />
		</div>
	);
};

export default Groups;
