import { deleteUser } from "firebase/auth";
import React from "react";
import { auth } from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const DeleteUserAccount = () => {
	const navigate = useNavigate();
	const deleteUserAcc = async () => {
		const res = prompt(
			"Are you sure you want to delete this account? (y/n)"
		);

		if (res.toLowerCase() === "n") {
			deleteUser(auth.currentUser);
			toast.success("User deleted successfully");
			navigate("/");
		}
	};

	return (
		<div>
			<h5 className='font-bold text-lg mb-3'>Delete Account</h5>
			<button
				className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500  sm:w-auto sm:text-sm'
				onClick={deleteUserAcc}
			>
				Delete Account
			</button>
		</div>
	);
};

export default DeleteUserAccount;
