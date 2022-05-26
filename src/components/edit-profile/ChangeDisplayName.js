import React, { useState } from "react";

const ChangeDisplayName = ({
	handleChange,
	displayName,
	handleSaveChanges,
}) => {
	const [show, setShow] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSaveChanges(e.target[0]);
		setShow(false);
	};

	return (
		<div>
			<h5>Display Name</h5>
			<p>Set a new display name.</p>
			{!show ? (
				<>
					<button onClick={() => setShow(true)}>
						Edit Display Name
					</button>
				</>
			) : (
				<form onSubmit={handleSubmit}>
					<div>
						<input
							type='text'
							name='displayName'
							onChange={handleChange}
							value={displayName}
							placeholder='Display Name'
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

export default ChangeDisplayName;
