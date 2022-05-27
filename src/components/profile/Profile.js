import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import { auth, db } from "../../utils/firebase";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

const Profile = () => {
	const { id } = useParams();
	const { document, error, isPending } = useDocument("users", id);
	const profileRef = doc(db, "users", id);

	if (isPending) {
		return <Spinner />;
	}

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

	return (
		<div>
			{document ? (
				<>
					<img
						src={document.photoURL}
						alt={`${document.displayName}'s Profile`}
					/>
					<h3>{document.displayName}</h3>
					<p>{document.bio}</p>
					{auth.currentUser && auth.currentUser.uid !== document.id && (
						<>
							otin
							{!document.followers.some(
								(follower) => follower === auth.currentUser.uid
							) ? (
								<button onClick={followUser}>Follow</button>
							) : (
								<button onClick={unfollowUser}>Unfollow</button>
							)}
						</>
					)}
					<div>
						<Link to={`/profile/${id}/followers`}>
							<p>Followers: {document.followers.length}</p>
						</Link>
						<Link to={`/profile/${id}/following`}>
							<p>Following: {document.following.length}</p>
						</Link>
					</div>
					{auth.currentUser && (
						<>
							<div className=''>
								<h3>Settings</h3>
								<Link to='/settings/account'>Edit Profile</Link>
								<Link to='/settings/profile'>Edit Account</Link>
							</div>
							<p>
								Status: {document.online ? "Online" : "Offline"}
							</p>
						</>
					)}
				</>
			) : (
				<p>document does not exist</p>
			)}
		</div>
	);
};

export default Profile;
