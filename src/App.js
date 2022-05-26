import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import { useAuthContext } from "./hooks/useAuthContext";

// components
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import NavigationBar from "./components/layout/NavigationBar";
import LandingPage from "./components/layout/LandingPage";
import Container from "react-bootstrap/Container";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import PrivateRoute from "./components/routing/PrivateRoute";
import EditProfile from "./components/edit-profile/EditProfile";
import EditAccount from "./components/edit-account/EditAccount";

const App = () => {
	const { isAuthReady, user } = useAuthContext();

	return (
		<>
			{isAuthReady && (
				<Router>
					<Container>
						<NavigationBar />
						<div>
							<Routes>
								<Route
									exact
									path='/'
									element={<LandingPage />}
								/>
								<Route
									path='login'
									element={
										user ? <Navigate to='/' /> : <Login />
									}
								/>
								<Route
									path='register'
									element={
										user ? <Navigate to='/' /> : <Signup />
									}
								/>
								<Route
									path='/profiles'
									element={<Profiles />}
								/>
								<Route
									path='/profile/:id'
									element={<Profile />}
								/>
								// Private Routes // Profile
								<Route
									path={`/settings/profile`}
									element={
										<PrivateRoute Component={EditProfile} />
									}
								/>
								<Route
									path={`/settings/account`}
									element={
										<PrivateRoute Component={EditAccount} />
									}
								/>
							</Routes>
						</div>
					</Container>
				</Router>
			)}
		</>
	);
};

export default App;
