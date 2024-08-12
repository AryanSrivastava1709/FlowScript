"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";

function ProfilePageClient({ user, isCurrentUser, posts }) {
	const [isClient, setIsClient] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setIsClient(true);
		if (!user || user.length === 0) {
			toast.error("No user found! Something went wrong.");
		}
		if (!posts || posts.length === 0) {
			toast.error("No posts found! Something went wrong.");
		}
		setLoading(false);
	}, [user, posts]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		isClient && (
			<div className='text-gray-200 min-h-screen p-6'>
				<div className='max-w-6xl mx-auto p-6'>
					<div className='flex flex-col lg:flex-row gap-8'>
						{/* Left column: Profile */}
						<div className='lg:w-1/3'>
							<div className='bg-gray-800 rounded-xl p-8 shadow-lg shadow-blue-500/20'>
								<div className='flex flex-col items-center'>
									<Image
										src={user.img || "/default-avatar.png"}
										alt={`${user.username}'s avatar`}
										width={140}
										height={140}
										className='rounded-full mb-6 border-4 border-gray-700'
									/>
									<h2 className='text-3xl font-bold mb-2'>{user.username}</h2>
									<p className='text-gray-400 mb-1'>@{user.username}</p>
									<p className='text-gray-400 mb-4'>{user.email}</p>
									<p className='text-gray-500 mb-6 text-sm'>
										Joined {new Date(user.createdAt).toLocaleDateString()}
									</p>
									{isCurrentUser && (
										<div className='space-y-3 w-full'>
											<button className='bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out w-full font-medium'>
												Edit Profile
											</button>
											<button className='bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out w-full font-medium'>
												Logout
											</button>
										</div>
									)}
								</div>
							</div>
						</div>

						{/* Right column: Blog posts */}
						<div className='lg:w-2/3'>
							<h3 className='text-2xl font-bold mb-6'>
								Posts by {user.username}
							</h3>
							<div className='space-y-10 h-[36rem] overflow-y-scroll bg-gray-900 p-6 rounded-lg shadow-lg shadow-blue-500/20'>
								{posts.map((post) => (
									<div key={post.slug} className='bg-gray-800 rounded-xl p-6'>
										<h4 className='text-xl font-semibold mb-3'>{post.title}</h4>
										<p className='text-gray-400 mb-4'>{post.desc}</p>
										<div className='flex flex-wrap gap-2 mb-4'>
											{post.tags.map((tag) => (
												<span
													key={tag}
													className='bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300'
												>
													{tag}
												</span>
											))}
										</div>
										<Link href={`/blog/${post.slug}`} passHref>
											<button className='bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out font-medium'>
												Read More
											</button>
										</Link>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	);
}

export default ProfilePageClient;
