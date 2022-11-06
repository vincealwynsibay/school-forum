import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../../../utils/firebase";
import styled from "styled-components";

const Button = styled.button`
	padding: 0.8rem 1.5rem;
	background-color: #1c3d52;
	color: white;
`;

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	padding: 2rem 4rem;
	z-index: 3;

	> h1 {
		font-size: 2rem;
		text-align: left;
		margin-bottom: 2rem;
	}
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 2;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 1rem;

	> input {
		padding: 1rem 1.5rem;
		width: 15rem;
	}

	> div {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;

		> button {
			border-radius: 3px;
			background-color: #1c3d52;
			margin-top: 1rem;
			padding: 0.8rem;
			color: white;
			font-weight: 600;
			font-size: 0.8rem;
		}
		> input {
			border-radius: 3px;
			background-color: #1c3d52;
			margin-top: 1rem;
			padding: 0.8rem;
			color: white;
			font-weight: 600;
			font-size: 0.8rem;
		}
	}
`;

const InputButton = styled.input`
	padding: 0.8rem 1.5rem;
	background-color: #1c3d52;
	color: white;
	cursor: pointer;
`;

const EditDescription = ({ id, descriptionValue }) => {
	const [show, setShow] = useState(false);
	const [description, setDescription] = useState(descriptionValue);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const ref = doc(db, "groups", id);
		setShow(false);
		await updateDoc(ref, { description });
		toast.success("Group updated successfully");
	};

	return (
		<div>
			<Button onClick={() => setShow(true)}>Edit Description</Button>
			{show && (
				<>
					<Overlay onClick={() => setShow(false)} />
					<Container>
						<h1>Edit Description</h1>
						<Form onSubmit={handleSubmit}>
							<input
								type='text'
								name='description'
								placeholder='description'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
							<div>
								<Button type='submit'>Save Changes</Button>
								<InputButton
									type='button'
									value='Cancel'
									onClick={() => setShow(false)}
								/>
							</div>
						</Form>
					</Container>
				</>
			)}
		</div>
	);
};

export default EditDescription;
