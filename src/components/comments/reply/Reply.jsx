import {
	addDoc,
	arrayUnion,
	collection,
	doc,
	updateDoc,
} from "firebase/firestore";
import React from "react";
import { useDocument } from "../../../hooks/useDocument";
import { auth, db } from "../../../utils/firebase";
import CreateReply from "./CreateReply";
import Replies from "./Replies";

const Reply = ({ reply, idx }) => {
	const { document: replyUser } = useDocument("users", reply.user);

	const handleReplyToReply = async (content) => {
		const replyRef = doc(db, "comments", reply.id);
		const initialReply = {
			content,
			user: auth.currentUser.uid,
			upvotes: [],
			downvotes: [],
		};

		const newReply = await addDoc(collection(db, "replies"), {
			...initialReply,
		});

		await updateDoc(replyRef, {
			replies: arrayUnion(newReply.id),
		});
	};

	return (
		<div>
			<div style={{ width: "18rem" }} className={`mx-${idx * 3}`}>
				<div>
					<h2>{replyUser && replyUser.displayName}</h2>
					<p>{reply.content}</p>

					{/* <Card.Subtitle >
						<CreateReply saveNewReply={handleReplyToReply} />
					</Card.Subtitle> */}
					{/* <div>
						{reply.replies && <Replies replies={reply.replies} />}
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Reply;
