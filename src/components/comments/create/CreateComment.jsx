import React, { useState } from "react";

const CreateComment = ({ handleNewComment }) => {
	const [value, setValue] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		handleNewComment(value);
		setValue("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<textarea
				name='comment'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				rows='6'
				className='shadow-sm mb-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
			></textarea>
			<input
				type='submit'
				value='Comment'
				className='mr-3 w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer'
			/>
		</form>
	);
};

export default CreateComment;
