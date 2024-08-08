import Image from "next/image";

function Home() {
	return (
		<div className='flex gap-24 font-roboto'>
			<div className='flex-1 flex flex-col gap-12'>
				<h1 className='text-6xl font-bold'>
					Find <span className=' text-blue-400'>Inspiration</span> and{" "}
					<span className=' text-green-400'>Guidance</span> for Your Everyday{" "}
					<span className=' text-red-400'>Journey</span>
				</h1>
				<p className='text-xl'>
					Dive into stories and tips that inspire and guide your daily journey.
					Find the motivation and advice you need to navigate life's challenges
					with confidence and purpose.
				</p>
				<div className='flex gap-3'>
					<button className='px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl flex items-center'>
						Learn More
					</button>
					<button className='px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg transition-all hover:bg-green-600 hover:shadow-xl ml-4'>
						Contact
					</button>
				</div>
			</div>
			<div className='relative flex-1 flex items-center justify-center'>
				<Image
					src='/hero.png'
					alt='hero image'
					width={500}
					height={500}
					className='border-4 border-dashed border-pink-500 rounded-lg shadow-lg p-2 bg-white'
					style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
				/>
			</div>
		</div>
	);
}

export default Home;
