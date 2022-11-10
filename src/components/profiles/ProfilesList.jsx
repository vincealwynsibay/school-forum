import React from "react";
import ProfileItem from "./ProfileItem";
import styled from "styled-components";

const Container = styled.div`
	margin: 1rem 0;

	> div {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin: 2rem 0;
	}
`;

const ProfilesList = ({ profiles }) => {
	if (!profiles) {
		return null;
	}

	return (
		<Container>
			<div>
				{profiles.map((profile) => {
					return <ProfileItem key={profile.id} profile={profile} />;
				})}
			</div>
		</Container>
	);
};

export default ProfilesList;
