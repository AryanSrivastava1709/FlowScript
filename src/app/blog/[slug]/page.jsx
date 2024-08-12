import SingleBlogPageClient from "@/components/BlogComponents/SingleBlogPageClient";
import { getPost } from "@/lib/controllers/postController";
import { getUser } from "@/lib/controllers/userController";

export const metadata = {
	title: "Blog",
	description:
		"Read the latest posts from our blog and get inspired to achieve your goals.",
};

async function SingleBlogPage({ params }) {
	const { slug } = params;
	let blog = [];
	let user = [];
	try {
		blog = await getPost(slug);
		const { username } = blog;
		user = await getUser(username);
	} catch (error) {
		console.error(error.message);
		blog = [];
	}
	return <SingleBlogPageClient blog={blog} user={user} />;
}

export default SingleBlogPage;
