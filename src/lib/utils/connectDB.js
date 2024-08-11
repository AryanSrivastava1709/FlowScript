import mongoose from "mongoose";

const connection = {};

export const connectToDatabase = async () => {
	try {
		if (connection.isConnected) {
			console.log("Using existing connection");
			return;
		}
		const db = await mongoose.connect(process.env.MONGO_URL);
		console.log("Connected to database");
		connection.isConnected = db.connections[0].readyState;
	} catch (error) {
		console.log(error);
		throw new Error("Error connecting to database");
	}
};
