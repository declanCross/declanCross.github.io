import Image from "next/image"

export default function Nav() {
	return (
		<nav className="fixed top-0 left-0 w-full z-50">
			{/* nav container */}
			<div className="flex h-14">
				{/* logo and hamburger */}
				<div className="flex justify-between lg:justify-start pl-2 pr-6.5 items-center w-32 lg:w-[710px]">
					{/* logo */}
					<Image
						src="/images/webp/logo2.webp"
						alt="Logo"
						width={474}
						height={453}
						className="w-10 h-auto"
					/>
					{/* hamburger menu mobile */}
					<button
						className="lg:hidden flex flex-col items-center justify-between w-8 h-7 cursor-pointer"
						// onClick={toggleMenu}
					>
						<div className="w-8 h-1 bg-base-dark shadow-md"></div>
						<div className="w-8 h-1 bg-base-dark shadow-md"></div>
						<div className="w-8 h-1 bg-base-dark shadow-md"></div>
					</button>
					{/* nav links desktop */}
					<ul className="hidden lg:flex w-[700px] space-x-6 text-base-dark font-bold ml-8">
						<li>
							<a
								href="#"
								className="text-base-dark hover:text-secondary-blue transform transition-colors duration-300"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-base-dark hover:text-secondary-blue transform transition-colors duration-300"
							>
								How Can I Help You?
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-base-dark hover:text-secondary-blue transform transition-colors duration-300"
							>
								Portfolio
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-base-dark hover:text-secondary-blue transform transition-colors duration-300"
							>
								Contact
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-base-dark hover:text-secondary-blue transform transition-colors duration-300"
							>
								FAQ
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-base-dark hover:text-secondary-blue transform transition-colors duration-300"
							>
								About Me
							</a>
						</li>
					</ul>
				</div>
				{/* colors swoop */}
				<div className="w-[calc(100%-8rem)] h-full">
					<div className="bg-secondary-blue h-1/2 w-full" />
					<div className="flex h-1/2 w-full">
						<div className="bg-secondary-green h-full w-[calc(100%-5px)]" />
						<div className="bg-secondary-blue h-full w-[5px]" />
					</div>
				</div>
			</div>
		</nav>
	)
}
