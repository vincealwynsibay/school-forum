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
import NavigationBar from "./components/navbar/NavigationBar";
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

import styled from "styled-components";

import "./App.css";
import Home from "./components/Home/Home";
import SearchResults from "./components/search/SearchResults";
import Search from "./components/search/Search";
import Filter from "./components/filter/Filter";
const Container = styled.div`
	display: flex;
	flex-direction: column-reverse;

	@media (min-width: 481px) {
		flex-direction: row;

		> :nth-child(1) {
			flex: 1 1 15%;
		}
		> :nth-child(2) {
			flex: 1 1 85%;
		}
	}

	@media (min-width: 768px) {
		flex-direction: row;

		> :nth-child(1) {
			flex: 1 1 20%;
		}
		> :nth-child(2) {
			flex: 1 1 80%;
		}
	}
`;

const SearchAndFilterContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	width: 100%;
	gap: 1rem;

	padding: 0 2.5rem;
	margin: 1rem 0;

	> :nth-child(1) {
	}
	> :nth-child(2) {
	}
`;

const App = () => {
	const { isAuthReady, user } = useAuthContext();

	return (
		<Container>
			{isAuthReady && (
				<Router>
					{/* Sidebar */}
					<NavigationBar />
					{/* Main Content */}
					<div>
						{/* Search And Filter */}
						<SearchAndFilterContainer>
							<Search />
							<Filter list={["New", "Top"]} />
						</SearchAndFilterContainer>

						{/* Content */}
						<Routes>
							<Route exact path='/' element={<Home />} />
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
							{/* Search */}
							<Route path='/search' element={<SearchResults />} />
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
		</Container>
	);
};

export default App;
