import Image from "next/image";
import React from "react";

function Footer() {
	return (
		<footer className='py-6 sm:py-8 border-t-2 border-pink-300'>
			<div className='container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
				<div className='flex items-center space-x-3 sm:space-x-4'>
					<Image src='/logo.svg' alt='logo' height={40} width={40} priority />
					<p className='text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
						FlowScript
					</p>
				</div>
				<div className='flex flex-col items-center sm:items-end space-y-2'>
					<p className='text-base sm:text-lg text-gray-700'>
						Created by{" "}
						<a
							href='https://github.com/AryanSrivastava1709'
							className='text-blue-500 hover:underline'
							target='_blank'
							rel='noopener noreferrer'
						>
							AryanSrivastava1709
						</a>
					</p>
					<a
						href='https://github.com/AryanSrivastava1709/FlowScript'
						className='bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold py-2 px-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 flex items-center'
						target='_blank'
						rel='noopener noreferrer'
					>
						<span className='mr-2'>❤️</span> Star my GitHub Repo
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
