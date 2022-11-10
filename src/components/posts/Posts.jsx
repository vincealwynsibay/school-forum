import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import PostsList from "./PostsList";
import styled from "styled-components";

const Container = styled.div`
	padding-top: 1rem;
`;

const Posts = () => {
	const { id } = useParams();

	const { documents, error } = useCollection(
		"posts",
		id ? ["group", "==", id] : null
	);

	if (!id) {
		return (
			<div>
				<Container>
					<div></div>
					{error && <p>{error.message}</p>}
					<PostsList posts={documents} />
				</Container>
			</div>
		);
	}

	return (
		<div>
			<Container>
				{error && <p>{error.message}</p>}
				<PostsList posts={documents} />
			</Container>
		</div>
	);
};

export default Posts;
