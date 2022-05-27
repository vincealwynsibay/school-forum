import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../layout/Spinner";
import FollowerItem from "./FollowerItem";

const Followers = () => {
	const { id } = useParams();
	const [followers, setFollowers] = useState([]);
	const { document: profile, isPending } = useDocument("users", id);
	useEffect(() => {
		if (profile) {
			setFollowers(profile.followers);
		}
	});
	if (isPending) {
		return <Spinner />;
	}

	if (!followers) {
		return null;
	}

	console.log(followers);

	return (
		<div>
			<div>
				{followers.map((follower) => {
					return (
						<FollowerItem key={follower} followerId={follower} />
					);
				})}
			</div>
		</div>
	);
};

export default Followers;
