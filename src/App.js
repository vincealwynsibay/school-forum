import React from "react";
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
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import PrivateRoute from "./components/routing/PrivateRoute";
import EditProfile from "./components/profile/edit/EditProfile";
import EditAccount from "./components/auth/edit/EditAccount";
import Groups from "./components/groups/Groups";
import Group from "./components/group/Group";
import CreateGroup from "./components/group/create/CreateGroup";
import Followers from "./components/profile/followers/Followers";
import Following from "./components/profile/following/Following";
import Members from "./components/group/members/Members";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import CreatePost from "./components/post/create/CreatePost";
import EditPost from "./components/post/edit/EditPost";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
	const { isAuthReady, user } = useAuthContext();
	return (
		<>
			{isAuthReady && (
				<Router>
					<NavigationBar />
					<div>
						<Routes>
							<Route exact path='/' element={<Posts />} />
							Auth
							<Route
								path='login'
								element={user ? <Navigate to='/' /> : <Login />}
							/>
							<Route
								path='register'
								element={
									user ? <Navigate to='/' /> : <Signup />
								}
							/>
							{/*  Profiles */}
							<Route path='/profiles' element={<Profiles />} />
							<Route path='/profile/:id' element={<Profile />} />
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
							<Route path='/posts' element={<Posts />} />
							<Route path='/group/:id' element={<Group />} />
							{/* Group Members */}
							<Route
								path='/group/:id/members'
								element={<Members />}
							/>
							{/* Group Posts */}
							<Route
								path='/group/:id/posts'
								element={<Posts />}
							/>
							<Route
								path='/group/:group_id/post/:post_id'
								element={<Post />}
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
								path='/group/create'
								element={<CreateGroup />}
							/>
							{/* Post */}
							<Route
								path='/group/:group_id/post/create'
								element={<CreatePost />}
							/>
							{/* Post */}
							<Route
								path='/group/:group_id/post/:post_id/edit'
								element={<EditPost />}
							/>
						</Routes>
					</div>
					<Toaster />
				</Router>
			)}
		</>
	);
};

export default App;
