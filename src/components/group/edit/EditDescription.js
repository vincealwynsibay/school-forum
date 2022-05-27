import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../utils/firebase";

const EditDescription = ({ id, descriptionValue }) => {
	const [show, setShow] = useState(false);
	const [description, setDescription] = useState(descriptionValue);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const ref = doc(db, "groups", id);
		setShow(false);
		await updateDoc(ref, { description });
	};

	return (
		<div>
			{!show ? (
				<div>
					{" "}
					<button onClick={() => setShow(true)}>
						Edit Description
					</button>
				</div>
			) : (
				<div>
					<form onSubmit={handleSubmit}>
						<div>
							<input
								type='text'
								name='description'
								placeholder='description'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
						<div>
							<input type='submit' value='Save Changes' />
							<input
								type='button'
								value='Cancel'
								onClick={() => setShow(false)}
							/>
						</div>
					</form>
				</div>
			)}
		</div>
	);
};

export default EditDescription;
