import React, { useState } from "react";

const ChangeAvatar = ({ handleSaveAvatarChanges }) => {
	const [avatar, setAvatar] = useState(null);
	const [avatarError, setAvatarError] = useState(null);
	const [show, setShow] = useState(false);

	const handleFileChange = (e) => {
		setAvatar(null);
		let selected = e.target.files[0];

		console.log(selected);
		if (!selected) {
			setAvatarError("Please select a file");
			return;
		}
		if (!selected.type.includes("image")) {
			setAvatarError("Selected file must be an image");
			return;
		}
		if (selected.size > 1000000) {
			setAvatarError("Image file size must be less than 100kb");
			return;
		}

		setAvatarError(null);
		setAvatar(selected);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSaveAvatarChanges(avatar);
	};

	return (
		<div>
			<h5>Avatar</h5>

			{!show ? (
				<>
					<button onClick={() => setShow(true)}>Edit Avatar</button>
				</>
			) : (
				<form onSubmit={handleSubmit}>
					<div>
						<input
							type='file'
							name='avatar'
							onChange={handleFileChange}
						/>
						{avatarError && (
							<div className='text-danger'>{avatarError}</div>
						)}
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

export default ChangeAvatar;
