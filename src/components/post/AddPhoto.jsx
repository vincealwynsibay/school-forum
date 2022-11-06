import { getDownloadURL, ref } from "firebase/storage";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useUploadFile from "../../hooks/useUploadFile";
import { db, storage } from "../../utils/firebase";
import { FiUpload } from "react-icons/fi";

import styled from "styled-components";

const File = styled.label`
	border: 1px solid #1c3d52;
	display: inline-block;
	padding: 0.7rem 1.5rem;
	cursor: pointer;

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

const AddPhoto = ({ handlePhotoChange, photo: post_photo }) => {
	const [photo, setPhoto] = useState(null);
	const { uploadFile, uploading } = useUploadFile();
	const { post_id } = useParams();

	const handleFileChange = async (e) => {
		handlePhotoChange(null);
		setPhoto(null);

		let selected = e.target.files[0];

		// Validates File
		if (!selected) {
			alert("Please select a file");
			return;
		}
		if (!selected.type.includes("image")) {
			alert("Selected file must be an image");
			return;
		}
		if (selected.size > 1000000) {
			alert("Image file size must be less than 1mb");
			return;
		}

		// Save Photo and get Url
		const storageRef = ref(storage, `posts/${selected.name}`);

		await uploadFile(storageRef, selected);
		// const url = await getDownloadURL(
		// 	ref(storage, `posts/${selected.name}`)
		// );

		getDownloadURL(storageRef).then((url) => {
			handlePhotoChange(url);
		});
		setPhoto(selected);
	};

	return (
		<div>
			<img src={post_photo && post_photo} />
			<File>
				<div>
					<FiUpload />
					Upload File
				</div>
				<input
					type='file'
					name='avatar'
					onChange={handleFileChange}
					className=''
				/>
			</File>
			{uploading && <p>Uploading</p>}
		</div>
	);
};

export default AddPhoto;
