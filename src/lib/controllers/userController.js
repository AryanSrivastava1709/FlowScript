import User from "../models/userModel";
import { connectToDatabase } from "../utils/connectDB";

export const getUsers = async () => {
	try {
		connectToDatabase();
		const users = await User.find();
		return users;
	} catch (error) {
		console.log(error);
		throw new Error("Error while fetching users");
	}
};

export const getUserById = async (id) => {
	try {
		connectToDatabase();
		const user = await User.findById(id);
		return user;
	} catch (error) {
		console.log(error);
		throw new Error("Error while fetching user!😢");
	}
};