import { deleteUser } from "firebase/auth";
import React from "react";
import { auth } from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	h3 {
		font-size: 1.1rem;
	}

	> button {
		background-color: ${(props) => props.theme.accent};
		border-radius: 20px;
		padding: 0.8rem 1.5rem;
		color: white;
		display: flex;
		align-items: center;
		gap: 1rem;

		:hover {
			background-color: ${(props) => props.theme.accentHover};
		}

		> svg {
			transform: scale(1.5);
		}
	}
`;
const DeleteUserAccount = () => {
	const navigate = useNavigate();
	const deleteUserAcc = async () => {
		const res = prompt(
			"Are you sure you want to delete this account? (y/n)"
		);

		if (res.toLowerCase() === "y") {
			deleteUser(auth.currentUser);
			toast.success("User deleted successfully");
			navigate("/");
		}
	};

	return (
		<Container>
			<h3>Delete Account</h3>
			<button onClick={deleteUserAcc}>
				<BiTrash />
				Delete Account
			</button>
		</Container>
	);
};

export default DeleteUserAccount;
