import React, { useState } from "react";
import { auth } from "../../../utils/firebase";
import { updatePassword } from "firebase/auth";
import toast from "react-hot-toast";
import styled from "styled-components";

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
	margin-top: 1rem;

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
	margin-top: 1rem;
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

const ChangePassword = () => {
	const [show, setShow] = useState(false);
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await updatePassword(auth.currentUser, password);
		toast.success("Password updated successfully");
	};

	return (
		<Container>
			<div>
				<h3>Password </h3>
				{!show && (
					<button onClick={() => setShow(true)}>Edit Password</button>
				)}
			</div>
			{show && (
				<Form onSubmit={handleSubmit}>
					<input
						type='password'
						name='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder='New Password'
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

export default ChangePassword;
