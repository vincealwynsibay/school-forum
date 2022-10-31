import React, { useState } from "react";

const CreateReply = ({ saveNewReply }) => {
	const [show, setShow] = useState(false);
	const [comment, setComment] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		saveNewReply(comment);
		setComment("");
		setShow(false);
	};

	return (
		<div>
			{!show ? (
				<input
					type='button'
					onClick={() => setShow(true)}
					value='reply'
				/>
			) : (
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<input type='submit' value='Reply' />
					<input
						type='button'
						onClick={() => setShow(false)}
						value='cancel'
					/>
				</form>
			)}
		</div>
	);
};

export default CreateReply;
