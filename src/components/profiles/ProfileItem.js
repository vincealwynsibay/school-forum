import React from "react";
import { Link } from "react-router-dom";

const ProfileItem = ({ profile }) => {
	if (!profile) {
		return null;
	}
	console.log(profile);
	return (
		<div style={{ width: "18rem" }}>
			<div>
				<img src={profile.photoURL} />

				<h2>{profile.displayName}</h2>
				<p className='mb-2 text-muted'>{profile.bio}</p>

				<p as={Link} to={`/profile/${profile.id}`}>
					View Profile
				</p>
			</div>
		</div>
	);
};

export default ProfileItem;
