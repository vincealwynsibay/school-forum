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
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const EditProfile = () => {
	const [formData, setFormData] = useState({
		displayName: "",
		bio: "",
		avatar: null,
	});
	const navigate = useNavigate();

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

		toast.success("Profile updated successfully");
	};

	const handleSaveAvatarChanges = async (file) => {
		const storageRef = ref(storage, `profiles/${document.id}/${file.name}`);
		await uploadFile(storageRef, file);
		const url = await getDownloadURL(
			ref(storage, `profiles/${document.id}/${file.name}`)
		);

		await updateDoc(firestoreRef, {
			photoURL: url,
		});
		toast.success("Profile updated successfully");
	};

	return (
		<div>
			<div className='md:flex md:flex-col md:gap-6 mt-10 px-2 sm:px-6 lg:px-8'>
				<div className='md:col-span-1'>
					<div className='px-4 sm:px-0'>
						<h3 className='text-xl  font-bold leading-6 text-gray-900'>
							Change Profile
						</h3>
						<p className='mt-1 text-sm text-gray-600'>
							This information will be displayed publicly so be
							careful what you share.
						</p>
					</div>
				</div>
				<div className='mt-5 md:mt-0 md:col-span-2'>
					<div className='shadow sm:rounded-md sm:overflow-hidden'>
						<div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
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
								handleSaveAvatarChanges={
									handleSaveAvatarChanges
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProfile;
