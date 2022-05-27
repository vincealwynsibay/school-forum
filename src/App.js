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
import EditProfile from "./components/profile/edit/EditProfile";
import EditAccount from "./components/auth/edit/EditAccount";
import Groups from "./components/groups/Groups";
import Group from "./components/group/Group";
import CreateGroup from "./components/groups/create/CreateGroup";
import Followers from "./components/profile/followers/Followers";
import Following from "./components/profile/following/Following";
import Members from "./components/group/members/Members";

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
								{/* Auth */}
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
								{/*  Profiles */}
								<Route
									path='/profiles'
									element={<Profiles />}
								/>
								<Route
									path='/profile/:id'
									element={<Profile />}
								/>
								{/* Profiles Followers & Following */}
								<Route
									path='/profile/:id/followers'
									element={<Followers />}
								/>
								<Route
									path='/profile/:id/following'
									element={<Following />}
								/>
								{/* Groups */}
								<Route path='/groups' element={<Groups />} />
								<Route path='/group/:id' element={<Group />} />
								{/* Group Members */}
								<Route
									path='/group/:id/members'
									element={<Members />}
								/>
								{/* PRIVATE ROUTES */}

								{/* Profile */}
								<Route
									path={`/settings/profile`}
									element={
										<PrivateRoute Component={EditProfile} />
									}
								/>

								{/* Account */}
								<Route
									path={`/settings/account`}
									element={
										<PrivateRoute Component={EditAccount} />
									}
								/>

								{/* Group */}
								<Route
									path='/groups/create'
									element={<CreateGroup />}
								/>

								{/* Post */}
								<Route
									path='/groups/create'
									element={<CreateGroup />}
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
