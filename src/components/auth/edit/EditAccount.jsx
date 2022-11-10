import React, { useState } from "react";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import DeleteUserAccount from "./DeleteUserAccount";
import styled from "styled-components";

const Container = styled.div`
	margin: 4rem 0;
	padding: 1.5rem;
	background-color: ${(props) => props.theme.primary};
	border-radius: 20px;
`;

const AccountForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	h3 {
		font-weight: 600;
	}
`;

const EditAccount = () => {
	return (
		<Container>
			<AccountForm>
				<div>
					<h2>Change Account</h2>
					<p>
						Account Settings. Make sure to not forget your email
						address and password.
					</p>
				</div>
				<ChangeEmail />
				<ChangePassword />
				<DeleteUserAccount />
			</AccountForm>
		</Container>
	);
};

export default EditAccount;
