import ProfilePageClient from "@/components/profile/PofilePageClient";
import { getPostsByUser } from "@/lib/controllers/postController";
import { getUser } from "@/lib/controllers/userController";
import React from "react";

async function ProfilePage({ params }) {
	const { slug } = params;
	let user = {};
	let posts = [];
	try {
		user = await getUser(slug.replace("%20", " "));
		posts = await getPostsByUser(slug.replace("%20", " "));
	} catch (error) {
		console.error(error);
		user = {};
		posts = [];
	}
	return <ProfilePageClient user={user} posts={posts} isCurrentUser={true} />;
}

export default ProfilePage;
