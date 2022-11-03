import React from "react";
import styled from "styled-components";
import { GrFilter } from "react-icons/gr";
const Container = styled.div`
	text-align: right;
`;

function Filter({ list, setFilter }) {
	return (
		<Container>
			{/* <Select name='' id='' onChange={(e) => setFilter(e.target.value)}>
				<span>
					<GrFilter />
				</span>
				<Option disabled selected value=''>
					Filter
				</Option>
				{list &&
					list.map((item) => {
						return (
							<Option key={item} value={item}>
								{item}
							</Option>
						);
					})}
			</Select> */}
		</Container>
	);
}

export default Filter;
