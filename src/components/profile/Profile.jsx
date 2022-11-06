import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import { auth, db } from "../../utils/firebase";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { useCollection } from "../../hooks/useCollection";
import PostsList from "../posts/PostsList";

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
			<div>
				<h3>
					{auth.currentUser.uid === document.id
						? `Your Posts`
						: `${document.name}'s Posts`}
				</h3>
				{error && <p>{error.message}</p>}
				<PostsList posts={posts} />
				{posts.length === 0 && <p>no posts</p>}
			</div>

			<div>
				{document ? (
					<>
						<img
							src={document.photoURL}
							alt={`${document.displayName}'s Profile`}
							className='h-20 w-20 rounded-full '
						/>
						<div className=''>
							<div className=''>
								<h3 className=''>{document.displayName}</h3>
								{auth.currentUser &&
									auth.currentUser.uid === id && (
										<Link to='/settings/profile'>
											<svg
												x-description='Heroicon name: solid/pencil'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 20 20'
												fill='currentColor'
												aria-hidden='true'
											>
												<path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'></path>
											</svg>
											Edit Profile
										</Link>
									)}
								{auth.currentUser &&
									auth.currentUser.uid !== id && (
										<>
											{!document.followers.some(
												(follower) =>
													follower ===
													auth.currentUser.uid
											) ? (
												<button onClick={followUser}>
													Follow
												</button>
											) : (
												<button onClick={unfollowUser}>
													Unfollow
												</button>
											)}
										</>
									)}
							</div>
						</div>
						<p>{document.bio === "" ? "No Bio" : document.bio}</p>
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
									{document.online ? "Online" : "Offline"}
								</p>
							</div>
						)}
					</>
				) : (
					<p>document does not exist</p>
				)}
			</div>
		</div>
	);
};

export default Profile;
