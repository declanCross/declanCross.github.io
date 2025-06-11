export default function ProjectCard({ image, title, link }) {
	return (
		<div className="my-0">
			<img
				src={image.src}
				alt={title}
				width={image.width}
				height={image.height}
				className="mb-4"
			/>
			<div className="flex justify-center items-center px-4 py-2 border-4 border-primary w-fit my-2 shadow-md">
				<h2 className="text-primary font-bold text-xl">{title}</h2>
			</div>
			<p className="text-primary font-medium underline underline-offset-5">
				{link}
			</p>
		</div>
	)
}
