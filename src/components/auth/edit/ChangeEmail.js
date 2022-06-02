import { updateEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../utils/firebase";

const ChangeEmail = ({ handleChange, email }) => {
	const [show, setShow] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(auth.currentUser);
		await updateEmail(auth.currentUser, e.target[0].value);
		console.log("Email successfully updated");
		email = "";
	};

	return (
		<div>
			<div className='flex justify-between items-center'>
				<div className='flex items-center'>
					<h5 className='pr-5 font-bold text-lg'>Email: </h5>
				</div>
				{!show && (
					<>
						<button
							className='cursor-pointer'
							onClick={() => setShow(true)}
						>
							Edit Email
						</button>
					</>
				)}
			</div>
			{show && (
				<>
					<form onSubmit={handleSubmit}>
						<div className=''>
							<input
								type='email'
								name='email'
								value={email}
								onChange={handleChange}
								className='mt-1 mb-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
								placeholder='New Email'
							/>
						</div>
						<div className=''>
							<div>
								<input
									className='mr-3 w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer'
									type='submit'
									value='Save Changes'
								/>
								<input
									type='button'
									value='Cancel'
									className='cursor-pointer mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
									onClick={() => setShow(false)}
								/>
							</div>
						</div>
					</form>
				</>
			)}
		</div>
	);
};

export default ChangeEmail;
