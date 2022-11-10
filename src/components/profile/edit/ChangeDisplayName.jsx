import React, { useState } from "react";
import { auth, db } from "../../../utils/firebase";
import styled from "styled-components";
import { doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

const Container = styled.div`
	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h3 {
			font-size: 1.1rem;
		}

		> button {
			background: none;
			padding: 0.8rem 1.5rem;
			border: 1px solid ${(props) => props.theme.accent};
			border-radius: 20px;
			:hover {
				background: ${(props) => props.theme.accent};
				color: #fff;
			}
		}
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 2rem;

	> input {
		width: 100%;
		border: 1px solid ${(props) => props.theme.black};
		padding: 0.8rem 1.5rem;
		border-radius: 20px;

		:focus {
			border: 1px solid ${(props) => props.theme.accent};
		}
	}

	> div {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
	}
`;

const Button = styled.button`
	cursor: pointer;
	background: none;
	border: 1px solid ${(props) => props.theme.accent};
	border-radius: 3px;
	margin-top: 2rem;
	padding: 0.8rem;
	color: ${(props) => props.theme.black};
	font-weight: 600;
	font-size: 0.8rem;
	:active {
		outline: 0;
	}
	:hover {
		background: ${(props) => props.theme.accent};
		color: #fff;
	}
`;

const ChangeDisplayName = ({ user_id }) => {
	const [name, setName] = useState("");
	const [show, setShow] = useState(false);

	const handleSubmit = async (e) => {
		console.log("nice");
		e.preventDefault();
		const firestoreRef = doc(db, "users", user_id);
		await updateDoc(firestoreRef, {
			displayName: name,
		});

		setShow(false);
		toast.success("Profile updated successfully");
	};

	return (
		<Container>
			<div>
				<h3>Display Name</h3>
				{!show && (
					<>
						<button onClick={() => setShow(true)}>
							Edit Display Name
						</button>
					</>
				)}
			</div>

			{show && (
				<Form onSubmit={handleSubmit}>
					<input
						type='text'
						onChange={(e) => setName(() => e.target.value)}
						value={name}
						placeholder='Display Name'
					/>
					<div>
						<Button type='submit'>Save Changes</Button>
						<Button type='button' onClick={() => setShow(false)}>
							Cancel
						</Button>
					</div>
				</Form>
			)}
		</Container>
	);
};

export default ChangeDisplayName;
