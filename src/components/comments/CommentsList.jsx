import React from "react";
import Comment from "./Comment";
import styled from "styled-components";

const Container = styled.div`
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const CommentsList = ({ comments }) => {
	if (!comments) {
		return null;
	}

	return (
		<Container>
			{comments &&
				comments.map((comment) => (
					<Comment key={comment.id} comment={comment} />
				))}
		</Container>
	);
};

export default CommentsList;
