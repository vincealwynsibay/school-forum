import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../../../utils/firebase";

const EditDescription = ({ id, descriptionValue }) => {
	const [show, setShow] = useState(false);
	const [description, setDescription] = useState(descriptionValue);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const ref = doc(db, "groups", id);
		setShow(false);
		await updateDoc(ref, { description });
		toast.success("Group updated successfully");
	};

	return (
		<div>
			{!show ? (
				<div>
					{" "}
					<button
						onClick={() => setShow(true)}
						className='mr-3 w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer'
					>
						Edit Description
					</button>
				</div>
			) : (
				<div>
					<form onSubmit={handleSubmit}>
						<div>
							<input
								type='text'
								name='description'
								placeholder='description'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
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
				</div>
			)}
		</div>
	);
};

export default EditDescription;
