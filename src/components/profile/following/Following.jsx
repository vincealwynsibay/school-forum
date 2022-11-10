import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../spinner/Spinner";
import FollowingItem from "./FollowingItem";
import styled from "styled-components";

const Container = styled.div`
	padding-top: 4rem;

	> h2 {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}

	> div {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
`;
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
		<Container>
			<h2>Following</h2>
			<div>
				{following.map((following) => {
					return (
						<FollowingItem
							key={following}
							followingId={following}
						/>
					);
				})}

				{following.length === 0 && <div>No following</div>}
			</div>
		</Container>
	);
};

export default Following;
