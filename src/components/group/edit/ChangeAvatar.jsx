import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useUploadFile from "../../../hooks/useUploadFile";
import { db, storage } from "../../../utils/firebase";
import { FiUpload } from "react-icons/fi";
import styled from "styled-components";

const File = styled.label`
	border: 1px solid #1c3d52;
	display: inline-block;
	padding: 0.7rem 1.5rem;
	cursor: pointer;
	background-color: #1c3d52;
	color: white;

	> div {
		display: flex;
		align-items: center;
		gap: 1rem;
		> svg {
			transform: scale(1.3);
		}
	}

	> input {
		display: none;
	}
`;

const ChangeAvatar = ({ group }) => {
	const [avatar, setAvatar] = useState(group.photoURL);
	const [avatarError, setAvatarError] = useState(null);
	const { uploadFile, uploading } = useUploadFile();

	const handleSaveAvatarChanges = async (file) => {
		const firestoreRef = doc(db, "groups", group.id);
		const storageRef = ref(storage, `groups/${group.id}${file.name}`);

		await uploadFile(storageRef, file);

		getDownloadURL(storageRef).then(async (url) => {
			await updateDoc(firestoreRef, {
				photoURL: url,
			});
		});

		toast.success("Group Photo updated successfully");
	};

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
		handleSaveAvatarChanges(selected);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSaveAvatarChanges(avatar);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<File className='mb-2'>
					<div>
						<FiUpload />
						Change Avatar
					</div>
					<input
						type='file'
						name='avatar'
						onChange={handleFileChange}
					/>
					{uploading && <p>Uploading...</p>}
				</File>
			</form>
		</div>
	);
};

export default ChangeAvatar;
