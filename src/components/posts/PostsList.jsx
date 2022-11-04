import React from "react";
import PostItem from "./PostItem";
import styled from "styled-components";

const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const PostsList = ({ posts }) => {
	if (!posts) {
		return null;
	}

	return (
		<List>
			{posts &&
				posts.map((post) => <PostItem key={post.id} post={post} />)}
		</List>
	);
};

export default PostsList;
