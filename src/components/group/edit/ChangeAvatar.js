import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import useUploadFile from "../../../hooks/useUploadFile";
import { db, storage } from "../../../utils/firebase";

const ChangeAvatar = ({ group }) => {
	const [avatar, setAvatar] = useState(group.photoURL);
	const [avatarError, setAvatarError] = useState(null);
	const [show, setShow] = useState(false);
	const { uploadFile, uploading } = useUploadFile();

	const handleSaveAvatarChanges = async (file) => {
		const firestoreRef = doc(db, "groups", group.id);
		const storageRef = ref(storage, `profiles/${group.id}/${file.name}`);
		await uploadFile(storageRef, file);

		const url = await getDownloadURL(
			ref(storage, `profiles/${document.id}/${file.name}`)
		);

		await updateDoc(firestoreRef, {
			photoURL: url,
		});
	};

	const handleFileChange = (e) => {
		setAvatar(null);
		let selected = e.target.files[0];

		console.log(selected);
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
			{!show ? (
				<>
					<button
						onClick={() => setShow(true)}
						className=' bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
					>
						Edit Avatar
					</button>
				</>
			) : (
				<form onSubmit={handleSubmit}>
					<div>
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
							{uploading && <p>Uploading...</p>}
						</div>
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

export default ChangeAvatar;
