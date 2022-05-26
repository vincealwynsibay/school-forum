import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import Spinner from "../layout/Spinner";

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

	// const handleFileChange = (e) => {
	// 	setFormData({ ...formData, profile: null });
	// 	let selected = e.target.files[0];

	// 	console.log(selected);
	// 	if (!selected) {
	// 		setFormData({
	// 			...formData,
	// 			profileError: "Please select a file",
	// 		});
	// 		return;
	// 	}
	// 	if (!selected.type.includes("image")) {
	// 		setFormData({
	// 			...formData,
	// 			profileError: "Selected file must be an image",
	// 		});
	// 		return;
	// 	}
	// 	if (selected.size > 1000000) {
	// 		setFormData({
	// 			...formData,
	// 			profileError: "Image file size must be less than 100kb",
	// 		});
	// 		return;
	// 	}

	// 	setFormData({ ...formData, profileError: null });
	// 	setFormData({ ...formData, profile: selected });
	// };

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

				{/* <Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>User Profile: </Form.Label>
					<Form.Control
						name='file'
						type='file'
						onChange={handleFileChange}
					/>

					{profileError && (
						<div className='text-danger'>{profileError}</div>
					)}
				</Form.Group> */}

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
		</div>
	);
};

export default Signup;
