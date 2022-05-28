import {
	addDoc,
	arrayUnion,
	collection,
	doc,
	updateDoc,
} from "firebase/firestore";
import React from "react";
import { Card } from "react-bootstrap";
import { useDocument } from "../../../hooks/useDocument";
import { auth, db } from "../../../utils/firebase";
import CreateReply from "./CreateReply";
import Replies from "./Replies";
const Reply = ({ reply, idx }) => {
	const { document: replyUser } = useDocument("users", reply.user);
	console.log(idx, reply);

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
			<Card style={{ width: "18rem" }} className={`mx-${idx * 3}`}>
				<Card.Body>
					<Card.Title>
						{replyUser && replyUser.displayName}
					</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>
						{reply.content}
					</Card.Subtitle>

					{/* <Card.Subtitle className='mb-2'>
						<CreateReply saveNewReply={handleReplyToReply} />
					</Card.Subtitle> */}
					{/* <div>
						{reply.replies && <Replies replies={reply.replies} />}
					</div> */}
				</Card.Body>
			</Card>
		</div>
	);
};

export default Reply;
