import Image from "next/image";

function About() {
	return (
		<div>
			<div className=' relative w-full h-[500px]'>
				<Image
					src='https://images.unsplash.com/photo-1719937206642-ca0cd57198cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='about image'
					fill
					priority
				/>
			</div>
		</div>
	);
}

export default About;
