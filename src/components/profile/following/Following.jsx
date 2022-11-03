import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../spinner/Spinner";
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
		<div className='max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-full lg:px-40'>
			<h2 className='text-5xl font-medium mb-10'>Members</h2>
			<div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
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
