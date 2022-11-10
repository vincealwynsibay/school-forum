import React from "react";
import { Link } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import styled from "styled-components";
import { BiCommentDetail } from "react-icons/bi";
import { useCollection } from "../../hooks/useCollection";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { AiOutlineArrowUp } from "react-icons/ai";
import { auth, db } from "../../utils/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const Container = styled.div`
	padding: 1rem 0;
	border-radius: 20px;
	background-color: ${(props) => props.theme.primary};
	display: flex;
	cursor: pointer;
`;

const TopDetails = styled.div`
	display: flex;
	align-items: center;
	gap: 0.325rem;
	color: ${(props) => props.theme.black};
	font-size: 0.9rem;

	a {
		color: ${(props) => props.theme.black};

		:hover {
			color: ${(props) => props.theme.accent};
		}
	}
`;

const GroupAvatar = styled.img`
	width: 100%;
	border-radius: 50%;
	width: 1.5rem;
	height: 1.5rem;
`;

const GroupDetails = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	color: ${(props) => props.theme.black};

	:hover {
		color: ${(props) => props.theme.accent};
	}
`;

const Content = styled.div`
	margin: 1rem 0;
	width: 100%;

	color: ${(props) => props.theme.black};

	:hover {
		color: ${(props) => props.theme.accent};
	}

	> h2 {
		font-size: 1.4rem;
		font-weight: 600;
	}

	> p {
		font-size: 1.1rem;
	}

	> div {
		background-color: #737373;
		margin: 1rem 0;
	}
`;

const BottomDetails = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: #595959;
	font-size: 0.9rem;
	color: ${(props) => props.theme.gray};
`;

const CommentDetails = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	> svg {
		z-index: 1;
		transform: scale(1.5);
	}
`;

const VotesContainer = styled.div`
	text-align: center;
	padding: 0 0.5rem;

	> * {
		display: block;
	}
	> svg {
		width: 2.5rem;
		stroke: ${(props) => props.theme.neutral};
		fill: ${(props) => props.theme.primary};
		transition: all 0.1s ease-in-out;
	}

	> svg:hover {
		stroke: ${(props) => props.theme.accent};
		fill: ${(props) => props.theme.accent};
	}
`;

const DetailsContainer = styled.div`
	width: 100%;
	padding-right: 3.5rem;
`;

const Image = styled.img`
	max-width: 20rem;
	width: 100%;
	margin: 0 auto;
`;

const PostItem = ({ post }) => {
	const { document: user } = useDocument("users", post.author);
	const { document: group } = useDocument("groups", post.group);
	const { documents: comments } = useCollection("comments", [
		"post",
		"==",
		post.id,
	]);
	if (!post || !user || !group) {
		return null;
	}

	const upvote = async () => {
		if (!auth.currentUser) {
			return navigate("/login");
		}

		const postRef = doc(db, "posts", post.id);

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
		if (!auth.currentUser) {
			return navigate("/login");
		}

		const postRef = doc(db, "posts", post.id);

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

	return (
		<Container>
			<VotesContainer>
				<svg
					clipRule='evenodd'
					fillRule='evenodd'
					strokeLinejoin='round'
					strokeMiterlimit='2'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					onClick={() => upvote()}
				>
					<path
						d='m9.001 10.978h-3.251c-.412 0-.75-.335-.75-.752 0-.188.071-.375.206-.518 1.685-1.775 4.692-4.945 6.069-6.396.189-.2.452-.312.725-.312.274 0 .536.112.725.312 1.377 1.451 4.385 4.621 6.068 6.396.136.143.207.33.207.518 0 .417-.337.752-.75.752h-3.251v9.02c0 .531-.47 1.002-1 1.002h-3.998c-.53 0-1-.471-1-1.002z'
						fillRule='nonzero'
					/>
				</svg>
				<p>{post.upvotes.length - post.downvotes.length}</p>
				<svg
					clipRule='evenodd'
					fillRule='evenodd'
					strokeLinejoin='round'
					strokeMiterlimit='2'
					viewBox='0 0 24 24'
					onClick={() => downvote()}
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z'
						fillRule='nonzero'
					/>
				</svg>
			</VotesContainer>

			<DetailsContainer>
				{/* Top  */}
				<TopDetails>
					<Link to={`/group/${post.group}`}>
						<GroupDetails>
							<GroupAvatar
								src={group && group.photoURL}
								alt='avatar'
							/>
							<p> {group && group.name}</p>
						</GroupDetails>
					</Link>
					<span>•</span>
					<p> Posted by </p>
					<Link to={`/profile/${user.id}`}>
						{user && user.displayName}
					</Link>
				</TopDetails>

				<Link to={`/group/${post.group}/post/${post.id}`}>
					{/* Content */}
					<Content>
						<h2>{post.title}</h2>

						<p>{`${post.content.substring(0, 200)}`}...</p>
						{/* Image */}
						<div>
							{post.photoURL && <Image src={post.photoURL} />}
						</div>
					</Content>
				</Link>

				<BottomDetails>
					{/* Comments */}
					<CommentDetails>
						<BiCommentDetail />
						<p>{comments && comments.length} Comments</p>
					</CommentDetails>
				</BottomDetails>
			</DetailsContainer>
		</Container>
	);
};

export default PostItem;
