import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../layout/Spinner";
const FollowerItem = ({ followingId }) => {
	const { document: following, isPending } = useDocument(
		"users",
		followingId
	);

	if (isPending) {
		return <Spinner />;
	}

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Img src={following.photoURL}></Card.Img>

				<Card.Title>{following.displayName}</Card.Title>
				<Card.Subtitle className='mb-2 text-muted'>
					{following.bio}
				</Card.Subtitle>

				<Card.Text as={Link} to={`/profile/${following.id}`}>
					View Profile
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default FollowerItem;
