import React from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr;
	position: relative;
	align-items: center;
	width: 12rem;

	@media (min-width: 481px) {
		width: 18rem;
	}

	@media screen and (min-width: 48rem) {
		width: 26rem;
		margin: 0;
	}
`;

const Input = styled.input`
	border: ${(props) => props.theme.primary}} ;
	border-radius: 20px;
	background-color: ${(props) => props.theme.primary}} 
	padding: 0.8rem 1rem;
	padding-left: calc(1rem + 2rem);
	grid-column: 1/1;

	&:focus {
		outline: none;
		border: 1px solid ${(props) => props.theme.accent}};
	}
`;

const SearchIcon = styled(BsSearch)`
	position: absolute;
	left: 15px;
	grid-column: 1/1;
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
		<Form onSubmit={handleSubmit}>
			<Input
				type='text'
				placeholder='Search'
				onChange={(e) => setQuery(e.target.value)}
			/>
			<SearchIcon />
		</Form>
	);
}

export default Search;
