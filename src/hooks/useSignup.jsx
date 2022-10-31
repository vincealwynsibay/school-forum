import { useState, useEffect } from "react";
import { db, auth } from "../utils/firebase";
import { useAuthContext } from "./useAuthContext";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import gravatar from "gravatar";

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const { dispatch } = useAuthContext();

	const signup = async (email, password, displayName) => {
		setError(null);
		setIsPending(true);

		try {
			const res = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			if (!res) {
				throw new Error("Could not complete signup");
			}

			const imgUrl = gravatar.url(email, {
				size: "200",
				r: "pg",
				default: "identicon",
			});

			// add display AND PHOTO_URL name to user
			await updateProfile(res.user, {
				displayName,
				photoURL: `https:${imgUrl}`,
			});

			await setDoc(doc(db, "users", res.user.uid), {
				displayName,
				photoURL: `https:${imgUrl}`,
				bio: "",
				online: true,
				followers: [],
				following: [],
			});

			// dispatch login action
			dispatch({ type: "LOGIN", payload: res.user });

			setIsPending(false);
			setError(null);
		} catch (err) {
			setError(err.message);
			setIsPending(false);
		}
	};

	return { signup, error, isPending };
};
