"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BlogCard from "../card/BlogCard";

function BlogClient({ posts }) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		if (!posts || posts.length === 0) {
			toast.error("No posts found! Something went wrong.");
		}
	}, [posts]);

	return (
		isClient && (
			<div className='container mx-auto m-10'>
				<div className='flex flex-wrap gap-8 justify-center items-center'>
					{posts.map((post) => (
						<BlogCard className='flex-1 min-w-1/2' key={post._id} post={post} />
					))}
				</div>
			</div>
		)
	);
}

export default BlogClient;
