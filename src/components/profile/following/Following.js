import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../layout/Spinner";
import FollowingItem from "./FollowingItem";

const Following = () => {
	const { id } = useParams();
	const [following, setFollowing] = useState([]);
	const { document: profile, isPending } = useDocument("users", id);
	useEffect(() => {
		if (profile) {
			setFollowing(profile.following);
		}
	});
	if (isPending) {
		return <Spinner />;
	}

	if (!following) {
		return null;
	}

	return (
		<div>
			<div>
				{following.map((following) => {
					return (
						<FollowingItem
							key={following}
							followingId={following}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Following;
