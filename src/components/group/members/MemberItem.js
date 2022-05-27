import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../layout/Spinner";
const FollowerItem = ({ memberId }) => {
	const { document: member, isPending } = useDocument("users", memberId);

	if (isPending) {
		return <Spinner />;
	}

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Img src={member.photoURL}></Card.Img>

				<Card.Title>{member.displayName}</Card.Title>
				<Card.Subtitle className='mb-2 text-muted'>
					{member.bio}
				</Card.Subtitle>

				<Card.Text as={Link} to={`/profile/${member.id}`}>
					View Profile
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default FollowerItem;
