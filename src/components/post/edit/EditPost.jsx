import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useDocument } from "../../../hooks/useDocument";
import { db } from "../../../utils/firebase";
import AddPhoto from "../AddPhoto";
import styled from "styled-components";
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
		<Wrapper className=''>
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
							className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
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
						<Button type='submit' className=''>
							Edit Post
						</Button>
					</div>
				</Form>
			</Container>
		</Wrapper>
	);
};

export default EditPost;
