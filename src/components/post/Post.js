import {
	arrayRemove,
	arrayUnion,
	deleteDoc,
	doc,
	updateDoc,
} from "firebase/firestore";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import { auth, db } from "../../utils/firebase";
import Comments from "../comments/Comments";
import Spinner from "../layout/Spinner";
import { useNavigate } from "react-router-dom";

const Post = () => {
	const { group_id, post_id } = useParams();
	const { document: post, error, isPending } = useDocument("posts", post_id);
	const { document: author } = useDocument("users", post && post.author);
	const { document: group } = useDocument("groups", post && post.group);
	const postRef = doc(db, "posts", post_id);
	const navigate = useNavigate();
	if (isPending) {
		return <Spinner />;
	}

	if (!author) {
		return null;
	}

	const upvote = async () => {
		if (!post.upvotes.some((upvote) => upvote === auth.currentUser.uid)) {
			if (
				post.downvotes.some(
					(downvote) => downvote === auth.currentUser.uid
				)
			) {
				updateDoc(postRef, {
					downvotes: arrayRemove(auth.currentUser.uid),
				});
			}
			updateDoc(postRef, {
				upvotes: arrayUnion(auth.currentUser.uid),
			});
		} else {
			updateDoc(postRef, {
				upvotes: arrayRemove(auth.currentUser.uid),
			});
		}
	};
	const downvote = async () => {
		if (
			!post.downvotes.some(
				(downvote) => downvote === auth.currentUser.uid
			)
		) {
			if (
				post.upvotes.some((upvote) => upvote === auth.currentUser.uid)
			) {
				updateDoc(postRef, {
					upvotes: arrayRemove(auth.currentUser.uid),
				});
			}
			updateDoc(postRef, {
				downvotes: arrayUnion(auth.currentUser.uid),
			});
		} else {
			updateDoc(postRef, {
				downvotes: arrayRemove(auth.currentUser.uid),
			});
		}
	};

	const deletePost = async () => {
		await deleteDoc(doc(db, "posts", post_id));
		navigate(`/group/${group_id}/`);
	};

	return (
		<div
			className='max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-full lg:px-40
		'
		>
			{post ? (
				<div>
					<div className='max-w-full px-10 my-4 py-6 bg-white rounded-lg shadow-md'>
						<div className='flex gap-6'>
							{auth.currentUser && (
								<div className='flex flex-col gap-2 my-6'>
									{
										<div
											className='font-medium text-xs flex items-center'
											onClick={upvote}
										>
											{!post.upvotes.some(
												(upvote) =>
													upvote ===
													auth.currentUser.uid
											) ? (
												<svg
													className='h-10 w-10 cursor-pointer stroke-indigo-500 hover:stroke-indigo-600'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													strokeWidth='1'
												>
													<path d='M8 0.5l-7.5 7.5h4.5v8h6v-8h4.5z'></path>
												</svg>
											) : (
												<svg
													className='h-10 w-10  cursor-pointer stroke-transparent fill-indigo-500 hover:fill-indigo-600'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													strokeWidth='1'
												>
													<path d='M8 0.5l-7.5 7.5h4.5v8h6v-8h4.5z'></path>
												</svg>
											)}
											<span className='font-semibold'>
												{post.upvotes.length}
											</span>
										</div>
									}
									{
										<div
											className='font-medium text-xs flex items-center'
											onClick={downvote}
										>
											{!post.downvotes.some(
												(downvote) =>
													downvote ===
													auth.currentUser.uid
											) ? (
												<svg
													className='h-10 w-10 cursor-pointer stroke-indigo-500 hover:stroke-indigo-600'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													strokeWidth='1'
												>
													<path d='M8 15.5l7.5-7.5h-4.5v-8h-6v8h-4.5z'></path>
												</svg>
											) : (
												<svg
													className='h-10 w-10 cursor-pointer stroke-transparent fill-indigo-500 hover:fill-indigo-600'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													strokeWidth='1'
												>
													<path d='M8 15.5l7.5-7.5h-4.5v-8h-6v8h-4.5z'></path>
												</svg>
											)}
											<span className='font-semibold'>
												{post.downvotes.length}
											</span>
										</div>
									}
								</div>
							)}
							<div>
								<div className='mb-9'>
									<div className='flex justify-between items-center '>
										<div className='flex items-center justify-between max-w-sm mt-6'>
											<Link
												className='text-md text-gray-700 font-medium hover:text-gray-600  flex items-center'
												to={`/group/${post.group}`}
											>
												<img
													className='mr-4 w-8 h-8 object-cover rounded-full hidden sm:block'
													src={
														group && group.photoURL
													}
													alt='avatar'
												/>
												<h1 className='text-gray-700 font-bold'>
													{group && group.name}
												</h1>
											</Link>
											<p className='mx-1'> posted by </p>
											<Link
												className='flex items-center'
												to={`/profile/${author.id}`}
											>
												<h1 className='text-gray-700 font-bold'>
													{author &&
														author.displayName}
												</h1>
											</Link>
										</div>
									</div>
									<h3 className='text-3xl leading-normal font-bold text-gray-900 mt-7 mb-5'>
										{post.title}
									</h3>
								</div>
								<div>
									{" "}
									{auth.currentUser &&
										auth.currentUser.uid ===
											post.author && (
											<Link
												to={`/group/${post.group}/post/${post.id}/edit`}
												className='mr-3 w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer'
											>
												Edit Post
											</Link>
										)}
									{auth.currentUser &&
										auth.currentUser.uid ===
											post.author && (
											<a
												onClick={deletePost}
												href='#'
												className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500  sm:w-auto sm:text-sm'
											>
												Delete Post
											</a>
										)}
								</div>

								<div className='mb-5'>
									<p className='text-[1.2rem] mb-7 leading-normal'>
										{post.content}
									</p>

									<img
										src={post.photoURL}
										className='max-w-md max-h-md'
									/>
								</div>
							</div>
						</div>
					</div>
					<Comments />
				</div>
			) : (
				<p>document does not exist</p>
			)}
		</div>
	);
};

export default Post;
