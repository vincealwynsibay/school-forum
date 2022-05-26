import {
	collection,
	onSnapshot,
	orderBy,
	query,
	where,
} from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { db } from "../utils/firebase";

export const useCollection = (c, _q, _o) => {
	const [documents, setDocuments] = useState(null);
	const [error, setError] = useState(null);

	// if we don't use a ref --> infinite loop in useEffect
	// _q is an array and is "different" on every function call
	const q = useRef(_q).current;
	const o = useRef(_o).current;

	useEffect(() => {
		let ref = collection(db, c);

		if (q) {
			ref = query(ref, where(...q));
		}
		if (o) {
			ref = query(ref, orderBy(...o));
		}

		const unsubscribe = onSnapshot(
			ref,
			(snapshot) => {
				let results = [];
				snapshot.docs.forEach((doc) => {
					results.push({ ...doc.data(), id: doc.id });
				});

				// update state
				setDocuments(results);
				setError(null);
			},
			(error) => {
				console.log(error);
				setError("could not fetch the data");
			}
		);

		// unsubscribe on unmount
		return () => unsubscribe();
	}, [collection, query, orderBy]);

	return { documents, error };
};
