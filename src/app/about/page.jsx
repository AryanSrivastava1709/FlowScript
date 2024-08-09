import Image from "next/image";
import React from "react";

function About() {
	return (
		<div className='font-roboto p-4 sm:p-6 md:p-8 lg:p-10'>
			<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20'>
				About Us
			</h1>
			<div className='flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
				<div className='flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 p-6 sm:p-8 md:p-10 shadow-lg border-gradient'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-400'>
						Our Mission
					</h2>
					<p className='text-base sm:text-lg md:text-xl text-gray-300'>
						Our mission is to empower individuals by providing them with the
						inspiration and guidance they need to navigate their everyday
						journeys. We believe that everyone has the potential to achieve
						greatness, and we are here to support you every step of the way.
					</p>
				</div>
				<div className='flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 p-6 sm:p-8 md:p-10 shadow-lg border-gradient'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-green-400'>
						Our Story
					</h2>
					<p className='text-base sm:text-lg md:text-xl text-gray-300'>
						Founded with a passion for helping others, our platform was created
						to share stories, tips, and advice that inspire and guide. We
						understand the challenges of daily life and aim to be a source of
						motivation and support for our community.
					</p>
				</div>
				<div className='flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 p-6 sm:p-8 md:p-10 shadow-lg border-gradient'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-red-400'>
						What We Offer
					</h2>
					<p className='text-base sm:text-lg md:text-xl text-gray-300'>
						We offer a wide range of resources designed to inspire and guide
						you. From motivational stories to practical tips, our content is
						crafted to help you overcome obstacles and achieve your goals with
						confidence and purpose.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
