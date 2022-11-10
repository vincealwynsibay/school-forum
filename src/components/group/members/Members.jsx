import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../spinner/Spinner";
import MemberItem from "./MemberItem";
import styled from "styled-components";

const Container = styled.div`
	padding-top: 4rem;

	> div {
		display: flex;
		flex-direction: column;
	}

	> h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
`;

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
		<Container>
			<h2>Members</h2>
			<div>
				{members.map((member) => {
					return <MemberItem key={member} memberId={member} />;
				})}
			</div>
		</Container>
	);
};

export default Members;
