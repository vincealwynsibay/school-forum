import {
	addDoc,
	arrayRemove,
	arrayUnion,
	collection,
	deleteDoc,
	doc,
	updateDoc,
} from "firebase/firestore";
import React from "react";
import { Card } from "react-bootstrap";
import { useDocument } from "../../hooks/useDocument";
import { auth, db } from "../../utils/firebase";
import CreateReply from "./reply/CreateReply";
import Reply from "./reply/Reply";
import Replies from "./reply/Replies";

const Comment = ({ comment }) => {
	const { document: commentUser } = useDocument("users", comment.user);
	if (!comment || !commentUser) {
		return null;
	}

	const commentRef = doc(db, "comments", comment.id);

	const upvote = async () => {
		if (
			!comment.upvotes.some((upvote) => upvote === auth.currentUser.uid)
		) {
			if (
				comment.downvotes.some(
					(downvote) => downvote === auth.currentUser.uid
				)
			) {
				updateDoc(commentRef, {
					downvotes: arrayRemove(auth.currentUser.uid),
				});
			}
			updateDoc(commentRef, {
				upvotes: arrayUnion(auth.currentUser.uid),
			});
		} else {
			updateDoc(commentRef, {
				upvotes: arrayRemove(auth.currentUser.uid),
			});
		}
	};
	const downvote = async () => {
		if (
			!comment.downvotes.some(
				(downvote) => downvote === auth.currentUser.uid
			)
		) {
			if (
				comment.upvotes.some(
					(upvote) => upvote === auth.currentUser.uid
				)
			) {
				updateDoc(commentRef, {
					upvotes: arrayRemove(auth.currentUser.uid),
				});
			}
			updateDoc(commentRef, {
				downvotes: arrayUnion(auth.currentUser.uid),
			});
		} else {
			updateDoc(commentRef, {
				downvotes: arrayRemove(auth.currentUser.uid),
			});
		}
	};

	const deleteComment = async () => {
		await deleteDoc(doc(db, "comments", comment.id));
	};

	// const saveNewReply = async (content) => {
	// 	const commentRef = doc(db, "comments", comment.id);

	// 	const newReply = await addDoc(collection(db, "replies"), {
	// 		content,
	// 		user: auth.currentUser.uid,
	// 		upvotes: [],
	// 		downvotes: [],
	// 		comment: comment.id,
	// 	});

	// 	await updateDoc(commentRef, {
	// 		replies: arrayUnion(newReply.id),
	// 	});
	// };

	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Title>{commentUser.displayName}</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>
						{comment.content}
					</Card.Subtitle>
					<Card.Subtitle className='mb-2'>
						<div>
							{auth.currentUser && (
								<button onClick={upvote}>upvote</button>
							)}
							<p>Upvotes: {comment.upvotes.length}</p>
						</div>
						<div>
							{auth.currentUser && (
								<button onClick={downvote}>downvote</button>
							)}
							<p>Downvotes: {comment.downvotes.length}</p>
						</div>
						{auth.currentUser &&
							auth.currentUser.uid === comment.user && (
								<a onClick={deleteComment} href='#'>
									Delete Comment
								</a>
							)}
					</Card.Subtitle>

					{/* <Card.Subtitle className='mb-2'>
						<CreateReply saveNewReply={saveNewReply} />
					</Card.Subtitle> */}
					{/* <div>
						{comment.replies &&
							comment.replies.map((reply, idx) => {
								return (
									<Reply
										saveNewReply={saveNewReply}
										reply={reply}
										idx={idx}
									/>
								);
							})}
						{comment.replies && (
							<Replies replies={comment.replies} />
						)}
					</div> */}
				</Card.Body>
			</Card>
		</div>
	);
};

export default Comment;
