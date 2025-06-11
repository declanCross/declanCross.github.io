import ProjectCard from "@/components/ProjectCard"
import ServiceCard from "@/components/ServiceCard"
import Image from "next/image"

export default function Home() {
	return (
		<>
			{/* landing */}
			<section className="mt-8 w-11/12 max-w-prose lg:max-w-7xl mx-auto ">
				<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-neutral-600 font-bold my-4 lg:my-8">
					Cross Development Services
				</h1>
				<h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-base-dark font-semibold -ml-0.5 my-2 lg:my-4">
					DESIGN
				</h2>
				<h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-base-dark font-bold -ml-0.5 my-2 lg:my-4">
					BUILD
				</h2>
				<h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-base-dark font-bold -ml-0.5 my-2 lg:my-4">
					OPTIMIZE
				</h2>
				<h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-base-dark font-bold ml-0.5 my-2 lg:my-4">
					YOUR WEBSITE
				</h3>
				{/* blue and green skewed squares */}
				<div className="w-full flex my-6 lg:my-12">
					<div className="w-8 sm:w-10 lg:w-14 h-8 sm:h-10 lg:h-14 bg-secondary-blue transform -skew-x-18 mr-4"></div>
					<div className="w-8 sm:w-10 lg:w-14 h-8 sm:h-10 lg:h-14 bg-secondary-green transform -skew-x-18 mr-4"></div>
					<div className="w-8 sm:w-10 lg:w-14 h-8 sm:h-10 lg:h-14 bg-secondary-blue transform -skew-x-18 mr-4"></div>
					<div className="w-8 sm:w-10 lg:w-14 h-8 sm:h-10 lg:h-14 bg-secondary-green transform -skew-x-18 mr-4"></div>
					<div className="w-8 sm:w-10 lg:w-14 h-8 sm:h-10 lg:h-14 bg-secondary-blue transform -skew-x-18 mr-4"></div>
					<div className="w-8 sm:w-10 lg:w-14 h-8 sm:h-10 lg:h-14 bg-secondary-green transform -skew-x-18 mr-4"></div>
					<div className="hidden xs:block w-8 sm:w-10 lg:w-14 h-8 sm:h-10 lg:h-14 bg-secondary-blue transform -skew-x-18 mr-4"></div>
					<div className="hidden xs:block w-8 sm:w-10 lg:w-14 h-8 sm:h-10 lg:h-14 bg-secondary-green transform -skew-x-18 mr-4"></div>
					<div className="hidden sm:block w-10 lg:w-14 h-10 lg:h-14 bg-secondary-blue transform -skew-x-18 mr-4"></div>
					<div className="hidden sm:block w-10 lg:w-14 h-10 lg:h-14 bg-secondary-green transform -skew-x-18 mr-4"></div>
					<div className="hidden md:block w-10 lg:w-14 h-10 lg:h-14 bg-secondary-blue transform -skew-x-18 mr-4"></div>
					<div className="hidden md:block w-10 lg:w-14 h-10 lg:h-14 bg-secondary-green transform -skew-x-18 mr-4"></div>
					<div className="hidden xl:block w-10 lg:w-14 h-10 lg:h-14 bg-secondary-blue transform -skew-x-18 mr-4"></div>
					<div className="hidden xl:block w-10 lg:w-14 h-10 lg:h-14 bg-secondary-green transform -skew-x-18 mr-4"></div>
					<div className="hidden xl:block w-10 lg:w-14 h-10 lg:h-14 bg-secondary-blue transform -skew-x-18 mr-4"></div>
					<div className="hidden xl:block w-10 lg:w-14 h-10 lg:h-14 bg-secondary-green transform -skew-x-18 mr-4"></div>
				</div>
			</section>
			{/* services */}
			<section className="mt-12 mb-24 w-11/12 max-w-prose lg:max-w-7xl mx-auto">
				<div className="flex justify-center items-center px-4 py-2 bg-base-dark w-fit my-4">
					<h2 className="text-primary font-bold text-xl">SERVICES</h2>
				</div>
				{/* web development */}
				<div className="lg:flex lg:items-center">
					{/* text */}
					<div className="lg:w-8/12 lg:max-w-prose lg:mr-8">
						<h3 className="text-xl font-bold my-2">Web Development</h3>
						<p className="font-medium">
							I offer custom, start-to-finish website development services for
							anyone wanting a professional, fast, aesthetically-pleasing
							website that ranks highly on search engines.
						</p>
					</div>
					{/* images lg screens */}
					<div className="hidden lg:flex items-baseline">
						<Image
							src="/images/webp/design1.webp"
							alt="Design Icon"
							width={671}
							height={649}
							className="w-20 h-auto"
						/>
						<Image
							src="/images/webp/build1.webp"
							alt="Build Icon"
							width={610}
							height={763}
							className="ml-4 w-18 h-auto"
						/>
						<Image
							src="/images/webp/optimize1.webp"
							alt="Optimize Icon"
							width={766}
							height={880}
							className="ml-4 w-19 h-auto"
						/>
					</div>
				</div>
				{/* design, build, optimize */}
				<div className="lg:flex lg:space-x-4">
					{/* design */}
					<ServiceCard
						title="DESIGN"
						image={{
							src: "/images/webp/design1.webp",
							width: 671,
							height: 649,
						}}
						description="Make your website stand out with a custom design."
						text1="I combine modern design principles with artistic style to create an effective, unique look and feel for your website."
						text2="Whether you need a complete redesign or just a few tweaks to your existing site, I'm here to help you achieve your vision."
					/>
					{/* build */}
					<ServiceCard
						title="BUILD"
						image={{
							src: "/images/webp/build1.webp",
							width: 610,
							height: 763,
						}}
						description="Bring your site to life with a fully functional build."
						text1="I use the latest technologies and best practices to create a seamless, high-performance website."
						text2="From front-end to back-end, I handle all aspects of your website's development."
					/>
					{/* optimize */}
					<ServiceCard
						title="OPTIMIZE"
						image={{
							src: "/images/webp/optimize1.webp",
							width: 766,
							height: 880,
						}}
						description="Enhance your website's speed, accessibility, and SEO."
						text1="I offer a range of optimization services to improve your site's speed, SEO, and overall user experience."
						text2="Already have a website? I'll rebuild and optimize your existing site using the most up-to-date techniques so that it works better under-the-hood."
					/>
				</div>
			</section>
			{/* portfolio */}
			<section className="bg-secondary-green pt-8 pb-24">
				{/* content */}
				<div className="w-11/12 max-w-prose lg:max-w-7xl mx-auto">
					<div className="flex justify-center items-center px-4 py-2 bg-primary w-fit my-4">
						<h2 className="text-base-dark font-bold text-xl">PORTFOLIO</h2>
					</div>
					{/* project cards */}
					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
						<ProjectCard
							image={{
								src: "/images/image_placeholder_150.png",
								width: 800,
								height: 600,
							}}
							title="Tubon-Salvador Dentistry"
							link="https://www.tubonsalvadordentistry.com"
						/>
						<ProjectCard
							image={{
								src: "/images/image_placeholder_150.png",
								width: 800,
								height: 600,
							}}
							title="kr.ink"
							link="https://www.bykrink.com"
						/>
						<ProjectCard
							image={{
								src: "/images/image_placeholder_150.png",
								width: 800,
								height: 600,
							}}
							title="Beyond The Game"
							link="https://www.gobeyondthegame.ca"
						/>
						<ProjectCard
							image={{
								src: "/images/image_placeholder_150.png",
								width: 800,
								height: 600,
							}}
							title="Le Dream Hotel"
							link="https://www.ledreamhotel.info"
						/>
						<ProjectCard
							image={{
								src: "/images/image_placeholder_150.png",
								width: 800,
								height: 600,
							}}
							title="2% Better"
							link="https://2percentbetter.vercel.app"
						/>
					</div>
					{/* <div className="flex justify-center items-center px-4 py-2 border-4 border-primary w-fit my-12 shadow-md mx-auto">
						<h2 className="text-primary font-bold text-xl">
							See More Projects
						</h2>
					</div> */}
				</div>
			</section>
			{/* review 1 */}
			<section className="bg-base-light py-8 ">
				<div>
					<p>"</p>
					<p>
						Declan made me the best website I could have asked for. He listened
						to me and implemented everything I wanted. Highly recommend!
					</p>
					<p>"</p>
				</div>
				<p>Person</p>
				<p>Title, Company</p>
			</section>
		</>
	)
}
