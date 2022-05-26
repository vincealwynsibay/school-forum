import { updateEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../utils/firebase";

const ChangeEmail = ({ handleChange, email }) => {
	const [show, setShow] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		await updateEmail(auth.currentUser, e.target[0].value);
		console.log("Email successfully updated");
		email = "";
	};

	return (
		<div>
			<h5>Email</h5>
			{!show ? (
				<>
					<button onClick={() => setShow(true)}>Edit Email</button>
				</>
			) : (
				<>
					<form onSubmit={handleSubmit}>
						<div className=''>
							<input
								type='email'
								name='email'
								value={email}
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

export default ChangeEmail;
