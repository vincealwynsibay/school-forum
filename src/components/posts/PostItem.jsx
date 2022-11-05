import React from "react";
import { Link } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import styled from "styled-components";
import { BiCommentDetail } from "react-icons/bi";
import { useCollection } from "../../hooks/useCollection";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { AiOutlineArrowUp } from "react-icons/ai";

const Container = styled.div`
	border: 1px solid #737373;
	padding: 1rem 0;
	border-radius: 3px;
	display: flex;
`;

const TopDetails = styled.div`
	display: flex;
	align-items: center;
	gap: 0.325rem;
	color: #595959;
	font-size: 0.9rem;
`;

const GroupAvatar = styled.img`
	width: 100%;
	border-radius: 50%;
	width: 1.5rem;
`;

const GroupDetails = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	color: #262626;
`;

const Content = styled.div`
	margin: 1rem 0;

	> h2 {
		font-size: 1.4rem;
		font-weight: 600;
	}

	> p {
		font-size: 1.1rem;
	}
`;

const BottomDetails = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: #595959;
	font-size: 0.9rem;
`;

const CommentDetails = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	> svg {
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
		stroke: #1c3d52;
		fill: #fff;
		transition: all 0.1s ease-in-out;
	}

	> svg:hover {
		stroke: #1c3d52;
		fill: #1c3d52;
	}
`;

const PostItem = ({ post }) => {
	const { document: user } = useDocument("users", post.author);
	const { document: group } = useDocument("groups", post.group);
	const { documents: comments } = useCollection("comments", [
		["post", "==", post.id],
	]);
	if (!post || !user || !group) {
		return null;
	}

	return (
		<Container className=''>
			<VotesContainer>
				<svg
					clip-rule='evenodd'
					fill-rule='evenodd'
					stroke-linejoin='round'
					stroke-miterlimit='2'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='m9.001 10.978h-3.251c-.412 0-.75-.335-.75-.752 0-.188.071-.375.206-.518 1.685-1.775 4.692-4.945 6.069-6.396.189-.2.452-.312.725-.312.274 0 .536.112.725.312 1.377 1.451 4.385 4.621 6.068 6.396.136.143.207.33.207.518 0 .417-.337.752-.75.752h-3.251v9.02c0 .531-.47 1.002-1 1.002h-3.998c-.53 0-1-.471-1-1.002z'
						fill-rule='nonzero'
					/>
				</svg>
				<p>{post.upvotes.length - post.downvotes.length}</p>
				<svg
					clip-rule='evenodd'
					fill-rule='evenodd'
					stroke-linejoin='round'
					stroke-miterlimit='2'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002z'
						fill-rule='nonzero'
					/>
				</svg>
			</VotesContainer>

			<div>
				<Link to={`/group/${post.group}/post/${post.id}`}>
					{/* Top  */}
					<TopDetails className=''>
						<Link className='' to={`/group/${post.group}`}>
							<GroupDetails>
								<GroupAvatar
									className=''
									src={group && group.photoURL}
									alt='avatar'
								/>
								<p className=''> {group && group.name}</p>
							</GroupDetails>
						</Link>
						<span>•</span>
						<p className=''> Posted by </p>
						<Link className='' to={`/profile/${user.id}`}>
							{user && user.displayName}
						</Link>
					</TopDetails>

					{/* Content */}
					<Content className=''>
						<h2 className=''>{post.title}</h2>

						<p className=''>
							{`${post.content.substring(0, 200)}`}...
						</p>
					</Content>

					{/* Image */}
					<div>
						{post.photoURL && (
							<img
								className='max-w-sm max-h-sm'
								src={post.photoURL}
							/>
						)}
					</div>

					<BottomDetails>
						{/* Comments */}
						<CommentDetails className=''>
							<BiCommentDetail />
							<p className=''>
								{comments && comments.length} Comments
							</p>
						</CommentDetails>
					</BottomDetails>
				</Link>
			</div>
		</Container>
	);
};

export default PostItem;
