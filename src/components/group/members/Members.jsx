import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../spinner/Spinner";
import MemberItem from "./MemberItem";

const Members = () => {
	const { id } = useParams();
	const [members, setMembers] = useState([]);
	const { document: group, isPending } = useDocument("groups", id);
	useEffect(() => {
		if (group) {
			setMembers(group.members);
		}
	});
	if (isPending) {
		return <Spinner />;
	}

	if (!members) {
		return null;
	}

	return (
		<div className='max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-full lg:px-40'>
			<h2 className='text-5xl font-medium mb-10'>Members</h2>
			<div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
				{members.map((member) => {
					return <MemberItem key={member} memberId={member} />;
				})}
			</div>
		</div>
	);
};

export default Members;
