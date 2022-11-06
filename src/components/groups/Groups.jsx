import React from "react";
import { useCollection } from "../../hooks/useCollection";
import GroupsList from "./GroupsList";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import Wrapper from "../layout/Wrapper";
import styled from "styled-components";
import { useAuthContext } from "../../hooks/useAuthContext";

const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 2rem;

	> h2 {
		font-size: 2rem;
	}

	> a {
		background-color: #1c3d52;
		padding: 0.8rem 1.5rem;
		color: #fff;
	}
`;

const Groups = () => {
	const { user } = useAuthContext();
	console.log(user.uid);
	const { documents, error } = useCollection("groups", [
		"members",
		"array-contains",
		user.uid,
	]);

	return (
		<Wrapper className=''>
			<Top className=''>
				<h2 className=''>Groups</h2>
				{auth.currentUser && (
					<Link to='/group/create'>Create Group</Link>
				)}
			</Top>
			{error && <p>{error.message}</p>}
			<GroupsList groups={documents} />
		</Wrapper>
	);
};

export default Groups;
