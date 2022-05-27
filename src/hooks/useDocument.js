import { collection, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

export const useDocument = (c, id) => {
	const [document, setDocument] = useState(null);
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(true);

	// realtime document data
	useEffect(() => {
		if (id) {
			const unsubscribe = onSnapshot(
				doc(db, c, id),
				(snapshot) => {
					setIsPending(true);
					// need to make sure the doc exists & has data
					if (snapshot.data()) {
						setDocument({ ...snapshot.data(), id: snapshot.id });
						setError(null);
					} else {
						setError("No such document exists");
					}
					setIsPending(false);
				},
				(err) => {
					console.log(err.message);
					setError("failed to get document");
				}
			);
			// // unsubscribe on unmount
			return () => unsubscribe();
		}
	}, [c, id]);

	return { document, error, isPending };
};
