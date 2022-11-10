import React, { useState, useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";
import { useQuery } from "../../hooks/useQuery";
import styled from "styled-components";
import PostsList from "../posts/PostsList";
import { useLocation, useSearchParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../utils/firebase";
import GroupsList from "../groups/GroupsList";
import SearchTabs from "./SearchTabs";

const Header = styled.h2`
	font-size: 1.6rem;
	margin-bottom: 2rem;
`;

const Container = styled.div``;

function SearchResults() {
	let searchQuery = useQuery();
	const [queryText, setQueryText] = useState(searchQuery.get("query"));
	const [posts, setPosts] = useState([]);
	const [groups, setGroups] = useState([]);
	const [profiles, setProfiles] = useState([]);

	const { search } = useLocation();

	useEffect(() => {
		getPosts().catch();
		getGroups().catch();
		getProfiles().catch();
	}, []);

	useEffect(() => {
		setQueryText(searchQuery.get("query"));
		getPosts().catch();
		getGroups().catch();
		getProfiles().catch();
	}, [search, posts]);

	const getPosts = async () => {
		const posts = [];
		const q = query(
			collection(db, "posts"),
			where("title", ">=", queryText),
			where("title", "<=", queryText + "\uf8ff")
		);
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			posts.push({ id: doc.id, ...doc.data() });
		});

		setPosts(posts);
	};
	const getGroups = async () => {
		const groups = [];
		const q = query(
			collection(db, "groups"),
			where("name", ">=", queryText),
			where("name", "<=", queryText + "\uf8ff")
		);
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			groups.push({ id: doc.id, ...doc.data() });
		});

		setGroups(groups);
	};
	const getProfiles = async () => {
		const profiles = [];
		const q = query(
			collection(db, "users"),
			where("displayName", ">=", queryText),
			where("displayName", "<=", queryText + "\uf8ff")
		);
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			profiles.push({ id: doc.id, ...doc.data() });
		});

		setProfiles(profiles);
	};

	return (
		<div>
			<Container>
				<Header>Search Results</Header>
				<SearchTabs posts={posts} groups={groups} profiles={profiles} />
			</Container>
		</div>
	);
}

export default SearchResults;
