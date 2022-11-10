import React, { useState } from "react";
import Search from "../search/Search";
import styled from "styled-components";
import Posts from "../posts/Posts";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";

const CreatePostContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	margin-top: 2rem;
	border-radius: 20px;
	background-color: ${(props) => props.theme.primary};
`;

const CreatePostLink = styled(Link)`
	padding: 1rem 2rem;
	width: 100%;
	border-radius: 20px;
	background-color: ${(props) => props.theme.accent};
	color: ${(props) => props.theme.neutral};
	font-weight: 700;

	:hover {
		color: ${(props) => props.theme.accentHover};
	}
`;

const Avatar = styled.img`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
`;

const AvatarContainer = styled.div``;

function Home() {
	const { user } = useAuthContext();

	return (
		<div>
			<div>
				{user && (
					<CreatePostContainer>
						<AvatarContainer>
							<Avatar src={user.photoURL} />
						</AvatarContainer>
						<CreatePostLink to='/posts/create'>
							Create Post
						</CreatePostLink>
					</CreatePostContainer>
				)}
			</div>
			<Posts />
		</div>
	);
}

export default Home;
