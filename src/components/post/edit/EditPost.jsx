import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import { db } from "../../../utils/firebase";
import AddPhoto from "../AddPhoto";
import styled from "styled-components";

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
	font-weight: 600;

	:hover {
		background-color: ${(props) => props.theme.accentHover};
	}

	:active {
		outline: 0;
	}
`;

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
		<Container>
			<Header>Edit Post</Header>

			<Form onSubmit={handleSubmit}>
				<div>
					<Label htmlFor=''>Title</Label>
					<Input
						type='text'
						name='title'
						value={title}
						onChange={handleChange}
						placeholder='Title'
					/>
				</div>
				<div>
					<Label htmlFor=''>Content</Label>
					<TextArea
						type='text'
						name='content'
						value={content}
						onChange={handleChange}
					/>
				</div>

				<div>
					<Button type='submit'>Edit Post</Button>
				</div>
			</Form>
		</Container>
	);
};

export default EditPost;
