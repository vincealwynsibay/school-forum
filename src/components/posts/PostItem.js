import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
	if (!post) {
		return null;
	}

	return (
		<div>
			<div style={{ width: "18rem" }}>
				<div>
					<h2>{post.title}</h2>
					<p className='mb-2 text-muted'>{post.content}</p>
					{post.photoURL && <img src={post.photoURL} />}

					<Link to={`/group/${post.group}/post/${post.id}`}>
						View post
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
