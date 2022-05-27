import React from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import PostsList from "./PostsList";

const Posts = () => {
	const { id } = useParams();
	const { documents, error } = useCollection("groups", ["group", "==", id]);

	return (
		<div>
			{error && (
				<p>
					{error.message}
					<PostsList posts={documents} />
				</p>
			)}
		</div>
	);
};

export default Posts;
