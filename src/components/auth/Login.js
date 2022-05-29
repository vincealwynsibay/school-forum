import React, { useState } from "react";
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
			<form onSubmit={onSubmit}>
				<div>
					<label>Email address</label>
					<input
						type='email'
						name='email'
						placeholder='Enter email'
						onChange={onChange}
					/>
				</div>

				<div>
					<label>Password</label>
					<input
						name='password'
						type='password'
						placeholder='Password'
						onChange={onChange}
					/>
				</div>
				{isPending ? (
					<button type='submit' disabled>
						<Spinner />
					</button>
				) : (
					<button type='submit'>Login</button>
				)}
				{error && <p className='text-danger'>{error}</p>}
			</form>
			<p>
				Don't have an account? <Link to='/register'>Sign Up</Link>
			</p>
		</div>
	);
};

export default Login;
