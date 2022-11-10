import React from "react";
import GroupItem from "./GroupItem";
import styled from "styled-components";

const Container = styled.div`
	margin: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 2rem 0;
`;

const GroupsList = ({ groups }) => {
	if (!groups) {
		return null;
	}

	return (
		<Container>
			{groups &&
				groups.map((group) => (
					<GroupItem key={group.id} group={group} />
				))}
		</Container>
	);
};

export default GroupsList;
