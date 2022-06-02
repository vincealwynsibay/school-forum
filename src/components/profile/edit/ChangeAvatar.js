import React, { useState } from "react";

const ChangeAvatar = ({ handleSaveAvatarChanges }) => {
	const [avatar, setAvatar] = useState(null);
	const [avatarError, setAvatarError] = useState(null);
	const [show, setShow] = useState(false);

	const handleFileChange = (e) => {
		setAvatar(null);
		let selected = e.target.files[0];

		if (!selected) {
			setAvatarError("Please select a file");
			return;
		}
		if (!selected.type.includes("image")) {
			setAvatarError("Selected file must be an image");
			return;
		}
		if (selected.size > 1000000) {
			setAvatarError("Image file size must be less than 100kb");
			return;
		}

		setAvatarError(null);
		setAvatar(selected);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSaveAvatarChanges(avatar);
	};

	return (
		<div>
			<h5 className='pr-5 font-bold text-lg mb-2'>Avatar</h5>
			<div>
				<div className='mt-1 flex items-center '>
					<span className='inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100 mb-2'>
						<svg
							className='h-full w-full text-gray-300'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
						</svg>
					</span>
					{!show && (
						<>
							<button
								type='button'
								onClick={() => setShow(true)}
								className='ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								Change
							</button>
						</>
					)}
				</div>
			</div>
			{show && (
				<form onSubmit={handleSubmit}>
					<div className='mb-2'>
						<input
							type='file'
							name='avatar'
							onChange={handleFileChange}
							className="file:mr-4 file:py-2 file:px-4
							file:rounded-full file:border-0
							file:text-sm file:font-semibold
							file:bg-violet-50 file:text-violet-700
							hover:file:bg-violet-100'
								  "
						/>
						{avatarError && (
							<div className='text-danger'>{avatarError}</div>
						)}
					</div>
					<div>
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
					</div>
				</form>
			)}
		</div>
	);
};

export default ChangeAvatar;
