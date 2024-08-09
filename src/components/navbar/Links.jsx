import Link from "next/link";
import { usePathname } from "next/navigation";

function Links({ direction }) {
	const links = [
		{
			title: "Home",
			path: "/",
		},
		{
			title: "Blog",
			path: "/blog",
		},
		{
			title: "Contact",
			path: "/contact",
		},
		{
			title: "About",
			path: "/about",
		},
	];

	const pathName = usePathname();
	const isSession = true;
	const isAdmin = true;

	return direction === "horizontal" ? (
		<div className='flex flex-col sm:flex-row gap-6 sm:gap-12 items-center bg-gradient-to-r from-gray-700 to-gray-900 p-4 rounded-3xl shadow-lg bg-opacity-30 backdrop-blur-md border border-gray-200'>
			{links.map((link) => (
				<Link
					href={link.path}
					key={link.title}
					className={`text-base transition-all duration-150 ease-in hover:rotate-1 ${
						pathName === link.path
							? "bg-blue-500 px-4 py-2 rounded-full text-white  font-bold shadow-md"
							: "text-white"
					}`}
				>
					{link.title}
				</Link>
			))}
			{isAdmin && (
				<Link
					href='/admin'
					className={`text-base transition-all duration-150 ease-in hover:rotate-1 ${
						pathName === "/admin"
							? "bg-red-500 px-4 py-2 rounded-full text-white  font-bold shadow-md"
							: "text-white"
					}`}
				>
					Admin
				</Link>
			)}
			{isSession ? (
				<button className='text-base px-4 py-2 rounded-xl bg-white text-red-500 font-bold shadow-md hover:bg-gray-100'>
					Logout
				</button>
			) : (
				<Link
					href='/login'
					className='text-base px-4 py-2 rounded-xl bg-white text-blue-500 font-bold shadow-md hover:bg-gray-100'
				>
					Login
				</Link>
			)}
		</div>
	) : (
		<div className='flex flex-col gap-6 sm:gap-12 justify-center items-center h-4/6 bg-gradient-to-b from-gray-700 to-gray-900 p-4 rounded-3xl shadow-lg bg-opacity-30 backdrop-blur-md border border-gray-200'>
			{links.map((link) => (
				<Link
					href={link.path}
					key={link.title}
					className={`text-base transition-all duration-150 ease-in hover:rotate-1 ${
						pathName === link.path
							? "bg-blue-500 px-4 py-2 rounded-full text-white  font-bold shadow-md"
							: "text-white"
					}`}
				>
					{link.title}
				</Link>
			))}
			{isAdmin && (
				<Link
					href='/admin'
					className={`text-base transition-all duration-150 ease-in hover:rotate-1 ${
						pathName === "/admin"
							? "bg-red-500 px-4 py-2 rounded-full text-white  font-bold shadow-md"
							: "text-white"
					}`}
				>
					Admin
				</Link>
			)}
			{isSession ? (
				<button className='text-base px-4 py-2 rounded-xl bg-white text-red-500 font-bold shadow-md hover:bg-gray-100'>
					Logout
				</button>
			) : (
				<Link
					href='/login'
					className='text-base px-4 py-2 rounded-xl bg-white text-blue-500 font-bold shadow-md hover:bg-gray-100'
				>
					Login
				</Link>
			)}
		</div>
	);
}

export default Links;
