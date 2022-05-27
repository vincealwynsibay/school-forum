import { deleteUser } from "firebase/auth";
import React from "react";
import { auth } from "../../../utils/firebase";
import { Navigate } from "react-router-dom";
const DeleteUserAccount = () => {
	const deleteUserAcc = async () => {
		deleteUser(auth.currentUser);
		return <Navigate to='/' />;
	};

	return (
		<div>
			<h5>Delete Account</h5>
			<button onClick={deleteUserAcc}>Delete Account</button>
		</div>
	);
};

export default DeleteUserAccount;
