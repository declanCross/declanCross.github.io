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
			{/* how can I help you? */}
			<section className="mt-12">
				{/* web development */}
				<div className="flex justify-center items-center px-4 py-2 bg-base-dark w-fit my-4">
					<h2 className="text-primary font-bold text-xl">WEB DEVELOPMENT</h2>
				</div>
				{/* text */}
				<h3 className="text-xl font-bold my-2">How can I help you?</h3>
				<p className="font-medium">
					I offer custom, start-to-finish website development services for
					anyone wanting a professional, fast, aesthetically-pleasing website
					that ranks highly on search engines.
				</p>
				{/* design */}
				<div className="flex items-center">
					<h3 className="text-2xl font-bold mt-7">DESIGN</h3>
					<Image
						src="/images/webp/design1.webp"
						alt="Design Icon"
						width={671}
						height={649}
						className="ml-4 w-13 h-auto -mb-4"
					/>
				</div>
				<h4 className="font-bold text-xl my-3">
					Make your website stand out with a custom design.
				</h4>
				<p className="font-medium my-2">
					I combine modern design principles with artistic style to create an
					effective, unique look and feel for your website.
				</p>
				<p className="font-medium">
					Whether you need a complete redesign or just a few tweaks to your
					existing site, I'm here to help you achieve your vision.
				</p>
				{/* build */}
				<div className="flex items-center">
					<h3 className="text-2xl font-bold mt-7">BUILD</h3>
					<Image
						src="/images/webp/build1.webp"
						alt="Build Icon"
						width={610}
						height={763}
						className="ml-4 w-11 h-auto -mb-5"
					/>
				</div>
				<h4 className="font-bold text-xl my-3">
					Bring your site to life with a fully functional build.
				</h4>
				<p className="font-medium my-2">
					Combine your visuals and functionality for a high-powered web
					application that users will love on any device.
				</p>
				<p className="font-medium">
					All projects are built with Next.js, a framework that was made for
					creating high-performance, SEO-friendly, scalable web applications.
				</p>
				{/* optimize */}
				<div className="flex items-center">
					<h3 className="text-2xl font-bold mt-7">OPTIMIZE</h3>
					<Image
						src="/images/webp/optimize1.webp"
						alt="Optimize Icon"
						width={610}
						height={763}
						className="ml-4 w-12 h-auto -mb-5"
					/>
				</div>
				<h4 className="font-bold text-xl my-3">
					Enhance your website's speed, accessibility, and SEO.
				</h4>
				<p className="font-medium my-2">
					I offer a range of optimization services to improve your site's speed,
					SEO, and overall user experience.
				</p>
				<p className="font-medium">
					Already have a website? I'll rebuild and optimize your existing site
					using the most up-to-date techniques so that it works better
					under-the-hood.
				</p>
			</section>
		</>
	)
}
