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
									className='font-medium text-xs flex items-center '
									onClick={upvote}
								>
									{!comment.upvotes.some(
										(upvote) =>
											upvote === auth.currentUser.uid
									) ? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6 mr-2 cursor-pointer hover:stroke-indigo-600'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M5 15l7-7 7 7'
											/>
										</svg>
									) : (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6 mr-2 cursor-pointer stroke-indigo-500 hover:stroke-indigo-600'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M5 15l7-7 7 7'
											/>
										</svg>
									)}
									<span>{comment.upvotes.length}</span>
								</div>
							)}
							{auth.currentUser && (
								<div
									className='font-medium text-xs flex items-center'
									onClick={downvote}
								>
									{!comment.downvotes.some(
										(downvote) =>
											downvote === auth.currentUser.uid
									) ? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6 mr-2 cursor-pointer hover:stroke-indigo-600'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M19 9l-7 7-7-7'
											/>
										</svg>
									) : (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6 mr-2 cursor-pointer stroke-indigo-500 hover:stroke-indigo-600'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M19 9l-7 7-7-7'
											/>
										</svg>
									)}
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
		</div>
	);
};

export default Comment;
