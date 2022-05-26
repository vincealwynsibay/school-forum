import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";

const useUploadFile = () => {
	const [snapshot, setSnapshot] = useState(null);
	const [downloadUrl, setDownloadUrl] = useState(null);
	const [uploading, setUploading] = useState(false);
	const uploadFile = async (storageRef, file) => {
		return new Promise((resolve, reject) => {
			setUploading(true);
			const uploadTask = uploadBytesResumable(storageRef, file);
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					setSnapshot(snapshot);
				},
				(error) => {
					resolve(undefined);
				},
				() => {
					setUploading(false);
					setSnapshot(undefined);
					getDownloadURL(uploadTask.snapshot.ref).then(
						setDownloadUrl
					);
					resolve({
						ref: uploadTask.snapshot.ref,
					});
				}
			);
		});
	};

	return { uploadFile, snapshot, downloadUrl, uploading };
};

export default useUploadFile;
