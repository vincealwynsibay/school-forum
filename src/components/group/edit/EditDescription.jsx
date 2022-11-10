import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../../../utils/firebase";
import styled from "styled-components";

const Button = styled.button`
	padding: 0.8rem 1.5rem;
	border: 1px solid ${(props) => props.theme.accent};
	border-radius: 20px;
	color: ${(props) => props.theme.black};
	background: none;

	:hover {
		background-color: ${(props) => props.theme.accent};
		color: white;
	}
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
		font-size: 1.5rem;
		text-align: left;
		margin-bottom: 2rem;
	}

	> {
		margin: 0;
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

	> textarea {
		padding: 1rem 1.5rem;
		width: 20rem;
		border: 1px solid ${(props) => props.theme.black};
		border-radius: 20px;

		:active {
			border: 1px solid ${(props) => props.theme.black};
		}
	}

	> div {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;

		> button {
			border-radius: 3px;
			border: 1px solid ${(props) => props.theme.accent};
			margin-top: 2rem;
			padding: 0.8rem;
			color: ${(props) => props.theme.black};
			font-weight: 600;
			font-size: 0.8rem;
		}
	}
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
							<textarea
								type='text'
								name='description'
								placeholder='description'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
							<div>
								<Button type='submit'>Save Changes</Button>
								<Button
									type='button'
									onClick={() => setShow(false)}
								>
									Cancel
								</Button>
							</div>
						</Form>
					</Container>
				</>
			)}
		</div>
	);
};

export default EditDescription;
