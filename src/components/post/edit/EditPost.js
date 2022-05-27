import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
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
		console.log(post);
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
			navigate(`/group/${group_id}/post/${post_id}`);
		});
	};

	return (
		<div>
			<h1>Edit Post</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type='text'
						name='title'
						value={title}
						onChange={handleChange}
						placeholder='TItle'
					/>
				</div>
				<div>
					<textarea
						type='text'
						name='content'
						value={content}
						onChange={handleChange}
						placeholder='Content'
					/>
				</div>

				<input type='submit' value='Update Post' />
			</form>
		</div>
	);
};

export default EditPost;
