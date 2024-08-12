import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		tags: {
			type: Array,
			default: ["Blog"],
		},
		username: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);

const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);

export default Post;
