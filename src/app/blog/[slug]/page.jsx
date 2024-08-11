import SingleBlogPageClient from "@/components/BlogComponents/SingleBlogPageClient";
import { getPost } from "@/lib/controllers/postController";

async function SingleBlogPage({ params }) {
	const { slug } = params;
	let blog = [];
	try {
		blog = await getPost(slug);
	} catch (error) {
		console.log(error);
		blog = [];
	}
	return <SingleBlogPageClient blog={blog} />;
}

export default SingleBlogPage;
