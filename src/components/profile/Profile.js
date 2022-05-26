import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import Spinner from "../layout/Spinner";

const Profile = () => {
	const { id } = useParams();
	const { document, error, isPending } = useDocument("users", id);

	if (isPending) {
		return <Spinner />;
	}

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
					<div>
						<p>Followers: {document.followers.length}</p>
						<p>Following: {document.following.length}</p>
					</div>
					<p>Status: {document.online ? "Online" : "Offline"}</p>
				</>
			) : (
				<p>document does not exist</p>
			)}
		</div>
	);
};

export default Profile;
