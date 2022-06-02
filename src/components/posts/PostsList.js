import React from "react";
import PostItem from "./PostItem";

const PostsList = ({ posts }) => {
	if (!posts) {
		return null;
	}

	return (
		<div>
			{posts &&
				posts.map((post) => <PostItem key={post.id} post={post} />)}
		</div>
	);
};

export default PostsList;
