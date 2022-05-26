import { useCollection } from "../../hooks/useCollection";
import ProfileItem from "../profiles/ProfileItem";

export default function OnlineUsers() {
	const { isPending, error, documents } = useCollection("users");

	return (
		<div className='user-list'>
			<h2>All Online Users</h2>
			{isPending && <div>Loading users...</div>}
			{error && <div>{error}</div>}
			{documents &&
				documents.map((user) =>
					user.online ? <ProfileItem profile={user} /> : null
				)}
		</div>
	);
}
