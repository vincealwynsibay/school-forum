import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";

const useUploadFile = () => {
	const [snapshot, setSnapshot] = useState(null);
	const [error, setError] = useState(null);
	const [uploading, setUploading] = useState(false);

	const uploadFile = async (storageRef, file) => {
		return new Promise((resolve, reject) => {
			setUploading(true);
			setError(undefined);
			const uploadTask = uploadBytesResumable(storageRef, file);
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					setSnapshot(snapshot);
				},
				(error) => {
					setUploading(false);
					setError(error);
					resolve(undefined);
				},
				() => {
					setUploading(false);
					setSnapshot(undefined);
					resolve({
						ref: uploadTask.snapshot.ref,
					});
				}
			);
		});
	};

	return { uploadFile, snapshot, uploading, error };
};

export default useUploadFile;
