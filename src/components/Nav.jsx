"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}
	}, [isMenuOpen])

	const toggleMenu = () => {
		// Toggle the mobile menu
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-primary">
			{/* Skip Link */}
			<a
				href="/#services"
				className="sr-only focus:not-sr-only absolute top-2 left-2 bg-primary text-foreground px-4 py-2 rounded"
				aria-label="Skip to main content"
			>
				Skip to main content
			</a>
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
						className="w-10 h-auto cursor-pointer"
						aria-label="Go to homepage"
						onClick={() => {
							window.scrollTo({ top: 0 })
						}}
						priority
					/>
					{/* hamburger menu mobile */}
					<button
						className="lg:hidden flex flex-col items-center justify-between w-8 h-7 cursor-pointer"
						onClick={toggleMenu}
					>
						<div className="w-8 h-1 bg-base-dark shadow-md"></div>
						<div className="w-8 h-1 bg-base-dark shadow-md"></div>
						<div className="w-8 h-1 bg-base-dark shadow-md"></div>
					</button>
					{/* Nav Modal */}
					<div
						className={`fixed top-0 right-0 h-screen w-6/12 bg-primary backdrop-blur-md z-50 transform pl-2 pt-2 ${
							isMenuOpen ? "translate-x-0" : "translate-x-full"
						} transition-transform duration-300 ease-in-out`}
					>
						{/* mobile nav */}
						<ul className="flex flex-col items-start space-y-4 p-4 text-base font-semibold text-primary-dark">
							<li>
								<Link href="/#" scroll={false}>
									<span
										className=""
										onClick={() => {
											toggleMenu()
											window.scrollTo({ top: 0 })
										}}
									>
										Home
									</span>
								</Link>
							</li>
							<li>
								<Link href="/#services">
									<span
										className=""
										onClick={() => {
											toggleMenu() // Close the main menu
										}}
									>
										Services
									</span>
								</Link>
							</li>
							<li>
								<Link href="/#portfolio">
									<span
										className=""
										onClick={() => {
											toggleMenu() // Close the main menu
										}}
									>
										Portfolio
									</span>
								</Link>
							</li>
							<li>
								<Link href="/#contact">
									<span
										className=""
										onClick={() => {
											toggleMenu() // Close the main menu
										}}
									>
										Contact
									</span>
								</Link>
							</li>
							<li>
								<Link href="/#faq">
									<span
										className=""
										onClick={() => {
											toggleMenu() // Close the main menu
										}}
									>
										FAQ
									</span>
								</Link>
							</li>
							<li>
								<Link href="/#about-me">
									<span
										className=""
										onClick={() => {
											toggleMenu() // Close the main menu
										}}
									>
										About Me
									</span>
								</Link>
							</li>
						</ul>
					</div>
					{/* nav links desktop */}
					<ul className="hidden lg:flex w-[700px] space-x-6 text-base-dark font-bold ml-8">
						<li>
							<a
								href="/#"
								className="text-base-dark hover:text-secondary-blue transform transition-colors duration-300"
								onClick={() => {
									window.scrollTo({ top: 0 })
								}}
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="/#services"
								className="text-base-dark hover:text-secondary-blue transform transition-colors duration-300"
							>
								Services
							</a>
						</li>
						<li>
							<a
								href="/#portfolio"
								className="text-base-dark hover:text-secondary-blue transform transition-colors duration-300"
							>
								Portfolio
							</a>
						</li>
						<li>
							<a
								href="/#contact"
								className="text-base-dark hover:text-secondary-blue transform transition-colors duration-300"
							>
								Contact
							</a>
						</li>
						<li>
							<a
								href="/#faq"
								className="text-base-dark hover:text-secondary-blue transform transition-colors duration-300"
							>
								FAQ
							</a>
						</li>
						<li>
							<a
								href="/#about-me"
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
			{/* Page Filter */}
			<div
				className={`fixed inset-0 bg-stone-950/40 z-40 transition-opacity duration-300 ${
					isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				style={{ height: "100vh" }} // Ensure it covers the full viewport height
				onClick={toggleMenu}
			></div>
		</nav>
	)
}
