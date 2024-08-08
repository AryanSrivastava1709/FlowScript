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
		<div className='flex gap-12 items-center'>
			{links.map((link) => (
				<Link
					href={link.path}
					key={link.title}
					className={`text-base transition-all duration-150 ease-in ${
						pathName === link.path
							? "bg-white px-4 py-2 rounded-full text-black -translate-y-2 font-bold"
							: ""
					}`}
				>
					{link.title}
				</Link>
			))}
			{isAdmin && (
				<Link
					href='/admin'
					className={`text-base transition-all duration-150 ease-in ${
						pathName === "/admin"
							? "bg-red-500 px-4 py-2 rounded-full text-white -translate-y-2 font-bold"
							: ""
					}`}
				>
					Admin
				</Link>
			)}
			{isSession ? (
				<button className='text-base px-4 py-2 rounded-xl bg-white text-red-500 font-bold'>
					Logout
				</button>
			) : (
				<Link
					href='/login'
					className='text-base px-4 py-2 rounded-xl bg-white text-blue-500 font-bold'
				>
					Login
				</Link>
			)}
		</div>
	) : (
		<div className='flex flex-col gap-12 justify-center items-center h-4/6'>
			{links.map((link) => (
				<Link
					href={link.path}
					key={link.title}
					className={`text-base transition-all duration-150 ease-in ${
						pathName === link.path
							? "bg-white px-4 py-2 rounded-full text-black -translate-y-2 font-bold"
							: ""
					}`}
				>
					{link.title}
				</Link>
			))}
			{isAdmin && (
				<Link
					href='/admin'
					className={`text-base transition-all duration-150 ease-in ${
						pathName === "/admin"
							? "bg-red-500 px-4 py-2 rounded-full text-white -translate-y-2 font-bold"
							: ""
					}`}
				>
					Admin
				</Link>
			)}
			{isSession ? (
				<button className='text-base px-4 py-2 rounded-xl bg-white text-red-500 font-bold'>
					Logout
				</button>
			) : (
				<Link
					href='/login'
					className='text-base px-4 py-2 rounded-xl bg-white text-blue-500 font-bold'
				>
					Login
				</Link>
			)}
		</div>
	);
}

export default Links;
