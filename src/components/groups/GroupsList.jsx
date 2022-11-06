import React from "react";
import GroupItem from "./GroupItem";
import styled from "styled-components";

const Container = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const GroupsList = ({ groups }) => {
	if (!groups) {
		return null;
	}

	return (
		<Container className=''>
			{groups &&
				groups.map((group) => (
					<GroupItem key={group.id} group={group} />
				))}
		</Container>
	);
};

export default GroupsList;
