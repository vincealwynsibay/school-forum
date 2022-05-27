import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import gravatar from "gravatar";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../../utils/firebase";

const CreateGroup = () => {
	const [formData, setFormData] = useState({ name: "", description: "" });
	const { name, description } = formData;
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const checkIfGroupExists = async (name) => {
		const q = query(collection(db, "groups"), where("name", "==", name));
		const querySnapshot = await getDocs(q);
		let count = 0;
		querySnapshot.forEach((snapshot) => {
			count += 1;
			console.log(snapshot.data());
		});

		return count > 0 ? true : false;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const imgUrl = gravatar.url(`${name}@group.com`, {
			size: "200",
			r: "pg",
			default: "retro",
		});
		if (await checkIfGroupExists(name)) {
			setFormData({ ...formData, name: "" });
			alert("Group name already used");
		} else {
			const docRef = await addDoc(collection(db, "groups"), {
				name,
				description,
				photoURL: `https:${imgUrl}`,
				members: [auth.currentUser.uid],
				admin: auth.currentUser.uid,
			});

			if (docRef) {
				navigate(`/group/${docRef.id}`);
			}
		}
	};

	return (
		<div>
			<h1>Create Group</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type='text'
						name='name'
						value={name}
						onChange={handleChange}
						placeholder='Name'
					/>
				</div>
				<div>
					<input
						type='text'
						name='description'
						value={description}
						onChange={handleChange}
						placeholder='Description'
					/>
				</div>

				<input type='submit' value='Create Group' />
			</form>
		</div>
	);
};

export default CreateGroup;
