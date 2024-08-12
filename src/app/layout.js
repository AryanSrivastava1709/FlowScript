import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
export const metadata = {
	title: {
		default: "FlowScript",
		template: "%s | FlowScript",
	},
	description:
		"FlowScript is a blog dedicated to inspiring and guiding individuals through life's challenges. We offer motivational stories and practical tips to help you achieve your goals and overcome obstacles with confidence.",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='font-roboto flex flex-col justify-between h-screen w-5/6 m-auto p-6'>
				<Toaster position='top-left' />
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
