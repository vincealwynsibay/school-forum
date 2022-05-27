import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const GroupItem = ({ group }) => {
	if (!group) {
		return null;
	}

	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Img src={group.photoURL}></Card.Img>

					<Card.Title>{group.name}</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>
						{group.description}
					</Card.Subtitle>

					<Card.Text as={Link} to={`/group/${group.id}`}>
						View Group
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default GroupItem;
