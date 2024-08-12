"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";

function SingleBlogPageClient({ blog }) {
	const [isClient, setIsClient] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setIsClient(true);
		if (!blog || blog.length === 0) {
			toast.error("No blog found! Something went wrong.");
		}
		setLoading(false);
	}, [blog]);

	if (loading) {
		return <div>Loading...</div>;
	}

	const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});

	return (
		isClient && (
			<div className='p-4 md:p-8 lg:p-12'>
				<div className='max-w-4xl mx-auto p-6 bg-gradient-to-br bg-mainBgColor shadow-lg rounded-xl border border-gray-300 over'>
					<Link
						href='/blog'
						className='inline-block bg-blue-500 text-white py-2 px-6 rounded-full mb-6 shadow-md hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105'
					>
						⬅️Back to Blogs
					</Link>
					<div className='relative w-full h-80 mb-6 rounded-lg overflow-hidden'>
						<Image
							src={blog.img}
							alt='blog image'
							layout='fill'
							objectFit='cover'
							priority
							className='rounded-lg shadow-lg border border-gray-200'
						/>
					</div>
					<h1 className='text-4xl md:text-5xl font-extrabold mb-4 text-white'>
						{blog.title}
					</h1>
					<p className='text-gray-300 mb-6'>
						By {blog.username} on {formattedDate}
					</p>
					<div className='text-lg leading-relaxed mb-6 text-gray-100'>
						{blog.desc}
					</div>
					<div className='flex flex-wrap gap-2'>
						{blog.tags.map((tag) => (
							<span
								key={tag}
								className='inline-block bg-gray-800 text-white py-1 px-4 rounded-full shadow-md hover:bg-gray-700 transition duration-300'
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		)
	);
}

export default SingleBlogPageClient;
