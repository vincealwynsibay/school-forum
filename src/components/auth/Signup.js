import React, { useState } from "react";
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
			<form onSubmit={handleSubmit}>
				<div >
					<label>Email address</label>
					<input
						type='email'
						name='email'
						placeholder='Enter email'
						onChange={handleChange}
						required
					/>
				</div>

				<div className='mb-3' controlId='formBasicEmail'>
					<label className=''>Username</label>
					<input
						type='text'
						name='displayName'
						placeholder='Enter Username'
						onChange={handleChange}
						required
					/>
				</div>

				<div className='mb-3' controlId='formBasicPassword'>
					<label>Password</label>
					<input
						name='password'
						type='password'
						placeholder='Password'
						onChange={handleChange}
						required
					/>
				</div>

				{!isPending && (
					<button  type='submit'>
						Register
					</button>
				)}
				{isPending && (
					<button  disabled>
						<Spinner />
					</button>
				)}
				{error && <div className='error'>{error}</div>}
			</form>
			<p className='my-1'>
				Already have an account? <Link to='/login'>Sign In</Link>
			</p>
		</div>
	);
};

export default Signup;
