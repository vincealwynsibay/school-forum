import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/solid";
import toast from "react-hot-toast";

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
		<>
			<div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-md w-full space-y-8'>
					<div>
						<LockClosedIcon
							className='mx-auto h-12 w-auto text-indigo-500 '
							aria-hidden='true'
						/>
						{/* </span> */}
						<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
							Sign Up
						</h2>
					</div>
					<form className='mt-8 space-y-6' onSubmit={handleSubmit}>
						<input
							type='hidden'
							name='remember'
							defaultValue='true'
						/>
						<div className='rounded-md shadow-sm -space-y-px'>
							<div>
								<label
									htmlFor='email-address'
									className='sr-only'
								>
									Email address
								</label>
								<input
									id='email-address'
									name='email'
									type='email'
									autoComplete='email'
									onChange={handleChange}
									required
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Email address'
								/>
							</div>
							<div>
								<label
									htmlFor='display-name'
									className='sr-only'
								>
									Display Name
								</label>
								<input
									id='display-name'
									name='displayName'
									type='text'
									autoComplete='displayName'
									onChange={handleChange}
									required
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Display Name'
								/>
							</div>
							<div>
								<label htmlFor='password' className='sr-only'>
									Password
								</label>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Password'
									onChange={handleChange}
								/>
							</div>
						</div>

						<div>
							{isPending ? (
								<button
									type='submit'
									className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									disabled
								>
									loading...
								</button>
							) : (
								<button
									type='submit'
									className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
								>
									Sign in
								</button>
							)}
							{error && <p className='text-danger'>{error}</p>}
						</div>
					</form>
					<p>
						Already have an account?{" "}
						<Link
							to='/register'
							className='text-indigo-600 hover:text-indigo-700'
						>
							Sign In
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Signup;
