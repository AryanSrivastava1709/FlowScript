import BlogClient from "@/components/BlogComponents/BlogClient";
import { getPosts } from "@/lib/controllers/postController";

export const metadata = {
	title: "Blog",
	description:
		"Read the latest posts from our blog and get inspired to achieve your goals.",
};

async function Blog() {
	let posts = [];
	try {
		posts = await getPosts();
	} catch (error) {
		console.error(error);
		posts = [];
	}
	return <BlogClient posts={posts} />;
}

export default Blog;
