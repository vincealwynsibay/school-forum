import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
	return (
		<Router>
			<div>
				<Routes>
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
