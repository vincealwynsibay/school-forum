import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../../utils/firebase";
import AddPhoto from "../AddPhoto";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useCollection } from "../../../hooks/useCollection";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Select from "./Select";

const Container = styled.div`
	margin: 4rem 0;
	padding: 1.5rem;
	background-color: ${(props) => props.theme.primary};
	border-radius: 20px;
`;

const Header = styled.h2`
	font-size: 1.8rem;
	font-weight: 700;
	margin-bottom: 2rem;
	color: ${(props) => props.theme.black};
`;

const Form = styled.form`
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const Label = styled.label`
	display: block;
	text-transform: capitalize;
	margin-bottom: 0.5rem;
	color: ${(props) => props.theme.darkGray};
`;
const Input = styled.input`
	width: 100%;
	border: 1px solid #1c3d52;
	border-radius: 20px;
	padding: 0.8rem 1.5rem;
	font-size: 1rem;

	:focus {
		border: 1px solid ${(props) => props.theme.accent};
		outline: none;
	}
`;
const TextArea = styled.textarea`
	width: 100%;
	border: 1px solid #1c3d52;
	border-radius: 20px;
	padding: 0.8rem 1.5rem;
	font-size: 1rem;
	:focus {
		border: 1px solid ${(props) => props.theme.accent}};
		outline: none;
	}
`;
const Button = styled.button`
	cursor: pointer;
	border-radius: 20px;

	background-color: ${(props) => props.theme.accent};
	margin-top: 1rem;
	padding: 1rem 2rem;
	width: 100%;
	color: white;
	font-size: 1rem;
	font-weight: 600;

	:hover {
		background-color: ${(props) => props.theme.accentHover};
	}

	:active {
		outline: 0;
	}
`;

const CreatePost = () => {
	const [formData, setFormData] = useState({
		title: "",
		content: "",
		photo: null,
	});

	// params
	const { group_id } = useParams();

	// state for selected group
	const [selectedGroupId, setSelectedGroupId] = useState(
		group_id ? group_id : null
	);

	// user
	const { user } = useAuthContext();

	// fetch joined groups
	const { documents: groups } = useCollection("groups", [
		"members",
		"array-contains",
		user.uid,
	]);

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
			group: selectedGroupId,
			upvotes: [],
			downvotes: [],
			created_at: serverTimestamp(),
		});
		if (docRef) {
			toast.success("Post created successfully");

			navigate(`/group/${selectedGroupId}/post/${docRef.id}`);
		}
	};

	return (
		<div>
			<Container>
				<Header>Create a Post</Header>
				<div></div>

				<Select setSelect={setSelectedGroupId} list={groups} />
				<Form onSubmit={handleSubmit}>
					<div>
						<Label>Title</Label>
						<Input
							type='text'
							name='title'
							value={title}
							onChange={handleChange}
							autocomplete='off'
						/>
					</div>
					<div>
						<Label>Content</Label>
						<TextArea
							type='text'
							name='content'
							value={content}
							onChange={handleChange}
							autocomplete='off'
						/>
					</div>
					<div>
						<AddPhoto
							handlePhotoChange={handlePhotoChange}
							photo={photo}
						/>
					</div>

					<div>
						{!selectedGroupId ? (
							<Button disabled type='submit'>
								Create Post
							</Button>
						) : (
							<Button type='submit'>Create Post</Button>
						)}
					</div>
				</Form>
			</Container>
		</div>
	);
};

export default CreatePost;
