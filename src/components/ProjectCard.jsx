import Image from "next/image"
import Link from "next/link"

export default function ProjectCard({ image, title, link }) {
	return (
		<div className="my-0 mb-4">
			<Link href={link} rel="noopener noreferrer" target="_blank">
				<Image
					src={image.src}
					alt={title}
					width={image.width}
					height={image.height}
					className="mb-4 cursor-pointer lg:opacity-90 hover:opacity-100 transition-opacity duration-300"
					sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
				/>
			</Link>
			<Link
				href={link}
				rel="noopener noreferrer"
				target="_blank"
				className="group flex justify-center items-center px-4 py-2 bg-primary border-4 border-primary w-fit my-2 cursor-pointer shadow-md hover:bg-base-dark transition-colors duration-300"
			>
				<h2 className="text-base-dark font-bold text-lg group-hover:text-primary transition-colors duration-300">
					{title}
				</h2>
			</Link>
			<Link href={link} rel="noopener noreferrer" target="_blank">
				<p className="text-base-dark text-sm font-medium underline underline-offset-5 cursor-pointer hover:text-base-dark/70 transition-colors duration-300">
					{link}
				</p>
			</Link>
		</div>
	)
}
