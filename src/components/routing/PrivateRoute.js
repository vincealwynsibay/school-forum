import React from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import Spinner from "../layout/Spinner";

const PrivateRoute = ({ Component }) => {
	const { isAuthReady, user } = useAuthContext();

	if (!isAuthReady) {
		return <Spinner />;
	}

	if (user) {
		return <Component />;
	}

	return <Navigate to='/' />;
};

export default PrivateRoute;
