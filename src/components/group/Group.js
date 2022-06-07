import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import { auth, db } from "../../utils/firebase";
import EditDescription from "./edit/EditDescription";
import Spinner from "../layout/Spinner";
import Posts from "../posts/Posts";
import ChangeAvatar from "./edit/ChangeAvatar";
import toast from "react-hot-toast";

const Group = () => {
	const { id } = useParams();
	const { document: group, error, isPending } = useDocument("groups", id);
	const groupRef = doc(db, "groups", id);

	if (isPending) {
		return <Spinner />;
	}

	const joinGroup = async () => {
		updateDoc(groupRef, {
			members: arrayUnion(auth.currentUser.uid),
		});
		toast.success(`You joined ${group.name}`);
	};
	const leaveGroup = async () => {
		updateDoc(groupRef, {
			members: arrayRemove(auth.currentUser.uid),
		});
		toast.success(`You left ${group.name}`);
	};

	return (
		<div class='max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-full lg:px-40'>
			{group ? (
				<>
					<div className='flex gap-8'>
						<img
							src={group.photoURL}
							className='w-60 h-60 border-solid border-2'
							alt={`${group.name} Group Photo`}
						/>
						<div className='w-full'>
							<div className='w-full'>
								<div className='flex w-full justify-between'>
									<h3 className='text-3xl  font-bold leading-normal text-gray-900 mb-4'>
										{group.name}
									</h3>
									<div>
										{auth.currentUser && (
											<>
												{!group.members.some(
													(member) =>
														member ===
														auth.currentUser.uid
												) ? (
													<button
														className='mr-3 w-full sm:w-auto py-2 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer'
														onClick={joinGroup}
													>
														Join
													</button>
												) : (
													<button
														className='mr-3 w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer'
														onClick={leaveGroup}
													>
														Leave
													</button>
												)}
											</>
										)}
									</div>
								</div>

								<div className=''>
									<p className='text-base'>
										{group.description}
									</p>
									{auth.currentUser &&
										group.members.some(
											(member) =>
												member === auth.currentUser.uid
										) &&
										auth.currentUser.uid ===
											group.admin && (
											<div>
												<EditDescription
													className='mb-4'
													id={group.id}
													descriptionValue={
														group.description
													}
												/>
												<ChangeAvatar group={group} />
											</div>
										)}
								</div>
								<Link to={`/group/${id}/members`}>
									<p className='mt-4'>
										<span className='font-bold '>
											Members:{" "}
										</span>{" "}
										{group.members.length}
									</p>
								</Link>
							</div>
						</div>
					</div>

					<div>
						<div>
							<div className='flex justify-between items-center mt-16'>
								<h2 className='text-3xl uppercase font-bold'>
									Posts
								</h2>
								{auth.currentUser &&
									group.members.some(
										(member) =>
											member === auth.currentUser.uid
									) && (
										<>
											<Link
												className='font-bold text-indigo-600 hover:text-indigo-500'
												to={`/group/${id}/post/create`}
											>
												Create Post
											</Link>
										</>
									)}
							</div>
							<Posts />
						</div>
					</div>
				</>
			) : (
				<p>document does not exist</p>
			)}
		</div>
	);
};

export default Group;
