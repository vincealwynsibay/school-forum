import React, { useState } from "react";
import { auth } from "../../utils/firebase";
import { updatePassword } from "firebase/auth";

const ChangePassword = ({ handleChange, password }) => {
	const [show, setShow] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();

		await updatePassword(auth.currentUser, e.target[0].value);
		console.log("Password successfully updated");
		e.target[0].value = "";
	};

	return (
		<div>
			<h5>Password</h5>
			{!show ? (
				<>
					<button onClick={() => setShow(true)}>Edit Password</button>
				</>
			) : (
				<>
					<form onSubmit={handleSubmit}>
						<div className=''>
							<input
								type='password'
								name='password'
								value={password}
								onChange={handleChange}
							/>
						</div>
						<div className=''>
							<div>
								<input type='submit' value='Save Changes' />
								<input
									type='button'
									value='Cancel'
									onClick={() => setShow(false)}
								/>
							</div>
						</div>
					</form>
				</>
			)}
		</div>
	);
};

export default ChangePassword;
