import BlogClient from "@/components/BlogComponents/BlogClient";
import { getPosts } from "@/lib/controllers/postController";

async function Blog() {
	let posts = [];
	try {
		posts = await getPosts();
	} catch (error) {
		console.log(error);
		posts = [];
	}
	return <BlogClient posts={posts} />;
}

export default Blog;
