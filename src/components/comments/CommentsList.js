import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
	if (!comments) {
		return null;
	}

	return (
		<div>
			{comments &&
				comments.map((comment) => (
					<Comment key={comment.id} comment={comment} />
				))}
		</div>
	);
};

export default CommentsList;
