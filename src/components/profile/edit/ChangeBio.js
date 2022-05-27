import React, { useState } from "react";

const ChangeBio = ({ handleChange, bio, handleSaveChanges }) => {
	const [show, setShow] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSaveChanges(e.target[0]);
		setShow(false);
	};

	return (
		<div>
			<h5>Bio</h5>
			<p>A very brief description of yourself on your profile.</p>
			{!show ? (
				<>
					<button onClick={() => setShow(true)}>Edit Bio</button>
				</>
			) : (
				<form onSubmit={handleSubmit}>
					<div>
						<input
							type='text'
							name='bio'
							onChange={handleChange}
							value={bio}
							placeholder='Bio'
						/>
					</div>
					<div>
						<input type='submit' value='Save Changes' />
						<input
							type='button'
							value='Cancel'
							onClick={() => setShow(false)}
						/>
					</div>
				</form>
			)}
		</div>
	);
};

export default ChangeBio;
