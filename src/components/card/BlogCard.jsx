import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard() {
	return (
		<div className='border border-gray-800 rounded-lg shadow-lg w-full sm:w-80 overflow-hidden bg-gray-900 transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:border-gray-400'>
			<div className='relative h-48 w-full'>
				<Image
					src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='blog'
					layout='fill'
					objectFit='cover'
					priority
					className='hover:scale-105 transition-transform duration-300'
				/>
			</div>
			<div className='p-4'>
				<h3 className='text-lg font-bold text-gray-100'>
					Efficient DOM Manipulation with the Virtual DOM and Refs
				</h3>
				<p className='text-gray-400 text-sm mt-2'>
					Explore the latest advancements in AI-powered web development and how
					they are transforming the industry. Discover the tools and techniques
					that are shaping the future of web design and development.
				</p>
				<div className='flex flex-wrap gap-2 mt-2'>
					<span className='bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded'>
						#webdev
					</span>
					<span className='bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded'>
						#javascript
					</span>
					<span className='bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded'>
						+3
					</span>
				</div>
				<p className='text-gray-400 text-xs mt-2'>
					By John Doe • August 9, 2024
				</p>
				<Link
					href='/blog/post'
					className='inline-block mt-4 text-sm font-semibold text-gray-100 bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300'
				>
					Read More➡️
				</Link>
			</div>
		</div>
	);
}

export default BlogCard;
