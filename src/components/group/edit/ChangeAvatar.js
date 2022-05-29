import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import useUploadFile from "../../../hooks/useUploadFile";
import { db, storage } from "../../../utils/firebase";

const ChangeAvatar = ({ group }) => {
	const [avatar, setAvatar] = useState(group.photoURL);
	const [avatarError, setAvatarError] = useState(null);
	const [show, setShow] = useState(false);
	const uploadFile = useUploadFile();

	const handleSaveAvatarChanges = async (file) => {
		const firestoreRef = doc(db, "groups", group.id);
		const storageRef = ref(storage, `profiles/${group.id}/${file.name}`);
		await uploadFile(storageRef, file);
		const url = await getDownloadURL(
			ref(storage, `profiles/${document.uid}/${file.name}`)
		);

		console.log(url);
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
			<h5>Avatar</h5>

			{!show ? (
				<>
					<button onClick={() => setShow(true)}>Edit Avatar</button>
				</>
			) : (
				<form onSubmit={handleSubmit}>
					<div>
						<input
							type='file'
							name='avatar'
							onChange={handleFileChange}
						/>
						{avatarError && (
							<div className='text-danger'>{avatarError}</div>
						)}
					</div>
					<div>
						<input type='submit' value='Save Changes' />
						<input
							type='button'
							value='Cancel'
							onClick={() => setShow(false)}
						/>
					</div>
				</form>
			)}
		</div>
	);
};

export default ChangeAvatar;
