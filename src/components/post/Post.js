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

const Post = () => {
	const { post_id } = useParams();
	const { document: post, error, isPending } = useDocument("posts", post_id);
	const { document: author } = useDocument("users", post && post.author);
	const postRef = doc(db, "posts", post_id);
	if (isPending) {
		return <Spinner />;
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
	};

	return (
		<div>
			{post ? (
				<div>
					<h3>{post.title}</h3>
					<p>{post.content}</p>
					<p>{author && author.displayName}</p>
					<img src={post.photoURL} />
					{auth.currentUser &&
						auth.currentUser.uid === post.author && (
							<Link
								to={`/group/${post.group}/post/${post.id}/edit`}
							>
								Edit Post
							</Link>
						)}
					{auth.currentUser && auth.currentUser.uid === post.author && (
						<a onClick={deletePost} href='#'>
							Delete Post
						</a>
					)}
					<div>
						{auth.currentUser && (
							<button onClick={upvote}>upvote</button>
						)}
						<p>Upvotes: {post.upvotes.length}</p>
					</div>
					<div>
						{auth.currentUser && (
							<button onClick={downvote}>downvote</button>
						)}
						<p>Downvotes: {post.downvotes.length}</p>
					</div>
					<div>
						<Comments />
					</div>
				</div>
			) : (
				<p>document does not exist</p>
			)}
		</div>
	);
};

export default Post;
