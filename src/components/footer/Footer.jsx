import React from "react";

function Footer() {
	return (
		<footer className='py-6 border-t-4 border-gray-300'>
			<div className='container mx-auto flex flex-col items-center'>
				<p className='mb-4 text-lg text-gray-700'>
					Created by{" "}
					<a
						href='https://github.com/AryanSrivastava1709'
						className='text-blue-500 hover:underline'
					>
						AryanSrivastava1709
					</a>
				</p>
				<a
					href='https://github.com/your-github-handle/your-repo'
					className='bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold py-2 px-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 flex items-center'
					target='_blank'
					rel='noopener noreferrer'
				>
					<span className='mr-2'>❤️</span> Star my GitHub Repo
				</a>
			</div>
		</footer>
	);
}

export default Footer;
