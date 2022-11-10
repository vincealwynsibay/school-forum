import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import gravatar from "gravatar";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../../utils/firebase";
import toast from "react-hot-toast";
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
	font-size: 1rem;
	font-weight: 600;

	:hover {
		background-color: ${(props) => props.theme.accentHover};
	}

	:active {
		outline: 0;
	}
`;

const CreateGroup = () => {
	const [formData, setFormData] = useState({ name: "", description: "" });
	const { name, description } = formData;
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const checkIfGroupExists = async (name) => {
		const q = query(collection(db, "groups"), where("name", "==", name));
		const querySnapshot = await getDocs(q);
		let count = 0;
		querySnapshot.forEach((snapshot) => {
			count += 1;
		});

		if (count > 0) {
			toast.error("Group already exists");
		}

		return count > 0 ? true : false;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const imgUrl = gravatar.url(`${name}@group.com`, {
			size: "200",
			r: "pg",
			default: "retro",
		});
		if (await checkIfGroupExists(name)) {
			setFormData({ ...formData, name: "" });
			alert("Group name already used");
		} else {
			const docRef = await addDoc(collection(db, "groups"), {
				name,
				description,
				photoURL: `https:${imgUrl}`,
				members: [auth.currentUser.uid],
				admin: auth.currentUser.uid,
			});

			if (docRef) {
				toast.success("Group created successfully");
				navigate(`/group/${docRef.id}`);
			}
		}
	};

	return (
		<Container>
			<Header>Create Group</Header>
			<Form onSubmit={handleSubmit}>
				<div>
					<Label htmlFor='name'>Group Name</Label>
					<Input
						type='text'
						name='name'
						value={name}
						onChange={handleChange}
						placeholder='Name'
					/>
				</div>
				<div>
					<Label htmlFor='name'>Description</Label>
					<TextArea
						type='text'
						name='description'
						value={description}
						onChange={handleChange}
						placeholder='Description'
					></TextArea>
				</div>

				<Button type='submit'>Create Group</Button>
			</Form>
		</Container>
	);
};

export default CreateGroup;
