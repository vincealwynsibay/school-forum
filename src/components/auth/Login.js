import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";

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

	const onSubmit = (e) => {
		e.preventDefault();
		login(email, password);

		if (!error) {
			setFormData({
				email: "",
				password: "",
			});
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<Form onSubmit={onSubmit}>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						name='email'
						placeholder='Enter email'
						onChange={onChange}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						name='password'
						type='password'
						placeholder='Password'
						onChange={onChange}
					/>
				</Form.Group>
				{isPending ? (
					<Button variant='primary' type='submit' disabled>
						<Spinner />
					</Button>
				) : (
					<Button variant='primary' type='submit'>
						Login
					</Button>
				)}
				{error && <p className='text-danger'>{error}</p>}
			</Form>
			<p>
				Don't have an account? <Link to='/register'>Sign Up</Link>
			</p>
		</div>
	);
};

export default Login;
