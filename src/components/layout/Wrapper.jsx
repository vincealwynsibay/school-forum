import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: 1rem 2rem;
	margin: 1rem auto;

	& a {
		:hover {
			color: #1c3d52;
		}
	}

	@media (min-width: 768px) {
		padding: 0 10rem;
	}
`;

function Wrapper({ children }) {
	return <Container>{children}</Container>;
}

export default Wrapper;
