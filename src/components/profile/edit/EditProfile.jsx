import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useDocument } from "../../../hooks/useDocument";
import { auth, db, storage } from "../../../utils/firebase";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";
import ChangeAvatar from "./ChangeAvatar";
import ChangeBio from "./ChangeBio";
import ChangeDisplayName from "./ChangeDisplayName";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Container = styled.div`
	margin: 2rem;
`;

const Back = styled(Link)`
	display: flex;
	gap: 1rem;
	align-items: center;
	margin: 1rem 0;
	font-size: 1.1rem;
	svg {
		transform: scale(1.5);
	}
`;

const ProfileForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 2rem 0;
	padding: 1.5rem;
	background-color: ${(props) => props.theme.primary};
	border-radius: 20px;

	h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
`;

const EditProfile = () => {
	const [formData, setFormData] = useState({
		displayName: "",
		bio: "",
		avatar: null,
	});
	const navigate = useNavigate();

	const { uid } = auth.currentUser;
	const { document, error, isPending } = useDocument("users", uid);

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

	return (
		<Container>
			<Back to={`/profile/${auth && auth.currentUser.uid}`}>
				<BsArrowLeft />
				Go Back to Profile
			</Back>
			<ProfileForm>
				<div>
					<h3>Change Profile</h3>
					<p>
						This information will be displayed publicly so be
						careful what you share.
					</p>
				</div>
				<ChangeDisplayName user_id={uid} />
				<ChangeBio user_id={uid} />
				<ChangeAvatar user_id={uid} />
			</ProfileForm>
		</Container>
	);
};

export default EditProfile;
