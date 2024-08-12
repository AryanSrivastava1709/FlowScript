import Post from "../models/postModel";
import { connectToDatabase } from "../utils/connectDB";

export const getPosts = async () => {
	try {
		await connectToDatabase();
		const posts = await Post.find();
		return posts;
	} catch (err) {
		console.error(err);
		throw new Error("Error getting posts!😢");
	}
};

export const getPost = async (slug) => {
	try {
		await connectToDatabase();
		const post = await Post.findOne({ slug });
		return post;
	} catch (error) {
		console.errpr(error);
		throw new Error("Failed to fetch post!😢");
	}
};
