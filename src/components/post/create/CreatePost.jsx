import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../../utils/firebase";
import AddPhoto from "../AddPhoto";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useCollection } from "../../../hooks/useCollection";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Wrapper from "../../layout/Wrapper";

const Container = styled.div`
	padding-top: 4rem;
`;

const Header = styled.h2`
	font-size: 1.8rem;
	font-weight: 700;
	margin-bottom: 2rem;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const Select = styled.select`
	margin-bottom: 1rem;
	border-radius: 3px;
	> option[value=""] {
		display: none;
	}
`;

const Option = styled.option``;

const Label = styled.label`
	display: block;
	text-transform: capitalize;
	margin-bottom: 0.5rem;
`;
const Input = styled.input`
	width: 100%;
	border: 1px solid #1c3d52;
	border-radius: 3px;
	:focus {
		border: 1px solid #1c3d52;
		outline: none;
	}
`;
const TextArea = styled.textarea`
	width: 100%;
	border: 1px solid #1c3d52;
	border-radius: 3px;
	:focus {
		border: 1px solid #1c3d52;
		outline: none;
	}
`;
const Button = styled.button`
	border-radius: 3px;
	background-color: #1c3d52;
	margin-top: 1rem;
	padding: 0.7rem 1.5rem;
	color: white;
	font-weight: 600;
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
		["members", "array-contains", user.uid],
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
		<Wrapper className=''>
			<Container>
				<Header>Create a Post</Header>
				<Select
					onChange={(e) => setSelectedGroupId(() => e.target.value)}
					value={selectedGroupId ? selectedGroupId : ""}
				>
					<Option value=''>Select a group</Option>
					{groups &&
						groups.map((group) => {
							return (
								<Option key={group.id} value={group.id}>
									{group.name}
								</Option>
							);
						})}
				</Select>
				<Form onSubmit={handleSubmit}>
					<div>
						<Label>Title</Label>
						<Input
							type='text'
							name='title'
							value={title}
							onChange={handleChange}
							className=''
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
							className=''
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
							<Button disabled type='submit' className=''>
								Create Post
							</Button>
						) : (
							<Button type='submit' className=''>
								Create Post
							</Button>
						)}
					</div>
				</Form>
			</Container>
		</Wrapper>
	);
};

export default CreatePost;
