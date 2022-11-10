import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import { auth, db } from "../../utils/firebase";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import PostsList from "../posts/PostsList";
import { MdOutlineModeEditOutline } from "react-icons/md";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	@media (min-width: 768px) {
		flex-direction: row-reverse;

		> :nth-child(1) {
			flex-basis: 35%;
		}
		> :nth-child(2) {
			flex-basis: 65%;
		}
	}
`;

const ProfileContainer = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	border-radius: 20px;
	background-color: ${(props) => props.theme.primary};
	gap: 1rem;

	h3 {
		font-weight: 700;
		font-size: 1.2rem;
	}

	> :nth-of-type(2) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	> :nth-of-type(4) {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	a {
		color: ${(props) => props.theme.black};
		:hover {
			color: ${(props) => props.theme.accent};
		}
	}
`;

const Avatar = styled.img`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
`;

const EditLink = styled(Link)`
	display: flex;
	align-items: center;
	gap: 0.8rem;

	color: ${(props) => props.theme.black};
	:hover {
		color: ${(props) => props.theme.accent};
	}

	svg {
		transform: scale(1.5);
	}
`;

const PostsContainer = styled.div`
	> h3 {
		font-size: 1.8rem;
		font-weight: 700;
	}
`;

const Profile = () => {
	const { id } = useParams();
	const { document, error, isPending } = useDocument("users", id);
	const { documents: posts, isPending2 } = useCollection("posts", [
		"author",
		"==",
		id,
	]);

	const profileRef = doc(db, "users", id);

	const followUser = async () => {
		const currentUserRef = doc(db, "users", auth.currentUser.uid);
		await updateDoc(profileRef, {
			followers: arrayUnion(auth.currentUser.uid),
		});
		await updateDoc(currentUserRef, {
			following: arrayUnion(id),
		});
	};
	const unfollowUser = async () => {
		const currentUserRef = doc(db, "users", auth.currentUser.uid);
		await updateDoc(profileRef, {
			followers: arrayRemove(auth.currentUser.uid),
		});
		await updateDoc(currentUserRef, {
			following: arrayRemove(id),
		});
	};

	if (isPending || !posts) {
		return <Spinner />;
	}

	return (
		<div>
			<Container>
				<div>
					<ProfileContainer>
						{document ? (
							<>
								<div>
									<Avatar
										src={document.photoURL}
										alt={`${document.displayName}'s Profile`}
									/>
								</div>
								<div>
									<h3>{document.displayName}</h3>
									{auth.currentUser &&
										auth.currentUser.uid === id && (
											<EditLink to='/settings/profile'>
												<MdOutlineModeEditOutline />
												Edit Profile
											</EditLink>
										)}
									{auth.currentUser &&
										auth.currentUser.uid !== id && (
											<>
												{!document.followers.some(
													(follower) =>
														follower ===
														auth.currentUser.uid
												) ? (
													<button
														onClick={followUser}
													>
														Follow
													</button>
												) : (
													<button
														onClick={unfollowUser}
													>
														Unfollow
													</button>
												)}
											</>
										)}
								</div>
								<div>
									<p>
										{document.bio === ""
											? "No Bio"
											: document.bio}
									</p>
								</div>
								<div>
									<Link to={`/profile/${id}/followers`}>
										<p>
											<span>Followers:</span>{" "}
											{document.followers.length}
										</p>
									</Link>
									<Link to={`/profile/${id}/following`}>
										<p>
											<span>Following:</span>{" "}
											{document.following.length}
										</p>
									</Link>
								</div>
								{auth.currentUser && (
									<div>
										<p>
											<span>Status: </span>
											{document.online
												? "Online"
												: "Offline"}
										</p>
									</div>
								)}
							</>
						) : (
							<p>document does not exist</p>
						)}
					</ProfileContainer>
				</div>
				<PostsContainer>
					<h3>
						{auth.currentUser &&
						auth.currentUser.uid === document.id
							? `Your Posts`
							: `${document.displayName}'s Posts`}
					</h3>
					{error && <p>{error.message}</p>}
					<PostsList posts={posts} />
					{posts.length === 0 && <p>no posts</p>}
				</PostsContainer>
			</Container>
		</div>
	);
};

export default Profile;
