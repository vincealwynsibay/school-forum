import React, { useEffect, useState } from "react";
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
		<nav>
			<div>
				<Link to='/'>School Forum</Link>
				<Link to='profiles'>Profiles</Link>
				<Link to='groups'>Groups</Link>
			</div>

			{!user && (
				<>
					<Link to='login' className='px-3'>
						Login
					</Link>
					<Link to='register'>Register</Link>
				</>
			)}

			{user && document && (
				<>
					<p className='mx-3'>
						Signed in as:{" "}
						<Link to={`/profile/${user.uid}`}>
							{/* <img src={document.photoURL} /> */}
							{document.displayName}
						</Link>
					</p>
					<a href='#' onClick={logout}>
						Logout
					</a>
				</>
			)}
		</nav>
	);
};

export default NavigationBar;
