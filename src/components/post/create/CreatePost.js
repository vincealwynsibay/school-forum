import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../../utils/firebase";
import AddPhoto from "../AddPhoto";

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

		console.log({ ...formData });
		const docRef = await addDoc(collection(db, "posts"), {
			title,
			content,
			photoURL: photo,
			author: auth.currentUser.uid,
			group: group_id,
			upvotes: [],
			downvotes: [],
		});
		console.log(docRef.id);
		if (docRef) {
			navigate(`/group/${group_id}/post/${docRef.id}`);
		}
	};

	return (
		<div>
			<h1>Create Post</h1>
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
				<div>
					<AddPhoto
						handlePhotoChange={handlePhotoChange}
						photo={photo}
					/>
				</div>

				<input type='submit' value='Create Post' />
			</form>
		</div>
	);
};

export default CreatePost;
