"use client"

import { useState, useRef, useEffect } from "react"

const UP_PATH =
	"M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2-9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8L288 320c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
const DOWN_PATH =
	"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"

const faqs = [
	{
		q: "How much will my website cost?",
		a: "Every project is unique, so pricing depends on your specific needs, features, and design complexity. After a free consultation, I'll provide a detailed quote tailored to your goals and budget. I'm always transparent about costs—no hidden fees.",
	},
	{
		q: "How long does it take to build a website?",
		a: "Timelines vary based on project size and requirements. Most websites are completed within 4-8 weeks. I'll give you a clear timeline up front and keep you updated throughout the process, so you always know what to expect.",
	},
	{
		q: "What if I'm not happy with the result?",
		a: "Your satisfaction is my priority. I work closely with you, provide regular updates, and offer revisions based on your feedback. If you're not happy, I'll keep working until you are—within the agreed project scope.",
	},
	{
		q: "How can I be sure my site is really optimized?",
		a: "I use industry-standard tools to test speed, accessibility, SEO, and mobile-friendliness. I'll share performance reports and explain what's been improved, so you can see the results for yourself.",
	},
	{
		q: "Will I be able to update my website myself?",
		a: "You'll have full access to everything you need to make changes to your website, including the code repository and hosting account. However, making updates will require some familiarity with these platforms and basic development experience. If you'd prefer, I'm always available to make changes or updates for you quickly and efficiently.",
	},
	{
		q: "Do you offer website maintenance or support after launch?",
		a: "Yes, I offer ongoing maintenance and support to keep your website secure, up-to-date, and running smoothly. I can also help with updates, new features, or troubleshooting as your needs evolve.",
	},
	{
		q: "Can you redesign my existing website?",
		a: "Definitely! Whether you want a complete overhaul or just a refresh, I can redesign your current site to improve its look, performance, and user experience while keeping what works for you.",
	},
	{
		q: "Will my website work on mobile devices?",
		a: "Yes, every website I build is fully responsive and tested on all major devices and browsers to ensure a seamless experience for your visitors, no matter how they access your site.",
	},
	{
		q: "How do we get started?",
		a: "Just reach out through the contact form. We'll schedule a free consultation to discuss your goals, ideas, and next steps. I'll guide you through the entire process from start to finish.",
	},
]

export default function Faq() {
	const [openIndex, setOpenIndex] = useState(null)
	const contentRefs = useRef([])

	const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

	useEffect(() => {
		contentRefs.current.forEach((ref, i) => {
			if (ref) {
				ref.style.maxHeight = openIndex === i ? `${ref.scrollHeight}px` : "0px"
			}
		})
	}, [openIndex])

	return (
		<div className="max-w-prose mx-auto">
			{faqs.map((faq, i) => (
				<div
					key={i}
					className={`py-6 ${i === 0 ? "border-y-2" : "border-b-2"} border-primary-light`}
				>
					<button
						className="flex justify-between items-center w-full text-left cursor-pointer"
						onClick={() => toggle(i)}
						aria-expanded={openIndex === i}
						aria-controls={`faq-panel-${i}`}
						id={`faq-btn-${i}`}
					>
						<p className="font-semibold">{faq.q}</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 320 512"
							fill="currentColor"
							className="w-6 h-6 -mt-1 text-base-dark shrink-0 ml-4"
							aria-hidden="true"
						>
							<path d={openIndex === i ? UP_PATH : DOWN_PATH} />
						</svg>
					</button>
					<div
						id={`faq-panel-${i}`}
						role="region"
						aria-labelledby={`faq-btn-${i}`}
						ref={(el) => (contentRefs.current[i] = el)}
						className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
					>
						<p className="mt-4">{faq.a}</p>
					</div>
				</div>
			))}
		</div>
	)
}
