import React from "react";
import Filter from "../filter/Filter";
import Search from "../search/Search";
import styled from "styled-components";
import Posts from "../posts/Posts";
import { useAuthContext } from "../../hooks/useAuthContext";
import Wrapper from "../layout/Wrapper";
import { Link } from "react-router-dom";

const CreatePostContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	background-color: #1c3d52;
	border: 1px solid #000;
	padding: 1rem;
	margin-top: 2rem;
`;

const CreatePostLink = styled(Link)`
	padding: 1rem 2rem;
	background-color: #3a7fab;
	width: 85%;
	border-radius: 3px;
`;

const Avatar = styled.img`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
`;

const AvatarContainer = styled.div``;

function Home({ filter }) {
	const { user } = useAuthContext();
	return (
		<div>
			<Wrapper>
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
			</Wrapper>
			<Posts filter={filter} />
		</div>
	);
}

export default Home;
