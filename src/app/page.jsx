import Image from "next/image"

export default function Home() {
	return (
		<>
			{/* landing */}
			<section className="mt-8">
				<h1 className="text-xl text-neutral-600 font-bold my-4">
					Cross Development Services
				</h1>
				<h2 className="text-5xl text-base-dark font-semibold -ml-0.5 my-2">
					DESIGN
				</h2>
				<h2 className="text-5xl text-base-dark font-bold -ml-0.5 my-2">
					BUILD
				</h2>
				<h2 className="text-5xl text-base-dark font-bold -ml-0.5 my-2">
					OPTIMIZE
				</h2>
				<h3 className="text-xl text-base-dark font-bold ml-0.5 my-2">
					YOUR WEBSITE
				</h3>
				{/* blue and green skewed squares */}
				<div className="w-full flex my-4">
					<div className="w-8 h-8 bg-secondary-blue transform -skew-x-18 mr-4"></div>
					<div className="w-8 h-8 bg-secondary-green transform -skew-x-18 mr-4"></div>
					<div className="w-8 h-8 bg-secondary-blue transform -skew-x-18 mr-4"></div>
					<div className="w-8 h-8 bg-secondary-green transform -skew-x-18 mr-4"></div>
					<div className="w-8 h-8 bg-secondary-blue transform -skew-x-18 mr-4"></div>
					<div className="w-8 h-8 bg-secondary-green transform -skew-x-18 mr-4"></div>
				</div>
			</section>
		</>
	)
}
