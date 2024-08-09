import Image from "next/image";
import Link from "next/link";

function Home() {
	return (
		<div className='flex flex-col lg:flex-row gap-8 lg:gap-24 font-roboto p-4 sm:p-6 md:p-8 lg:p-10'>
			<div className='flex-1 flex flex-col gap-6 sm:gap-8 md:gap-12'>
				<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
					Find <span className='text-blue-400'>Inspiration</span> and{" "}
					<span className='text-green-400'>Guidance</span> for Your Everyday{" "}
					<span className='text-red-400'>Journey</span>
				</h1>
				<p className='text-base sm:text-lg md:text-xl'>
					Dive into stories and tips that inspire and guide your daily journey.
					Find the motivation and advice you need to navigate life's challenges
					with confidence and purpose.
				</p>
				<div className='flex flex-col sm:flex-row gap-3'>
					<Link
						href='/about'
						className='px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-lg shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl flex items-center'
					>
						Learn More
					</Link>
					<Link
						href='/contact'
						className='px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-lg shadow-lg transition-all hover:bg-green-600 hover:shadow-xl'
					>
						Contact
					</Link>
				</div>
			</div>
			<div className='flex-1 flex items-center justify-center'>
				<Image
					src='/hero.png'
					alt='hero image'
					width={500}
					height={500}
					priority
					className='border-4 border-dashed border-pink-500 rounded-lg shadow-lg p-2 bg-white'
					style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
				/>
			</div>
		</div>
	);
}

export default Home;
