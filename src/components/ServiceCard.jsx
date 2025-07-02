import Image from "next/image"

export default function ServiceCard({
	title,
	image,
	description,
	text1,
	text2,
}) {
	return (
		<div className="lg:w-1/3 px-4 pb-6 border-2 border-dashed border-neutral-600 my-4 lg:my-6">
			<div className="flex items-center">
				<h3 className="text-2xl font-bold mt-7">{title}</h3>
				<Image
					src={image.src}
					alt={title}
					width={image.width}
					height={image.height}
					className="ml-4 w-13 h-auto -mb-5"
					sizes="(max-width: 1023px) 20vw, 5vw"
				/>
			</div>
			<h4 className="font-bold text-xl my-3">{description}</h4>
			<p className="font-medium my-2">{text1}</p>
			<p className="font-medium">{text2}</p>
		</div>
	)
}
