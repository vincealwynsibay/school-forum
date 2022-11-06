import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useDocument } from "../../hooks/useDocument";
import { auth } from "../../utils/firebase";
import styled from "styled-components";
import toast from "react-hot-toast";
import { AiFillHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdOutlineGroups } from "react-icons/md";
import { IoCreateOutline, IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
const Navbar = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #1c3d52;
`;

const NavLinks = styled.div`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 0 1rem;
		height: 100vh;
		> a {
			display: flex;
			align-items: center;
			gap: 1rem;
			padding: 1rem 0;
			color: white;
		}
	}
`;

const NavIcons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 1rem 0;
	background-color: #1c3d52;

	> a {
		transform: scale(1.5);
		color: white;
	}

	@media (min-width: 481px) {
		position: static;
		width: 100%;
		flex-direction: column;
		align-items: center;
		padding: 0 1rem;
		height: 100vh;

		right: initial;
		top: 0;

		> a {
			padding: 2rem 0;
		}
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

const NavigationBar = () => {
	const { user } = useAuthContext();
	const { document } = useDocument("users", user ? user.uid : null);

	const { logout } = useLogout();

	return (
		<Navbar>
			<NavLinks>
				{user ? (
					<>
						<Link to='/'>School Forum</Link>
						<Link to='/'>
							<AiFillHome /> Home
						</Link>
						<Link to={`/profile/${user.uid}`}>
							<BsPerson /> Profile
						</Link>
						<Link to={`/settings/account`}>
							<IoSettingsOutline /> Settings
						</Link>
						<Link to='/groups'>
							<MdOutlineGroups /> Groups
						</Link>
						<Link to='/'>
							<IoCreateOutline /> Create Post
						</Link>
						<Link to='/' onClick={logout}>
							<BiLogOut />
							Logout
						</Link>
					</>
				) : (
					<>
						<Link to='/'>School Forum</Link>
						<Link to='/login'>Login</Link>
						<Link to='/register'>Register</Link>
					</>
				)}
			</NavLinks>

			<NavIcons>
				{user ? (
					<>
						<Link to='/'>
							<AiFillHome />
						</Link>
						<Link to={`/profile/${user.uid}`}>
							<BsPerson />
						</Link>
						<Link to='/groups'>
							<MdOutlineGroups />
						</Link>
						<Link to='/'>
							<IoCreateOutline />
						</Link>
					</>
				) : (
					<>
						<Link to='/'>School Forum</Link>
						<Link to='/login'>Login</Link>
						<Link to='/register'>Register</Link>
					</>
				)}
			</NavIcons>
		</Navbar>
	);
};

export default NavigationBar;
