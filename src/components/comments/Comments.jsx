import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { auth, db } from "../../utils/firebase";
import CommentsList from "../comments/CommentsList";
import CreateComment from "./create/CreateComment";
import styled from "styled-components";

const Header = styled.h2`
	font-size: 1.6rem;
	margin-bottom: 1rem;
`;

const Container = styled.div`
	margin: 1.5rem 0;
`;

const Comments = () => {
	const { post_id } = useParams();
	const { documents, error } = useCollection("comments", [
		"post",
		"==",
		post_id,
	]);

	const handleNewComment = async (content) => {
		const newComment = {
			user: auth.currentUser.uid,
			content,
			post: post_id,
			upvotes: [],
			downvotes: [],
			replies: [],
		};
		const docRef = await addDoc(collection(db, "comments"), newComment);
	};

	return (
		<Container>
			<Header>Comments</Header>
			{auth && auth.currentUser && (
				<CreateComment handleNewComment={handleNewComment} />
			)}
			<div>
				{error && <p>{error.message}</p>}
				<CommentsList comments={documents} />
			</div>
		</Container>
	);
};

export default Comments;
