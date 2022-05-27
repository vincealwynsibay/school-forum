import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../layout/Spinner";
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

	console.log(members);

	return (
		<div>
			<div>
				{members.map((member) => {
					return <MemberItem key={member} memberId={member} />;
				})}
			</div>
		</div>
	);
};

export default Members;
