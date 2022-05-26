import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

const Signup = () => {
	const [formData, setFormData] = useState({
		email: "",
		displayName: "",
		password: "",
		// profile: null,
		// profileError: null,
	});

	const { email, displayName, password } = formData;

	const { signup, error, isPending } = useSignup();
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(email, password, displayName);
	};

	return (
		<div>
			<h1>Register</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						name='email'
						placeholder='Enter email'
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label className=''>Username</Form.Label>
					<Form.Control
						type='text'
						name='displayName'
						placeholder='Enter Username'
						onChange={handleChange}
						required
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						name='password'
						type='password'
						placeholder='Password'
						onChange={handleChange}
						required
					/>
				</Form.Group>

				{!isPending && (
					<Button variant='primary' type='submit'>
						Register
					</Button>
				)}
				{isPending && (
					<Button variant='primary' disabled>
						<Spinner />
					</Button>
				)}
				{error && <div className='error'>{error}</div>}
			</Form>
			<p className='my-1'>
				Already have an account? <Link to='/login'>Sign In</Link>
			</p>
		</div>
	);
};

export default Signup;
