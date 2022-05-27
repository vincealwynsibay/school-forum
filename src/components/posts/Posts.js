import React from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import PostsList from "./PostsList";

const Posts = () => {
	const { id } = useParams();
	const { documents, error } = useCollection("posts", ["group", "==", id]);
	return (
		<div>
			{error && <p>{error.message}</p>}
			<PostsList posts={documents} />
		</div>
	);
};

export default Posts;
