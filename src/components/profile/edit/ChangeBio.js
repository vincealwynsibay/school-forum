import React, { useState } from "react";

const ChangeBio = ({ handleChange, bio, handleSaveChanges }) => {
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
					<h5 className='pr-5 font-bold text-lg'>Bio</h5>
				</div>
				{!show && (
					<>
						<button
							className='cursor-pointer'
							onClick={() => setShow(true)}
						>
							Edit Bio
						</button>
					</>
				)}
			</div>
			{show && (
				<form onSubmit={handleSubmit}>
					<div>
						<textarea
							type='text'
							name='bio'
							onChange={handleChange}
							value={bio}
							className='shadow-sm mb-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
							col='3'
						></textarea>
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

export default ChangeBio;
