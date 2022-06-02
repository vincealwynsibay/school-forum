import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer, useState } from "react";
import { auth } from "../utils/firebase";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
	switch (action.type) {
		case "READY_AUTH":
			return { ...state, isAuthReady: true, user: action.payload };
		case "LOGIN":
			return { ...state, user: action.payload };
		case "LOGOUT":
			return { ...state, user: null };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		isAuthReady: false,
		user: null,
		loading: false,
	});

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			dispatch({ type: "READY_AUTH", payload: user });
		});
		unsub();
	}, []);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
