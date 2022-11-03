import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { auth, db } from "../../utils/firebase";
import CommentsList from "../comments/CommentsList";
import CreateComment from "./create/CreateComment";

const Comments = () => {
	const { post_id } = useParams();
	const { documents, error } = useCollection("comments", [
		["post", "==", post_id],
	]);

	// query("post",
	// "==",
	// post_id,)

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
		<div>
			<h1 className='text-3xl font-semibold mb-8 mt-10'>Comments</h1>
			{auth && auth.currentUser && (
				<CreateComment handleNewComment={handleNewComment} />
			)}
			<div>
				{error && <p>{error.message}</p>}
				<CommentsList comments={documents} />
			</div>
		</div>
	);
};

export default Comments;
