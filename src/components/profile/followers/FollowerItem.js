import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../layout/Spinner";
const FollowerItem = ({ followerId }) => {
	const { document: follower, isPending } = useDocument("users", followerId);

	if (isPending) {
		return <Spinner />;
	}

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Img src={follower.photoURL}></Card.Img>

				<Card.Title>{follower.displayName}</Card.Title>
				<Card.Subtitle className='mb-2 text-muted'>
					{follower.bio}
				</Card.Subtitle>

				<Card.Text as={Link} to={`/profile/${follower.id}`}>
					View Profile
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default FollowerItem;
