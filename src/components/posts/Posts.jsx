import {
	doc,
	serverTimestamp,
	setDoc,
	Timestamp,
	updateDoc,
} from "firebase/firestore";
import React from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { db, timestamp } from "../../utils/firebase";
import Wrapper from "../layout/Wrapper";
import PostsList from "./PostsList";
import styled from "styled-components";

const Container = styled.div`
	padding-top: 2rem;
`;

const Posts = () => {
	const { id } = useParams();
	const { documents, error } = useCollection(
		"posts",
		id ? [["group", "==", id]] : null,
		["created_at", "desc"]
	);

	if (!id) {
		return (
			<Wrapper>
				<Container className=''>
					<div className=''></div>
					{error && <p>{error.message}</p>}
					<PostsList posts={documents} />
				</Container>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<Container className=''>
				{error && <p>{error.message}</p>}
				<PostsList posts={documents} />
			</Container>
		</Wrapper>
	);
};

export default Posts;
