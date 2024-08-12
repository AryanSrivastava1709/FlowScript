import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			min: 3,
			max: 20,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			max: 50,
		},
		password: {
			type: String,
			required: true,
			min: 6,
			select: false,
		},
		img: {
			type: String,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
