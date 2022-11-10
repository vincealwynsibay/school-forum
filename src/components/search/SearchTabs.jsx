import React, { useState } from "react";
import GroupsList from "../groups/GroupsList";
import PostsList from "../posts/PostsList";
import ProfilesList from "../profiles/ProfilesList";
import styled from "styled-components";

const Tabs = styled.ul`
	display: flex;
	align-items: center;
	gap: 1rem;
	list-style: none;
	background-color: ${(props) => props.theme.primary};
	border-radius: 20px;

	> li {
		padding: 1.5rem 2rem;
		cursor: pointer;
		position: relative;

		:hover::before {
			content: "";
			position: absolute;
			width: 100%;
			height: 4px;
			border-radius: 4px;
			background-color: ${(props) => props.theme.accent};
			bottom: 0;
			left: 0;
		}
	}
`;

function SearchTabs({ groups, posts, profiles }) {
	const [activeTab, setActiveTab] = useState("posts");
	return (
		<div>
			<Tabs>
				<li onClick={() => setActiveTab("posts")}>Posts</li>
				<li onClick={() => setActiveTab("groups")}>Groups</li>
				<li onClick={() => setActiveTab("profiles")}>Profiles</li>
			</Tabs>
			<div>
				{activeTab === "posts" && <PostsList posts={posts} />}
				{activeTab === "groups" && <GroupsList groups={groups} />}
				{activeTab === "profiles" && (
					<ProfilesList profiles={profiles} />
				)}
			</div>
		</div>
	);
}

export default SearchTabs;
