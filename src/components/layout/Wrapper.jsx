import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: 0 2rem;
	margin: 1rem auto;

	@media (min-width: 768px) {
		padding: 0 10rem;
	}
`;

function Wrapper({ children }) {
	return <Container>{children}</Container>;
}

export default Wrapper;
