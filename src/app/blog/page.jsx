import BlogCard from "@/components/card/BlogCard";

function Blog() {
	return (
		<div className='container mx-auto m-10'>
			<div className='flex flex-wrap gap-8 justify-center items-center'>
				<BlogCard className='flex-1 min-w-1/2' />
				<BlogCard className='flex-1 min-w-1/2' />
				<BlogCard className='flex-1 min-w-1/2' />
				<BlogCard className='flex-1 min-w-1/2' />
			</div>
		</div>
	);
}

export default Blog;
