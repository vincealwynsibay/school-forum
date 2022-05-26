import React from "react";
import ProfileItem from "./ProfileItem";

const ProfilesList = ({ profiles }) => {
	if (!profiles) {
		return null;
	}

	return (
		<div>
			{profiles.map((profile) => {
				return <ProfileItem key={profile.id} profile={profile} />;
			})}
		</div>
	);
};

export default ProfilesList;
