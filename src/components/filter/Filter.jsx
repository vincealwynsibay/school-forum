import React, { useState } from "react";
import styled from "styled-components";
import { GrFilter } from "react-icons/gr";
const Container = styled.div`
	text-align: right;
	display: flex;
	justify-content: flex-end;
`;

const Select = styled.div`
	cursor: pointer;
	padding: 1rem 2rem;
	border: 1px solid #000;
	position: relative;
`;

const Options = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 50px;
	border-radius: 3px;
	background-color: #fff;

	> div {
		padding: 1rem 2rem;
		position: relative;
		transition: border-bottom 0.2 ease-in-out;

		:hover {
			:after {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 1;
				border-bottom: 2px solid #1c3d52;
			}
		}
	}
`;

function Filter({ list, setFilter }) {
	const [show, setShow] = useState(false);
	return (
		<Container>
			<Select onClick={() => setShow((prevVal) => !prevVal)}>
				<GrFilter />
				<Options>
					{show &&
						list &&
						list.map((item) => (
							<div onClick={() => setFilter(item)}>{item}</div>
						))}
				</Options>
			</Select>
		</Container>
	);
}

export default Filter;
