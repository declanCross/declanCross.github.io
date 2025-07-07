export default function Review({ review, person, title }) {
	return (
		<>
			<section className="bg-base-light py-16 px-4">
				{/* content */}
				<div className="max-w-prose mx-auto">
					{/* stars */}
					<div className="flex justify-center mb-6">
						{/* 5 stars using SVG, colored with base-dark */}
						{[...Array(5)].map((_, i) => (
							<svg
								key={i}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-7 h-7 text-yellow-500"
								aria-hidden="true"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
							</svg>
						))}
					</div>
					{/* quote */}
					<div className="flex items-start relative mb-4">
						<p className="text-3xl leading-none -mt-1 font-medium">"</p>
						<p className="font-semibold mx-2 text-justify">{review}</p>
						<p className="text-3xl leading-none self-end -mb-1 font-medium">
							"
						</p>
					</div>
					<p className="font-medium ml-4.5">{person}</p>
					<p className="font-medium text-neutral-500 ml-4.5">{title}</p>
				</div>
			</section>
		</>
	)
}
