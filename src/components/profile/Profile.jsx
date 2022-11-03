import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import { auth, db } from "../../utils/firebase";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { useCollection } from "../../hooks/useCollection";
import PostsList from "../posts/PostsList";

const Profile = () => {
	const { id } = useParams();
	const { document, error, isPending } = useDocument("users", id);
	const { documents: posts, isPending2 } = useCollection("posts", [
		["author", "==", id],
	]);

	const profileRef = doc(db, "users", id);

	const followUser = async () => {
		const currentUserRef = doc(db, "users", auth.currentUser.uid);
		await updateDoc(profileRef, {
			followers: arrayUnion(auth.currentUser.uid),
		});
		await updateDoc(currentUserRef, {
			following: arrayUnion(id),
		});
	};
	const unfollowUser = async () => {
		const currentUserRef = doc(db, "users", auth.currentUser.uid);
		await updateDoc(profileRef, {
			followers: arrayRemove(auth.currentUser.uid),
		});
		await updateDoc(currentUserRef, {
			following: arrayRemove(id),
		});
	};

	if (isPending || !posts) {
		return <Spinner />;
	}

	return (
		<div>
			<div className='mx-24 mt-14 md:grid md:grid-cols-3 md:gap-8'>
				<div className='md:col-span-2'>
					<div className='px-4 sm:px-0'>
						<div className='max-w-2xl pt-5 mx-auto pb-10 sm:pb-16 sm:px-6 lg:max-w-full'>
							<h3 className='text-3xl font-bold leading-6 text-gray-900 mb-3'>
								{auth.currentUser.uid === document.id
									? `Your Posts`
									: `${document.name}'s Posts`}
							</h3>
							{error && <p>{error.message}</p>}
							<PostsList posts={posts} />
							{posts.length === 0 && <p>no posts</p>}
						</div>
					</div>
				</div>

				<div className='mt-5 md:mt-0 md:col-span-1'>
					<div className='mt-5 md:mt-0'>
						<div className='shadow sm:rounded-md sm:overflow-hidden'>
							<div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
								{document ? (
									<>
										<img
											src={document.photoURL}
											alt={`${document.displayName}'s Profile`}
											className='h-20 w-20 rounded-full '
										/>
										<div className='pt-4  items-center'>
											<div className='flex flex-row justify-between items-center'>
												<h3 className='text-xl  font-bold leading-6 text-gray-900 '>
													{document.displayName}
												</h3>
												{auth.currentUser &&
													auth.currentUser.uid ===
														id && (
														<Link
															to='/settings/profile'
															className='cursor-pointer flex items-center'
														>
															<svg
																className='-ml-1 mr-2 h-5 w-5 text-gray-500'
																x-description='Heroicon name: solid/pencil'
																xmlns='http://www.w3.org/2000/svg'
																viewBox='0 0 20 20'
																fill='currentColor'
																aria-hidden='true'
															>
																<path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z'></path>
															</svg>
															Edit Profile
														</Link>
													)}
												{auth.currentUser &&
													auth.currentUser.uid !==
														id && (
														<>
															{!document.followers.some(
																(follower) =>
																	follower ===
																	auth
																		.currentUser
																		.uid
															) ? (
																<button
																	onClick={
																		followUser
																	}
																	className='mr-3 w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer'
																>
																	Follow
																</button>
															) : (
																<button
																	onClick={
																		unfollowUser
																	}
																	className='mr-3 w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer'
																>
																	Unfollow
																</button>
															)}
														</>
													)}
											</div>
										</div>
										<p className='pt-4 text-base'>
											{document.bio === ""
												? "No Bio"
												: document.bio}
										</p>
										<div className='pt-4 md:grid md:grid-cols-3 md:gap-6 items-center'>
											<Link
												to={`/profile/${id}/followers`}
											>
												<p>
													<span className='font-bold'>
														Followers:
													</span>{" "}
													{document.followers.length}
												</p>
											</Link>
											<Link
												to={`/profile/${id}/following`}
											>
												<p>
													<span className='font-bold'>
														Following:
													</span>{" "}
													{document.following.length}
												</p>
											</Link>
										</div>
										{auth.currentUser && (
											<div className='pt-4'>
												<p>
													<span className='font-bold'>
														Status:{" "}
													</span>
													{document.online
														? "Online"
														: "Offline"}
												</p>
											</div>
										)}
									</>
								) : (
									<p>document does not exist</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
