import React from "react";
import { Link } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

const PostItem = ({ post }) => {
	const { document: user } = useDocument("users", post.author);
	const { document: group } = useDocument("groups", post.group);
	if (!post || !user || !group) {
		return null;
	}
	console.log(group);
	return (
		<div>
			<div className='max-w-full px-10 my-4 py-6 bg-white rounded-lg shadow-md'>
				<div className='mt-2'>
					<Link
						className='text-2xl text-gray-700 font-bold hover:text-gray-600'
						to={`/group/${post.group}/post/${post.id}`}
					>
						{post.title}
					</Link>

					<p className='mt-2 text-gray-600 mb-7'>{`${post.content.substring(
						0,
						100
					)}`}</p>
				</div>
				<div>
					{post.photoURL && (
						<img
							className='max-w-sm max-h-sm'
							src={post.photoURL}
						/>
					)}
				</div>
				<div className='flex justify-between items-center '>
					<div className=' flex items-center justify-between max-w-xs mt-6'>
						<Link
							className='text-md text-gray-700 font-medium hover:text-gray-600  flex items-center'
							to={`/group/${post.group}`}
						>
							<img
								className='mr-4 w-8 h-8 object-cover rounded-full hidden sm:block'
								src={group && group.photoURL}
								alt='avatar'
							/>
							<h1 className='text-gray-700 font-bold'>
								{group && group.name}
							</h1>
						</Link>
						<p className='mx-1'> posted by </p>
						<Link
							className='flex items-center'
							to={`/profile/${user.id}`}
						>
							<h1 className='text-gray-700 font-bold'>
								{user && user.displayName}
							</h1>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
