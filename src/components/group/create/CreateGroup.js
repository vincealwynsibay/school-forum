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
		<div class='max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-full lg:px-40'>
			<h1 className='text-3xl font-medium mb-4'>Create Group</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type='text'
						name='name'
						value={name}
						onChange={handleChange}
						placeholder='Name'
						className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
					/>
				</div>
				<div>
					<textarea
						type='text'
						name='description'
						value={description}
						onChange={handleChange}
						placeholder='Description'
						className='shadow-sm mb-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
					></textarea>
				</div>

				<input
					type='submit'
					value='Create Group'
					className='mr-3 w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer'
				/>
			</form>
		</div>
	);
};

export default CreateGroup;
