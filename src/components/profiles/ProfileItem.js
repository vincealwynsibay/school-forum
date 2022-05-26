import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileItem = ({ profile }) => {
	if (!profile) {
		return null;
	}
	console.log(profile);
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Img src={profile.photoURL}></Card.Img>

				<Card.Title>{profile.displayName}</Card.Title>
				<Card.Subtitle className='mb-2 text-muted'>
					{profile.bio}
				</Card.Subtitle>

				<Card.Text as={Link} to={`/profile/${profile.id}`}>
					View Profile
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ProfileItem;
