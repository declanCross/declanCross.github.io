"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
	return (
		<>
			<section className="pt-16 pb-6 w-11/12 mx-auto">
				<Image
					src="/images/webp/logo2.webp"
					alt="Declan Cross"
					width={474}
					height={453}
					className="w-2/3 max-w-[275px] h-auto mx-auto mb-6"
					sizes="(max-width: 460px) 80vw, 275px"
				/>
				<h3 className="text-center font-bold text-xl">
					Cross Development Services
				</h3>
				{/* footer nav */}
				<div className="mx-auto my-16 w-24 lg:hidden">
					<h3 className="text-xl font-bold">Nav</h3>
					<ul className="flex flex-col gap-2 my-2 text-lg font-medium text-neutral-600">
						<li
							className="hover:text-primary transform
						transition duration-300"
							onClick={() => {
								window.scrollTo({ top: 0 })
							}}
						>
							<Link href="/#" scroll={false}>
								Home
							</Link>
						</li>
						<li
							className="hover:text-primary transform
						transition duration-300"
						>
							<Link href="/#services">Services</Link>
						</li>
						<li
							className="hover:text-primary transform
						transition duration-300"
						>
							<Link href="/#portfolio">Portfolio</Link>
						</li>
						<li
							className="hover:text-primary transform
						transition duration-300"
						>
							<Link href="/#contact">Contact</Link>
						</li>
						<li
							className="hover:text-primary transform
						transition duration-300"
						>
							<Link href="/#faq">FAQ</Link>
						</li>
						<li
							className="hover:text-primary transform
						transition duration-300"
						>
							<Link href="/#about-me">About Me</Link>
						</li>
					</ul>
				</div>
				{/* bottom links and copyright */}
				<p className="font-medium text-sm text-neutral-600 text-center lg:mt-38">
					<span>
						<Link
							href="/terms-and-conditions"
							className="hover:text-secondary-blue transform transition-colors duration-300"
						>
							Terms & Conditions
						</Link>
					</span>
					<span className="text-base-dark mx-2">|</span>
					<span>
						<Link
							href="/sitemap-0.xml"
							className="hover:text-secondary-blue transform transition-colors duration-300"
						>
							Sitemap
						</Link>
					</span>
				</p>
				<p className="text-sm my-2 font-medium text-center">
					<span>© 2026 Cross Development Services</span>
				</p>
				<p className="text-sm my-2 font-medium text-center">
					<span>
						Website by{" "}
						<Link
							href="https://www.crossdevelopmentservices.com"
							className="text-neutral-600 hover:text-secondary-blue transform transition-colors duration-300"
							target="_blank"
							rel="noopener noreferrer"
						>
							Cross Development Services
						</Link>
					</span>
				</p>
			</section>
		</>
	)
}
