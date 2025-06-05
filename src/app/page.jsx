import Image from "next/image"

export default function Home() {
	return (
		<>
			{/* landing */}
			<section className="mt-8">
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
		</>
	)
}
