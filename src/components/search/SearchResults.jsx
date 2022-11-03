import React from "react";
import { useCollection } from "../../hooks/useCollection";
import { useQuery } from "../../hooks/useQuery";

function SearchResults() {
	let searchQuery = useQuery();
	const queryText = searchQuery.get("query") || "";

	const { documents: posts } = useCollection("posts", [
		["title", ">=", queryText],
		["title", "<=", queryText + "\uf8ff"],
	]);
	const { documents: groups } = useCollection("groups", [
		["name", ">=", queryText],
		["name", "<=", queryText + "\uf8ff"],
	]);

	console.log(posts);
	console.log(groups);

	return (
		<div>
			<div>
				<h2>Posts</h2>
				{posts &&
					posts.map((post) => (
						<div key={post.created_at.seconds}>{post.title}</div>
					))}
			</div>
			<div>
				<h2>Groups</h2>
				{groups &&
					groups.map((group) => (
						<div key={group.name + group.description}>
							{group.name}
						</div>
					))}
			</div>
		</div>
	);
}

export default SearchResults;
