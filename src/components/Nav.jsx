import Image from "next/image"

export default function Nav() {
	return (
		<>
			{/* navbar container */}
			<nav className="flex h-14">
				{/* logo and hamburger */}
				<div className="flex justify-between pl-2 pr-6.5 items-center w-32">
					{/* logo */}
					<Image
						src="/images/webp/logo2.webp"
						alt="Logo"
						width={474}
						height={453}
						className="w-10 h-auto"
					/>
					{/* hamburger menu */}
					<button
						className="lg:hidden flex flex-col items-center justify-between w-8 h-7 cursor-pointer"
						// onClick={toggleMenu}
					>
						<div className="w-8 h-1 bg-base-dark shadow-md"></div>
						<div className="w-8 h-1 bg-base-dark shadow-md"></div>
						<div className="w-8 h-1 bg-base-dark shadow-md"></div>
					</button>
				</div>
				{/* colors swoop */}
				<div className="w-[calc(100%-8rem)] h-full">
					<div className="bg-secondary-blue h-1/2 w-full" />
					<div className="flex h-1/2 w-full">
						<div className="bg-secondary-green h-full w-[calc(100%-4px)]" />
						<div className="bg-secondary-blue h-full w-[4px]" />
					</div>
				</div>
			</nav>
		</>
	)
}
