import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import { auth, db } from "../../utils/firebase";
import EditDescription from "./edit/EditDescription";
import Spinner from "../spinner/Spinner";
import Posts from "../posts/Posts";
import ChangeAvatar from "./edit/ChangeAvatar";
import toast from "react-hot-toast";
import styled from "styled-components";
import PostsList from "../posts/PostsList";
import { useCollection } from "../../hooks/useCollection";

const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
	gap: 1rem;
	padding: 1rem;
	background: ${(props) => props.theme.primary};
	border-radius: 20px;

	> :last-child {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: right;
	}
`;

const GroupDetails = styled.div`
	display: flex;
	gap: 1rem;

	> :first-child {
		width: 5rem;
	}

	> :last-child {
		display: flex;
		flex-direction: column;
	}
	& h2 {
		font-size: 1.8rem;
		font-weight: 700;
		margin: 0;
	}
`;
const Avatar = styled.img`
	border-radius: 100%;
	width: 5rem;
	height: 5rem;
`;

const CreatePostContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	margin-top: 2rem;
	border-radius: 20px;
	background-color: ${(props) => props.theme.primary};
`;

const CreatePostLink = styled(Link)`
	padding: 1rem 2rem;
	width: 100%;
	border-radius: 20px;
	background-color: ${(props) => props.theme.neutral};
	color: ${(props) => props.theme.black};

	:hover {
		color: ${(props) => props.theme.accent};
	}
`;

const CreatePostAvatar = styled.img`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
`;

const Button = styled.button`
	padding: 0.8rem 1.5rem;
	background-color: ${(props) => props.theme.accent};
	color: white;
	border-radius: 20px;

	:hover {
		background-color: ${(props) => props.theme.accentHover};
	}
`;

const Group = () => {
	const { id } = useParams();
	const { document: group, error, isPending } = useDocument("groups", id);
	const { documents: posts } = useCollection("posts");

	console.log(posts);

	const groupRef = doc(db, "groups", id);

	if (isPending) {
		return <Spinner />;
	}

	const joinGroup = async () => {
		updateDoc(groupRef, {
			members: arrayUnion(auth.currentUser.uid),
		});
		toast.success(`You joined ${group.name}`);
	};
	const leaveGroup = async () => {
		updateDoc(groupRef, {
			members: arrayRemove(auth.currentUser.uid),
		});
		toast.success(`You left ${group.name}`);
	};

	return (
		<div>
			{group ? (
				<>
					<TopContainer>
						<GroupDetails>
							<div>
								<Avatar src={group.photoURL} />
							</div>
							<div>
								<h2>{group.name}</h2>
								<p>{group.description}</p>
								<Link to={`/group/${group.id}/members`}>
									<p>Members: {group.members.length}</p>
								</Link>
							</div>
						</GroupDetails>
						<div>
							{auth.currentUser && (
								<div>
									{!group.members.some(
										(member) =>
											member === auth.currentUser.uid
									) ? (
										<Button onClick={joinGroup}>
											Join
										</Button>
									) : (
										<Button onClick={leaveGroup}>
											Leave
										</Button>
									)}
								</div>
							)}
							{auth.currentUser &&
								group.members.some(
									(member) => member === auth.currentUser.uid
								) &&
								auth.currentUser.uid === group.admin && (
									<>
										<EditDescription
											id={group.id}
											descriptionValue={group.description}
										/>
										<ChangeAvatar group={group} />
									</>
								)}
						</div>
					</TopContainer>

					{auth.currentUser &&
						group.members.some(
							(member) => member === auth.currentUser.uid
						) && (
							<CreatePostContainer>
								<div>
									<CreatePostAvatar
										src={auth.currentUser.photoURL}
									/>
								</div>
								<CreatePostLink
									to={`/group/${group.id}/post/create`}
								>
									Create Post
								</CreatePostLink>
							</CreatePostContainer>
						)}

					<PostsList posts={posts} />
				</>
			) : (
				<p>document does not exist</p>
			)}
		</div>
	);
};

export default Group;
