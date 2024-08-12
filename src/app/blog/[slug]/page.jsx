import SingleBlogPageClient from "@/components/BlogComponents/SingleBlogPageClient";
import { getPost } from "@/lib/controllers/postController";

export const metadata = {
	title: "Blog",
	description:
		"Read the latest posts from our blog and get inspired to achieve your goals.",
};

async function SingleBlogPage({ params }) {
	const { slug } = params;
	let blog = [];
	try {
		blog = await getPost(slug);
	} catch (error) {
		console.error(error);
		blog = [];
	}
	return <SingleBlogPageClient blog={blog} />;
}

export default SingleBlogPage;
