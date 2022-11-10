import React, { useState } from "react";
import useUploadFile from "../../../hooks/useUploadFile";

import { MdOutlineAccountCircle } from "react-icons/md";
import styled from "styled-components";
import { auth, db, storage } from "../../../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { getDownloadURL, ref } from "firebase/storage";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	> h3 {
		font-size: 1.1rem;
	}
`;

const File = styled.label`
	border: 1px solid ${(props) => props.theme.accent};
	border-radius: 20px;
	display: inline-block;
	padding: 0.7rem 1.5rem;
	cursor: pointer;
	background-color: ${(props) => props.theme.accent};
	color: white;

	> div {
		display: flex;
		align-items: center;
		gap: 1rem;
		> svg {
			transform: scale(1.3);
		}
	}

	:hover {
		background-color: ${(props) => props.theme.accentHover};
	}

	> input {
		display: none;
	}
`;

const ChangeAvatar = ({ user_id }) => {
	const [avatar, setAvatar] = useState(null);
	const [avatarError, setAvatarError] = useState(null);
	const { uploadFile, uploading } = useUploadFile();

	const handleSaveAvatarChanges = async (file) => {
		console.log("handleSaveAvatarChanges");
		const firestoreRef = doc(db, "users", user_id);
		const storageRef = ref(storage, `profiles/${user_id}/${file.name}`);
		await uploadFile(storageRef, file);
		getDownloadURL(storageRef).then(async (url) => {
			await updateDoc(firestoreRef, {
				photoURL: url,
			});
		});

		toast.success("Profile updated successfully");
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

	return (
		<Container>
			<h3>Avatar</h3>
			<form>
				<File>
					<div>
						<MdOutlineAccountCircle />
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
		</Container>
	);
};

export default ChangeAvatar;
