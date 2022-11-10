import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import Spinner from "../../spinner/Spinner";
import FollowerItem from "./FollowerItem";
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
	}
`;

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

	return (
		<Container>
			<h2>Followers</h2>
			<div>
				{followers.map((follower) => {
					return (
						<FollowerItem key={follower} followerId={follower} />
					);
				})}
			</div>
			{followers.length === 0 && <div>No followers</div>}
		</Container>
	);
};

export default Followers;
