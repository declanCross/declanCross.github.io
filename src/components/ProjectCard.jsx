import Link from "next/link"

export default function ProjectCard({ image, title, link }) {
	return (
		<div className="my-0 mb-4">
			<Link href={link} rel="noopener noreferrer" target="_blank">
				<img
					src={image.src}
					alt={title}
					width={image.width}
					height={image.height}
					className="mb-4 cursor-pointer hover:opacity-90 transition-opacity duration-200"
				/>
			</Link>
			<Link
				href={link}
				rel="noopener noreferrer"
				target="_blank"
				className="flex justify-center items-center px-4 py-2 border-4 border-primary w-fit my-2 cursor-pointer hover:shadow-md hover:shadow-neutral-700 transition-shadow duration-300"
			>
				<h2 className="text-primary font-bold text-lg">{title}</h2>
			</Link>
			<Link href={link} rel="noopener noreferrer" target="_blank">
				<p className="text-primary text-sm font-medium underline underline-offset-5 cursor-pointer hover:text-primary/80 transition-colors duration-300">
					{link}
				</p>
			</Link>
		</div>
	)
}
