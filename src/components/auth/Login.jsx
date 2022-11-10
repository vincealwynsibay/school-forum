import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import toast from "react-hot-toast";
import styled from "styled-components";

const Container = styled.div`
	margin: 4rem 0;
	padding: 1.5rem;
	background-color: ${(props) => props.theme.primary};
	border-radius: 20px;

	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
`;

const Button = styled.button`
	cursor: pointer;
	border-radius: 20px;

	background-color: ${(props) => props.theme.accent};
	margin-top: 2rem;
	padding: 1rem 2rem;
	width: 100%;
	color: white;
	font-size: 1rem;
	font-weight: 600;

	:hover {
		background-color: ${(props) => props.theme.accentHover};
	}
`;

const Form = styled.form`
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	> div {
		display: flex;
		flex-direction: column;
	}
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

const SignUpLink = styled(Link)`
	color: ${(props) => props.theme.accent};
`;

const Login = () => {
	const { login, isPending, error } = useLogin();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<Container>
			<h2>Sign in to your account</h2>
			<Form onSubmit={onSubmit}>
				<div>
					<Label htmlFor='email-address'>Email address</Label>
					<Input
						id='email-address'
						name='email'
						type='email'
						autoComplete='email'
						onChange={onChange}
						required
						placeholder='Email address'
					/>
				</div>
				<div>
					<Label htmlFor='password'>Password</Label>
					<Input
						id='password'
						name='password'
						type='password'
						autoComplete='current-password'
						required
						placeholder='Password'
						onChange={onChange}
					/>
				</div>

				<div>
					{isPending ? (
						<Button type='submit' disabled>
							loading...
						</Button>
					) : (
						<Button type='submit'>Sign in</Button>
					)}
					{error && <p>{error}</p>}
				</div>
			</Form>
			<p>
				Don't have an account?{" "}
				<SignUpLink to='/register'>Sign Up</SignUpLink>
			</p>
		</Container>
	);
};

export default Login;
