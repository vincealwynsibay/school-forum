import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { auth, db } from "../utils/firebase";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		setError(null);
		setIsPending(true);

		try {
			// login
			const res = await signInWithEmailAndPassword(auth, email, password);

			if (!res) {
				throw new Error("could not complete log in");
			}

			// update online status
			const documentRef = doc(db, "users", res.user.uid);
			await updateDoc(documentRef, { online: true });

			// dispatch login action
			dispatch({ type: "LOGIN", payload: res.user });

			setIsPending(false);
			setError(null);
		} catch (err) {
			setError(err.message);
			setIsPending(false);
		}
	};

	return { login, isPending, error };
};
