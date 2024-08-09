"use client";
import { useState } from "react";
import Links from "./Links";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className='relative flex justify-between items-center'>
			<Link
				href='/'
				className='text-xl font-semibold md:text-2xl lg:text-3xl lg:font-bold'
			>
				<Image src='/logo.svg' alt='logo' height={35} width={35} priority />
			</Link>
			<div className='hidden lg:flex justify-center flex-grow'>
				<Links direction='horizontal' />
			</div>
			<div className='block lg:hidden'>
				<button onClick={() => setIsMenuOpen((prev) => !prev)}>Menu</button>
			</div>
			{isMenuOpen && (
				<div className='h-screen  mt-10 absolute right-0 top-0 overflow-hidden lg:hidden w-1/2'>
					<Links direction='vertical' />
				</div>
			)}
		</div>
	);
}

export default NavBar;
