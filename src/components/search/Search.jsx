import React from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr minmax(45px, 10%);
	@media screen and (min-width: 48rem) {
		margin: 0;
	}
`;

const Input = styled.input`
	border: 1px solid #1a202c;
	border-radius: 3px 0 0 3px;
	padding: 0.5rem 1rem;

	:focus {
		outline: none;
	}
`;

const Button = styled.button`
	cursor: pointer;
	border: 1px solid #1a202c;
	border-radius: 0 3px 3px 0;
	padding: 0.5rem 1rem;
	background: #1c3d52;
	transition: background-color 0.2s ease-in-out;
	:hover {
		// background-color: #1cb66e;
	}
`;

const SearchIcon = styled(BsSearch)`
	width: 1rem;
	color: white;
	transform: scale(1.5);
`;

function Search() {
	const [query, setQuery] = React.useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (query) {
			return navigate(`/search/?query=${query}`);
		} else {
			return navigate(`/`);
		}
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Input type='text' onChange={(e) => setQuery(e.target.value)} />
				<Button>
					<SearchIcon />
				</Button>
			</Form>
		</div>
	);
}

export default Search;
