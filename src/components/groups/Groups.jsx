import React from "react";
import { useCollection } from "../../hooks/useCollection";
import GroupsList from "./GroupsList";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import styled from "styled-components";
import { useAuthContext } from "../../hooks/useAuthContext";

const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 2rem 0;

	> h2 {
		font-size: 2rem;
	}

	> a {
		border: 1px solid ${(props) => props.theme.accent};
		padding: 0.8rem 1.5rem;
		border-radius: 20px;
		color: ${(props) => props.theme.black};

		:hover {
			background: ${(props) => props.theme.accent};
			color: #fff;
		}
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
		<div>
			<Top>
				<h2>Groups</h2>
				{auth.currentUser && (
					<Link to='/group/create'>Create Group</Link>
				)}
			</Top>
			{error && <p>{error.message}</p>}
			<GroupsList groups={documents} />
		</div>
	);
};

export default Groups;
