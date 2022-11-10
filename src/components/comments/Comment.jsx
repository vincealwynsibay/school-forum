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
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	background-color: ${(props) => props.theme.primary};
	border-radius: 20px;
`;

const DetailsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const VoteContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		> svg {
			width: 1.3rem;
			cursor: pointer;
			:hover {
				color: ${(props) => props.theme.accent};
			}
		}
	}
`;
const AvatarContainer = styled.div`
	> a {
		display: flex;
		align-items: center;
		gap: 1rem;
		color: ${(props) => props.theme.black};
		:hover {
			color: ${(props) => props.theme.accent};
		}
	}

	& img {
		border-radius: 50%;
		width: 1.7rem;
		height: 1.7rem;
	}
`;

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
		<Container>
			<div>
				<p>{comment.content}</p>
			</div>

			<DetailsContainer>
				<VoteContainer>
					{auth.currentUser && (
						<div onClick={upvote}>
							{!comment.upvotes.some(
								(upvote) => upvote === auth.currentUser.uid
							) ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
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
							<p>{comment.upvotes.length}</p>
						</div>
					)}
					{auth.currentUser && (
						<div onClick={downvote}>
							{!comment.downvotes.some(
								(downvote) => downvote === auth.currentUser.uid
							) ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
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
							<p>{comment.downvotes.length}</p>
						</div>
					)}
				</VoteContainer>
				<AvatarContainer>
					<Link to={`/profile/${commentUser.id}`}>
						<img
							src={commentUser && commentUser.photoURL}
							alt='avatar'
						/>
						<p>{commentUser && commentUser.displayName}</p>
					</Link>
				</AvatarContainer>
			</DetailsContainer>
		</Container>
	);
};

export default Comment;
