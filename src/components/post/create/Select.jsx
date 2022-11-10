import React, { useState } from "react";
import styled from "styled-components";
import { GrFilter } from "react-icons/gr";

const Container = styled.div`
	text-align: right;
	display: flex;
`;

const SelectContainer = styled.div`
	cursor: pointer;
	padding: 1rem 2rem;
	border: 1px solid #000;
	position: relative;
	border: 1px solid ${(props) => props.theme.black};
	border-radius: 20px;

	:hover {
		border: 1px solid ${(props) => props.theme.accent};
	}
`;

const Options = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 60px;
	background-color: ${(props) => props.theme.primary};
	border-radius: 20px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	text-align: center;

	> div {
		padding: 1rem 2rem;
		position: relative;
		transition: border-bottom 0.2 ease-in-out;

		:hover {
			background-color: ${(props) => props.theme.accent};
		}
	}
`;

function Select({ list, setSelect }) {
	const [show, setShow] = useState(false);
	return (
		<Container>
			<SelectContainer onClick={() => setShow((prevVal) => !prevVal)}>
				<div>Select Group</div>
				<Options>
					{show &&
						list.map((item) => {
							return (
								<div
									key={item.id}
									value={item.id}
									onClick={() => setSelect(item.id)}
								>
									{item.name}
								</div>
							);
						})}
				</Options>
			</SelectContainer>
		</Container>
	);
}

export default Select;
