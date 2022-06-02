import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import { db } from "../../../utils/firebase";
import AddPhoto from "../AddPhoto";

const EditPost = () => {
	const [formData, setFormData] = useState({
		title: "",
		content: "",
	});
	const { group_id, post_id } = useParams();
	const { document: post, error, isPending } = useDocument("posts", post_id);
	const navigate = useNavigate();

	useEffect(() => {
		if (post) {
			setFormData({
				title: post.title,
				content: post.content,
			});
		}
	}, [post]);

	const { title, content } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		await updateDoc(doc(db, "posts", post_id), {
			title,
			content,
		}).then(() => {
			toast.success("Post updated successfully");

			navigate(`/group/${group_id}/post/${post_id}`);
		});
	};

	return (
		<div class='max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-full lg:px-40'>
			<h1 className='text-3xl font-medium mb-4'>Edit Post</h1>
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

				<input
					type='submit'
					value='Update Post'
					className='mt-4 mr-3 w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer'
				/>
			</form>
		</div>
	);
};

export default EditPost;
