import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../../utils/firebase";
import AddPhoto from "../AddPhoto";
import toast from "react-hot-toast";
const CreatePost = () => {
	const [formData, setFormData] = useState({
		title: "",
		content: "",
		photo: null,
	});
	const { group_id } = useParams();
	const { title, content, photo } = formData;
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handlePhotoChange = (url) => {
		setFormData({ ...formData, photo: url });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const docRef = await addDoc(collection(db, "posts"), {
			title,
			content,
			photoURL: photo,
			author: auth.currentUser.uid,
			group: group_id,
			upvotes: [],
			downvotes: [],
		});
		if (docRef) {
			toast.success("Post created successfully");

			navigate(`/group/${group_id}/post/${docRef.id}`);
		}
	};

	return (
		<div class='max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-full lg:px-40'>
			<h1 className='text-3xl font-medium mb-4'>Create Post</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type='text'
						name='title'
						value={title}
						onChange={handleChange}
						placeholder='Title'
						className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
					/>
				</div>
				<div>
					<textarea
						type='text'
						name='content'
						value={content}
						onChange={handleChange}
						placeholder='Content'
						className='shadow-sm mb-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
					/>
				</div>
				<div>
					<AddPhoto
						handlePhotoChange={handlePhotoChange}
						photo={photo}
					/>
				</div>

				<input
					type='submit'
					value='Create Post'
					className='mt-4 mr-3 w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer'
				/>
			</form>
		</div>
	);
};

export default CreatePost;
