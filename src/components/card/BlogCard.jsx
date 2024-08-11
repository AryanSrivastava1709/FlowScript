import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard({ post }) {
	return (
		<div className='border border-gray-800 rounded-lg shadow-lg w-full sm:w-80 overflow-hidden bg-gray-900 transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:border-gray-400'>
			<div className='relative h-48 w-full'>
				<Image
					src='/hero.png'
					alt='blog'
					layout='fill'
					objectFit='cover'
					priority
					className='hover:scale-105 transition-transform duration-300'
				/>
			</div>
			<div className='p-4'>
				<h3 className='text-lg font-bold text-gray-100'>{post?.title}</h3>
				<p className='text-gray-400 text-sm mt-2'>
					{post?.desc?.slice(0, 100)}...
				</p>
				<div className='flex flex-wrap gap-2 mt-2'>
					{post?.tags.map((tag, index) => (
						<span
							key={index}
							className='bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded'
						>
							#{tag}
						</span>
					))}
				</div>
				<p className='text-gray-400 text-xs mt-2'>
					By {post?.username} •{" "}
					{new Date(post?.createdAt).toLocaleDateString("en-GB", {
						day: "2-digit",
						month: "2-digit",
						year: "numeric",
					})}
				</p>
				<Link
					href={`/blog/${post?.slug}`}
					className='inline-block mt-4 text-sm font-semibold text-gray-100 bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300'
				>
					Read More➡️
				</Link>
			</div>
		</div>
	);
}

export default BlogCard;
