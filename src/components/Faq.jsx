"use client"

import { useState, useRef, useEffect } from "react"

export default function Faq() {
	const [openQuestion, setOpenQuestion] = useState(null)
	const contentRefs = useRef([])

	const toggleQuestion = (index) => {
		setOpenQuestion(openQuestion === index ? null : index)
	}

	useEffect(() => {
		// Dynamically set the max-height for visible content
		contentRefs.current.forEach((ref, index) => {
			if (ref) {
				ref.style.maxHeight =
					openQuestion === index + 1 ? `${ref.scrollHeight}px` : "0px"
			}
		})
	}, [openQuestion])

	return (
		<div className="max-w-prose mx-auto">
			{/* question 1 */}
			<div
				className="py-6 border-y-2 border-primary-light cursor-pointer"
				onClick={() => toggleQuestion(1)}
			>
				<div className="flex justify-between items-center">
					<p className="font-semibold">How much will my website cost?</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
						fill="currentColor"
						className="w-6 h-6 -mt-1 text-base-dark"
					>
						<path
							d={
								openQuestion === 1
									? "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2-9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8L288 320c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
									: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
							}
						/>
					</svg>
				</div>
				<div
					ref={(el) => (contentRefs.current[0] = el)}
					className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
				>
					{/* answer */}
					<p className="mt-4">
						Every project is unique, so pricing depends on your specific needs,
						features, and design complexity. After a free consultation, I'll
						provide a detailed quote tailored to your goals and budget. I'm
						always transparent about costs—no hidden fees.
					</p>
				</div>
			</div>
			{/* question 2 */}
			<div
				className="py-6 border-b-2 border-primary-light cursor-pointer"
				onClick={() => toggleQuestion(2)}
			>
				<div className="flex justify-between items-center">
					<p className="font-semibold">
						How long does it take to build a website?
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
						fill="currentColor"
						className="w-6 h-6 -mt-1 text-base-dark"
					>
						<path
							d={
								openQuestion === 2
									? "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2-9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8L288 320c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
									: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
							}
						/>
					</svg>
				</div>
				<div
					ref={(el) => (contentRefs.current[1] = el)}
					className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
				>
					{/* answer */}
					<p className="mt-4">
						Timelines vary based on project size and requirements. Most websites
						are completed within 4-8 weeks. I'll give you a clear timeline up
						front and keep you updated throughout the process, so you always
						know what to expect.
					</p>
				</div>
			</div>
			{/* question 3 */}
			<div
				className="py-6 border-b-2 border-primary-light cursor-pointer"
				onClick={() => toggleQuestion(3)}
			>
				<div className="flex justify-between items-center">
					<p className="font-semibold">
						What if I'm not happy with the result?
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
						fill="currentColor"
						className="w-6 h-6 -mt-1 text-base-dark"
					>
						<path
							d={
								openQuestion === 3
									? "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2-9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8L288 320c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
									: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
							}
						/>
					</svg>
				</div>
				<div
					ref={(el) => (contentRefs.current[2] = el)}
					className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
				>
					{/* answer */}
					<p className="mt-4">
						{" "}
						Your satisfaction is my priority. I work closely with you, provide
						regular updates, and offer revisions based on your feedback. If
						you're not happy, I'll keep working until you are—within the agreed
						project scope.
					</p>
				</div>
			</div>
			{/* question 4 */}
			<div
				className="py-6 border-b-2 border-primary-light cursor-pointer"
				onClick={() => toggleQuestion(4)}
			>
				<div className="flex justify-between items-center">
					<p className="font-semibold">
						How can I be sure my site is really optimized?
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
						fill="currentColor"
						className="w-6 h-6 -mt-1 text-base-dark"
					>
						<path
							d={
								openQuestion === 4
									? "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2-9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8L288 320c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
									: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
							}
						/>
					</svg>
				</div>
				<div
					ref={(el) => (contentRefs.current[3] = el)}
					className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
				>
					{/* answer */}
					<p className="mt-4">
						{" "}
						I use industry-standard tools to test speed, accessibility, SEO, and
						mobile-friendliness. I'll share performance reports and explain
						what's been improved, so you can see the results for yourself.
					</p>
				</div>
			</div>
			{/* question 5 */}
			<div
				className="py-6 border-b-2 border-primary-light cursor-pointer"
				onClick={() => toggleQuestion(5)}
			>
				<div className="flex justify-between items-center">
					<p className="font-semibold">
						Will I be able to update my website myself?
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
						fill="currentColor"
						className="w-6 h-6 -mt-1 text-base-dark"
					>
						<path
							d={
								openQuestion === 5
									? "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2-9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8L288 320c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
									: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
							}
						/>
					</svg>
				</div>
				<div
					ref={(el) => (contentRefs.current[4] = el)}
					className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
				>
					<p className="mt-4">
						You'll have full access to everything you need to make changes to
						your website, including the code repository and hosting account.
						However, making updates will require some familiarity with these
						platforms and basic development experience. If you'd prefer, I'm
						always available to make changes or updates for you quickly and
						efficiently.
					</p>
				</div>
			</div>
			{/* question 6 */}
			<div
				className="py-6 border-b-2 border-primary-light cursor-pointer"
				onClick={() => toggleQuestion(6)}
			>
				<div className="flex justify-between items-center">
					<p className="font-semibold">
						Do you offer website maintenance or support after launch?
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
						fill="currentColor"
						className="w-6 h-6 -mt-1 text-base-dark"
					>
						<path
							d={
								openQuestion === 6
									? "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2-9.2-11.9-22.9-6.9 34.9s16.6 19.8 29.6 19.8L288 320c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
									: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
							}
						/>
					</svg>
				</div>
				<div
					ref={(el) => (contentRefs.current[5] = el)}
					className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
				>
					<p className="mt-4">
						Yes, I offer ongoing maintenance and support to keep your website
						secure, up-to-date, and running smoothly. I can also help with
						updates, new features, or troubleshooting as your needs evolve.
					</p>
				</div>
			</div>
			{/* question 7 */}
			<div
				className="py-6 border-b-2 border-primary-light cursor-pointer"
				onClick={() => toggleQuestion(7)}
			>
				<div className="flex justify-between items-center">
					<p className="font-semibold">Can you redesign my existing website?</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
						fill="currentColor"
						className="w-6 h-6 -mt-1 text-base-dark"
					>
						<path
							d={
								openQuestion === 7
									? "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2-9.2-11.9-22.9-6.9 34.9s16.6 19.8 29.6 19.8L288 320c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
									: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
							}
						/>
					</svg>
				</div>
				<div
					ref={(el) => (contentRefs.current[6] = el)}
					className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
				>
					<p className="mt-4">
						Definitely! Whether you want a complete overhaul or just a refresh,
						I can redesign your current site to improve its look, performance,
						and user experience while keeping what works for you.
					</p>
				</div>
			</div>
			{/* question 8 */}
			<div
				className="py-6 border-b-2 border-primary-light cursor-pointer"
				onClick={() => toggleQuestion(8)}
			>
				<div className="flex justify-between items-center">
					<p className="font-semibold">
						Will my website work on mobile devices?
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
						fill="currentColor"
						className="w-6 h-6 -mt-1 text-base-dark"
					>
						<path
							d={
								openQuestion === 8
									? "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2-9.2-11.9-22.9-6.9 34.9s16.6 19.8 29.6 19.8L288 320c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
									: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
							}
						/>
					</svg>
				</div>
				<div
					ref={(el) => (contentRefs.current[7] = el)}
					className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
				>
					<p className="mt-4">
						Yes, every website I build is fully responsive and tested on all
						major devices and browsers to ensure a seamless experience for your
						visitors, no matter how they access your site.
					</p>
				</div>
			</div>
			{/* question 9 */}
			<div
				className="py-6 border-b-2 border-primary-light cursor-pointer"
				onClick={() => toggleQuestion(9)}
			>
				<div className="flex justify-between items-center">
					<p className="font-semibold">How do we get started?</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
						fill="currentColor"
						className="w-6 h-6 -mt-1 text-base-dark"
					>
						<path
							d={
								openQuestion === 9
									? "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2-9.2-11.9-22.9-6.9 34.9s16.6 19.8 29.6 19.8L288 320c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
									: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
							}
						/>
					</svg>
				</div>
				<div
					ref={(el) => (contentRefs.current[8] = el)}
					className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
				>
					<p className="mt-4">
						Just reach out through the contact form. We'll schedule a free
						consultation to discuss your goals, ideas, and next steps. I'll
						guide you through the entire process from start to finish.
					</p>
				</div>
			</div>
		</div>
	)
}
