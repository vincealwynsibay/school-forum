import React, { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useDocument } from "../../hooks/useDocument";
import { auth } from "../../utils/firebase";

const NavigationBar = () => {
	const { user } = useAuthContext();
	const { document } = useDocument("users", user ? user.uid : null);

	const { logout } = useLogout();

	return (
		<Navbar>
			<Navbar.Brand as={Link} to='/'>
				School Forum
			</Navbar.Brand>
			<Navbar.Text as={Link} to='/profiles' className='px-3'>
				Profiles
			</Navbar.Text>

			<Navbar.Toggle />
			<Navbar.Collapse className='justify-content-end'>
				{!user && (
					<>
						<Navbar.Text as={Link} to='login' className='px-3'>
							Login
						</Navbar.Text>
						<Navbar.Text as={Link} to='register'>
							Register
						</Navbar.Text>
					</>
				)}
				{user && document && (
					<>
						<Navbar.Text className='mx-3'>
							Signed in as:{" "}
							<Link to={`/profile/${user.uid}`}>
								<img src={document.photoURL} />
								{document.displayName}
							</Link>
						</Navbar.Text>
						<a href='#' onClick={logout}>
							Logout
						</a>
					</>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavigationBar;
