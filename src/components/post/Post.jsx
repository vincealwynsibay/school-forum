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
import Spinner from "../spinner/Spinner";
import Wrapper from "../layout/Wrapper";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
	MdOutlineModeEditOutline,
	MdDeleteOutline,
	MdOutlineInsertComment,
} from "react-icons/md";
import { useCollection } from "../../hooks/useCollection";

const Container = styled.div`
	margin-top: 2rem;
	border: 1px solid #737373;
	padding: 2rem 0;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
`;

const PostView = styled.div`
	display: flex;
`;

const TopDetails = styled.div`
	display: flex;
	align-items: center;
	gap: 0.375rem;
	color: #595959;
	font-size: 1rem;
`;

const GroupAvatar = styled.img`
	width: 100%;
	border-radius: 50%;
	width: 1.7rem;
`;

const GroupDetails = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	color: #262626;
`;

const Content = styled.div`
	margin: 1.5rem 0 2rem 0;

	> h2 {
		font-size: 1.6rem;
		font-weight: 600;
	}

	> p {
		font-size: 1.2rem;
	}
`;

const VotesContainer = styled.div`
	text-align: center;
	padding: 0 0.7rem;

	> * {
		display: block;
	}

	& svg {
		cursor: pointer;
		width: 2.2rem;
		stroke: #1c3d52;
		fill: #fff;
		transition: all 0.1s ease-in-out;
	}
	& svg.active {
		stroke: #1c3d52;
		fill: #1c3d52;
	}

	& svg:hover {
		stroke: #1c3d52;
		fill: #1c3d52;
	}

	@media (min-width: 768px) {
		& svg {
			width: 2.7rem;
		}
	}
`;

const BottomDetails = styled.div`
	display: flex;
	align-items: center;
	gap: 1.2rem;
	color: #595959;
	font-size: 1rem;

	& svg {
		transform: scale(1.5);
	}

	& p {
		display: none;
	}

	@media (min-width: 768px) {
		& p {
			display: block;
		}
		& a {
			display: flex;
			align-items: center;
			gap: 0.7rem;
		}
	}
`;

const CommentDetails = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.7rem;
`;

const Post = () => {
	const { group_id, post_id } = useParams();
	const { document: post, error, isPending } = useDocument("posts", post_id);
	const { document: author } = useDocument("users", post && post.author);
	const { document: group } = useDocument("groups", post && post.group);
	const { documents: comments } = useCollection("comments", [
		["post", "==", post_id],
	]);

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
		<Wrapper>
			{post ? (
				<div>
					<div>
						<Container>
							<PostView>
								{/* Votes */}
								{auth.currentUser && (
									<VotesContainer className=''>
										{
											<div onClick={upvote}>
												{!post.upvotes.some(
													(upvote) =>
														upvote ===
														auth.currentUser.uid
												) ? (
													<svg
														clipRule='evenodd'
														fillRule='evenodd'
														strokeLinejoin='round'
														strokeMiterlimit='2'
														viewBox='0 0 24 24'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='m9.001 10.978h-3.251c-.412 0-.75-.335-.75-.752 0-.188.071-.375.206-.518 1.685-1.775 4.692-4.945 6.069-6.396.189-.2.452-.312.725-.312.274 0 .536.112.725.312 1.377 1.451 4.385 4.621 6.068 6.396.136.143.207.33.207.518 0 .417-.337.752-.75.752h-3.251v9.02c0 .531-.47 1.002-1 1.002h-3.998c-.53 0-1-.471-1-1.002z'
															fillRule='nonzero'
														/>
													</svg>
												) : (
													<svg
														clipRule='evenodd'
														fillRule='evenodd'
														strokeLinejoin='round'
														strokeMiterlimit='2'
														viewBox='0 0 24 24'
														xmlns='http://www.w3.org/2000/svg'
														className='active'
													>
														<path
															d='m9.001 10.978h-3.251c-.412 0-.75-.335-.75-.752 0-.188.071-.375.206-.518 1.685-1.775 4.692-4.945 6.069-6.396.189-.2.452-.312.725-.312.274 0 .536.112.725.312 1.377 1.451 4.385 4.621 6.068 6.396.136.143.207.33.207.518 0 .417-.337.752-.75.752h-3.251v9.02c0 .531-.47 1.002-1 1.002h-3.998c-.53 0-1-.471-1-1.002z'
															fillRule='nonzero'
														/>
													</svg>
												)}
												<span className=''>
													{post.upvotes.length}
												</span>
											</div>
										}
										{
											<div onClick={downvote}>
												{!post.downvotes.some(
													(downvote) =>
														downvote ===
														auth.currentUser.uid
												) ? (
													<svg
														clipRule='evenodd'
														fillRule='evenodd'
														strokeLinejoin='round'
														strokeMiterlimit='2'
														viewBox='0 0 24 24'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z'
															fillRule='nonzero'
														/>
													</svg>
												) : (
													<svg
														clipRule='evenodd'
														fillRule='evenodd'
														className='active'
														strokeLinejoin='round'
														strokeMiterlimit='2'
														viewBox='0 0 24 24'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z'
															fillRule='nonzero'
														/>
													</svg>
												)}
												<span>
													{post.downvotes.length}
												</span>
											</div>
										}
									</VotesContainer>
								)}
								<div>
									<TopDetails>
										<Link to={`/group/${post.group}`}>
											<GroupDetails>
												<GroupAvatar
													src={
														group && group.photoURL
													}
													alt='avatar'
												/>
												<p>{group && group.name}</p>
											</GroupDetails>
										</Link>
										<span>•</span>
										<p> posted by </p>
										<Link to={`/profile/${author.id}`}>
											<h1>
												{author && author.displayName}
											</h1>
										</Link>
									</TopDetails>
									<Content>
										<h2>{post.title}</h2>
										<p>{post.content}</p>
									</Content>

									<BottomDetails>
										{/* Comments */}
										<CommentDetails className=''>
											<MdOutlineInsertComment />
											<p className=''>
												{comments && comments.length}{" "}
												Comments
											</p>
										</CommentDetails>
										{auth.currentUser &&
											auth.currentUser.uid ===
												post.author && (
												<Link
													to={`/group/${post.group}/post/${post.id}/edit`}
												>
													<MdOutlineModeEditOutline />
													<p>Edit Post</p>
												</Link>
											)}
										{auth.currentUser &&
											auth.currentUser.uid ===
												post.author && (
												<a
													onClick={deletePost}
													href='#'
												>
													<MdDeleteOutline />
													<p>Delete Post</p>
												</a>
											)}
									</BottomDetails>
								</div>
							</PostView>
						</Container>
					</div>
					<Comments />
				</div>
			) : (
				<p>document does not exist</p>
			)}
		</Wrapper>
	);
};

export default Post;
