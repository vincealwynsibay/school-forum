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
import PostsList from "./PostsList";

const Posts = () => {
	const { id } = useParams();
	const { documents, error } = useCollection(
		"posts",
		id ? ["group", "==", id] : null,
		["created_at", "desc"]
	);

	if (!id) {
		return (
			<div className='max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-full lg:px-40'>
				<div className='flex justify-between items-center mb-4'></div>
				{error && <p>{error.message}</p>}
				<PostsList posts={documents} />
			</div>
		);
	}

	return (
		<div>
			<div className=''>
				{error && <p>{error.message}</p>}
				<PostsList posts={documents} />
			</div>
		</div>
	);
};

export default Posts;
