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
import { useDocument } from "../../hooks/useDocument";
import { auth, db } from "../../utils/firebase";
import CreateReply from "./reply/CreateReply";
import Reply from "./reply/Reply";
import Replies from "./reply/Replies";
import { Link } from "react-router-dom";

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

	return (
		<div>
			<div>
				<div className='max-w-full px-10 my-4 pt-6 pb-3 bg-white rounded-lg shadow-md'>
					<div className='mt-2'>
						<p className='mt-2 text-gray-600'>{comment.content}</p>
					</div>

					<div className='flex justify-between items-center mt-6'>
						<div className='flex gap-2'>
							{auth.currentUser && (
								<div
									className='font-medium text-xs'
									onClick={upvote}
								>
									<span className='bg-green-400 px-2 py-1 mr-2 text-center rounded text-gray-100 cursor-pointer'>
										Upvote
									</span>
									<span>{comment.upvotes.length}</span>
								</div>
							)}
							{auth.currentUser && (
								<div
									className='font-medium text-xs'
									onClick={downvote}
								>
									<span className='bg-red-400 px-2 py-1 mr-2 text-center rounded text-gray-100 cursor-pointer'>
										Downvote
									</span>
									<span>{comment.downvotes.length}</span>
								</div>
							)}
						</div>
						<div>
							<Link
								className='flex items-center'
								to={`/profile/${commentUser.id}`}
							>
								<img
									className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
									src={commentUser && commentUser.photoURL}
									alt='avatar'
								/>
								<h1 className='text-gray-700 font-bold'>
									{commentUser && commentUser.displayName}
								</h1>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* <Card style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Subtitle className='mb-2 text-muted'>
						
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
					</div> 
				</Card.Body>
			</Card> */}
		</div>
	);
};

export default Comment;
