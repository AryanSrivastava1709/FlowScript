"use client";

import Link from "next/link";
import Image from "next/image";

function SingleBlogPage() {
	const blog = {
		image:
			"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
		title: "Hello",
		author: "Author Name",
		date: "2023-10-01",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatem sapiente dolorem eligendi delectus nulla odit voluptatum sint quae itaque? Maiores adipisci sapiente earum asperiores inventore vero saepe aperiam, accusantium fugit dolor quae quis reiciendis repudiandae rerum repellat quo hic magnam odio omnis voluptates voluptas quas pariatur! Eaque reprehenderit explicabo dignissimos? Alias, exercitationem vel voluptas error ab quam magni, non eius facere assumenda debitis perspiciatis saepe architecto tempore voluptate cumque recusandae qui, molestias eos cupiditate numquam obcaecati repellendus inventore. Nihil magni, quaerat dignissimos sapiente ipsam suscipit! Eius provident dolores, enim corrupti expedita a! Officiis impedit quos ducimus quam exercitationem praesentium explicabo repellendus cupiditate voluptatibus, architecto nihil facilis magni voluptatum assumenda dolor quaerat fugit aspernatur. Molestias voluptatum autem, hic veritatis, sit ab error modi deleniti odit inventore nostrum? Aperiam atque, inventore vitae a, maxime error ad, officia illo necessitatibus temporibus quas.",
		tags: ["tag1", "tag2", "tag3"],
	};

	const formattedDate = new Date(blog.date).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});

	return (
		<div className='p-4 md:p-8 lg:p-12'>
			<div className='max-w-4xl mx-auto p-6 bg-gradient-to-br bg-mainBgColor shadow-lg rounded-xl border border-gray-300 over'>
				<Link
					href='/blog'
					className='inline-block bg-blue-500 text-white py-2 px-6 rounded-full mb-6 shadow-md hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105'
				>
					⬅️Back to Blog
				</Link>
				<div className='relative w-full h-80 mb-6 rounded-lg overflow-hidden'>
					<Image
						src={blog.image}
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
					By {blog.author} on {formattedDate}
				</p>
				<div className='text-lg leading-relaxed mb-6 text-gray-100'>
					{blog.content}
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
	);
}

export default SingleBlogPage;
