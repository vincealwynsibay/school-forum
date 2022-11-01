import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import { LockClosedIcon } from "@heroicons/react/solid";
import toast from "react-hot-toast";

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
		<>
			<div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-md w-full space-y-8'>
					<div>
						{/* <img
							className=''
							src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
							alt='Workflow'
						/>
						<span className='absolute left-0 inset-y-0 flex items-center pl-3'> */}
						<LockClosedIcon
							className='mx-auto h-12 w-auto text-indigo-500 '
							aria-hidden='true'
						/>
						{/* </span> */}
						<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
							Sign in to your account
						</h2>
					</div>
					<form className='mt-8 space-y-6' onSubmit={onSubmit}>
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
									onChange={onChange}
									required
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Email address'
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
									onChange={onChange}
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
						Don't have an account?{" "}
						<Link
							to='/register'
							className='text-indigo-600 hover:text-indigo-700'
						>
							Sign Up
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
