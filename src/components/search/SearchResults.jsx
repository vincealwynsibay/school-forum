import React, { useState, useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";
import { useQuery } from "../../hooks/useQuery";
import Wrapper from "../layout/Wrapper";
import styled from "styled-components";
import PostsList from "../posts/PostsList";

const Header = styled.h2`
	font-size: 1.6rem;
	margin-bottom: 2rem;
`;

const Container = styled.div``;

function SearchResults() {
	let searchQuery = useQuery();
	const [queryText, setQueryText] = useState(searchQuery.get("query") || "");

	useEffect(() => {
		setQueryText(searchQuery.get("query"));
	}, [searchQuery]);

	const { documents: posts } = useCollection("posts", [
		["title", ">=", queryText],
		["title", "<=", queryText + "\uf8ff"],
	]);
	const { documents: groups } = useCollection("groups", [
		["name", ">=", queryText],
		["name", "<=", queryText + "\uf8ff"],
	]);
	console.log(posts);

	return (
		<Wrapper>
			<Container>
				<Header>Posts</Header>
				<PostsList posts={posts} />
			</Container>
			{/* <div>
				<Header>Groups</Header>
				{groups &&
					groups.map((group) => (
						<div key={group.name + group.description}>
							{group.name}
						</div>
					))}
			</div> */}
		</Wrapper>
	);
}

export default SearchResults;
