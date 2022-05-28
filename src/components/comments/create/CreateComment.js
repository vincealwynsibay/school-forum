import React, { useState } from "react";

const CreateComment = ({ handleNewComment }) => {
	const [value, setValue] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		handleNewComment(value);
		setValue("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<textarea
				name='comment'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			></textarea>
			<input type='submit' value='Comment' />
		</form>
	);
};

export default CreateComment;
