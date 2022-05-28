import { getDownloadURL, ref } from "firebase/storage";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useUploadFile from "../../hooks/useUploadFile";
import { db, storage } from "../../utils/firebase";

const AddPhoto = ({ handlePhotoChange, photo: post_photo }) => {
	const [photo, setPhoto] = useState(null);
	const { uploadFile, uploading } = useUploadFile();
	const { post_id } = useParams();

	const handleFileChange = async (e) => {
		handlePhotoChange(null);
		setPhoto(null);

		let selected = e.target.files[0];

		// console.log(selected);
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
		const storageRef = ref(storage, `posts/${post_id}/${selected.name}`);

		await uploadFile(storageRef, selected);
		const url = await getDownloadURL(
			ref(storage, `posts/${post_id}/${selected.name}`)
		);
		setPhoto(selected);
		handlePhotoChange(url);
	};

	return (
		<div>
			<img src={post_photo && post_photo} />
			<input type='file' name='avatar' onChange={handleFileChange} />
			{uploading && <p>Uploading</p>}
		</div>
	);
};

export default AddPhoto;
