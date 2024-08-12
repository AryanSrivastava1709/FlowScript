import Image from "next/image";

export const metadata = {
	title: "Contact",
	description:
		"Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.",
};

function Contact() {
	return (
		<div className='flex flex-col lg:flex-row gap-8 lg:gap-24 font-roboto p-4 sm:p-6 md:p-8 lg:p-10'>
			<div className='flex-1 flex items-center justify-center'>
				<Image
					src='/contact.png'
					alt='hero image'
					width={500}
					height={500}
					priority
					className='rounded-lg shadow-lg p-2'
					style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
				/>
			</div>
			<div className='flex-1 flex flex-col gap-4 justify-center'>
				<h1 className='text-3xl sm:text-4xl md:text-5xl'>Get in Touch</h1>
				<p className='text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10'>
					Have a question or want to work together? Fill out the form below and
					we'll get back to you as soon as possible.
				</p>
				<form className='flex flex-col gap-6 sm:gap-8'>
					<div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
						<div className='flex-1 pb-2 pr-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg'>
							<input
								type='text'
								placeholder='John Doe'
								className='w-full py-3 px-4 border border-gray-300 rounded-md bg-mainBgColor'
							/>
						</div>
						<div className='flex-1 pb-2 pr-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg'>
							<input
								type='email'
								placeholder='johndoe@example.com'
								className='w-full py-3 px-4 border border-gray-300 rounded-md bg-mainBgColor'
							/>
						</div>
					</div>
					<div className='pb-2 pr-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg'>
						<textarea
							placeholder='How can we help you?'
							className='w-full h-32 sm:h-40 py-3 px-4 border border-gray-300 rounded-md bg-mainBgColor'
						></textarea>
					</div>
					<button
						type='submit'
						className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
