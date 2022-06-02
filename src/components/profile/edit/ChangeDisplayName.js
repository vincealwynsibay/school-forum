import React, { useState } from "react";
import { auth } from "../../../utils/firebase";

const ChangeDisplayName = ({
	handleChange,
	displayName,
	handleSaveChanges,
}) => {
	const [show, setShow] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSaveChanges(e.target[0]);
		setShow(false);
	};

	return (
		<div>
			<div className='flex justify-between items-center'>
				<div className='flex items-center'>
					<h5 className='pr-5 font-bold text-lg'>Display Name</h5>
				</div>
				{!show && (
					<>
						<button
							className='cursor-pointer'
							onClick={() => setShow(true)}
						>
							Edit Display Name
						</button>
					</>
				)}
			</div>

			{show && (
				<form onSubmit={handleSubmit}>
					<div>
						<input
							type='text'
							name='displayName'
							onChange={handleChange}
							value={displayName}
							placeholder='Display Name'
							className='mt-1 mb-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
						/>
					</div>
					<div>
						<input
							type='submit'
							value='Save Changes'
							className='mr-3 w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer'
						/>
						<input
							type='button'
							value='Cancel'
							className='cursor-pointer mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
							onClick={() => setShow(false)}
						/>
					</div>
				</form>
			)}
		</div>
	);
};

export default ChangeDisplayName;
