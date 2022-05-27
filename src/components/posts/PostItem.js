import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
	if (!post) {
		return null;
	}

	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Title>{post.title}</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>
						{post.content}
					</Card.Subtitle>
					{post.photoURL && <Card.Img src={post.photoURL}></Card.Img>}

					<Card.Text
						as={Link}
						to={`/group/${post.group}/post/${post.id}`}
					>
						View post
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default PostItem;
