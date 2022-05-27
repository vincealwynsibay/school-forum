import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useDocument } from "../../../hooks/useDocument";
import useUploadFile from "../../../hooks/useUploadFile";
import { auth, db, storage } from "../../../utils/firebase";
import ChangeAvatar from "./ChangeAvatar";
import ChangeBio from "./ChangeBio";
import ChangeDisplayName from "./ChangeDisplayName";

const EditProfile = () => {
	const [formData, setFormData] = useState({
		displayName: "",
		bio: "",
		avatar: "",
	});

	const { uid } = auth.currentUser;
	const { document, error, isPending } = useDocument("users", uid);
	const { uploadFile } = useUploadFile();

	useEffect(() => {
		if (!isPending) {
			setFormData({
				displayName: document.displayName,
				bio: document.bio,
				avatar: document.photoURL,
			});
		}
	}, [isPending]);

	const { displayName, bio, avatar } = formData;
	const firestoreRef = doc(db, "users", uid);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSaveChanges = async (ele) => {
		await updateDoc(firestoreRef, {
			[ele.name]: ele.value,
		});

		if (ele.name === "displayName") {
			await updateProfile(auth.currentUser, {
				displayName: ele.value,
			});
		}
	};

	const handleSaveAvatarChanges = async (file) => {
		const storageRef = ref(
			storage,
			`profiles/${document.uid}/${file.name}`
		);
		await uploadFile(storageRef, file);
		const url = await getDownloadURL(
			ref(storage, `profiles/${document.uid}/${file.name}`)
		);

		console.log(url);
		await updateDoc(firestoreRef, {
			photoURL: url,
		});
	};

	return (
		<div>
			<h1>Customize Profile</h1>
			<div>
				<ChangeDisplayName
					displayName={displayName}
					handleChange={handleChange}
					handleSaveChanges={handleSaveChanges}
				/>
				<ChangeBio
					bio={bio}
					handleChange={handleChange}
					handleSaveChanges={handleSaveChanges}
				/>
				<ChangeAvatar
					avatar={avatar}
					handleChange={handleChange}
					handleSaveAvatarChanges={handleSaveAvatarChanges}
				/>
			</div>
		</div>
	);
};

export default EditProfile;
