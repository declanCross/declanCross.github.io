export default function Review({ review, person, title }) {
	return (
		<>
			<section className="bg-base-light py-16 px-4">
				{/* content */}
				<div className="max-w-prose mx-auto">
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
