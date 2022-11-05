import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	> textarea {
		:focus {
			outline: none;
		}
	}

	> button {
		padding: 1rem 2rem;
		background-color: #1c3d52;
		color: white;
		font-weight: 700;
	}
`;

const CreateComment = ({ handleNewComment }) => {
	const [value, setValue] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		handleNewComment(value);
		setValue("");
	};
	return (
		<Form onSubmit={handleSubmit}>
			<textarea
				name='comment'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				rows='6'
			></textarea>
			<button type='submit'>Comment</button>
		</Form>
	);
};

export default CreateComment;
