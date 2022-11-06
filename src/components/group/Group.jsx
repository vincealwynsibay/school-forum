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
import Wrapper from "../layout/Wrapper";
import styled from "styled-components";
import PostsList from "../posts/PostsList";
import { useCollection } from "../../hooks/useCollection";

const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
	gap: 1rem;
	border: 1px solid #737373;
	padding: 1rem;

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
	& h2 {
		font-size: 2rem;
		font-weight: 700;
	}

	> :first-child {
		width: 5rem;
	}

	> :last-child {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
`;
const Avatar = styled.img`
	border-radius: 100%;
	width: 5rem;
	height: 5rem;
`;

const CreatePostContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	background-color: #1c3d52;
	border: 1px solid #000;
	padding: 1rem;
	margin-top: 2rem;
`;

const CreatePostLink = styled(Link)`
	padding: 1rem 2rem;
	background-color: #3a7fab;
	width: 85%;
	border-radius: 3px;
`;

const CreatePostAvatar = styled.img`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
`;

const Button = styled.button`
	padding: 0.8rem 1.5rem;
	background-color: #1c3d52;
	color: white;
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
		<Wrapper className=''>
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
										<Button
											className=''
											onClick={joinGroup}
										>
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
											className='mb-4'
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
		</Wrapper>
	);
};

export default Group;
