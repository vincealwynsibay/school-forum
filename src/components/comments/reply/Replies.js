import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../utils/firebase";
import Reply from "./Reply";
const Replies = ({ replies: repliesIdArr, saveNewReply }) => {
	const [replies, setReplies] = useState([]);

	useEffect(() => {
		const fillReplies = async () => {
			for (let i = 0; i < replies.length; i++) {
				const replyRef = doc(db, "replies", repliesIdArr[i]);
				const reply = await getDoc(replyRef);
				if (reply) {
					setReplies([...replies, reply.data()]);
				}
			}
		};

		fillReplies();
	}, []);

	return (
		<div>
			{replies.map((reply, idx) => {
				return <Reply reply={reply} key={idx} idx={idx} />;
			})}
		</div>
	);
};

export default Replies;
