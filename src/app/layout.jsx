import { Montserrat } from "next/font/google"
import "./globals.css"
import Nav from "@/components/Nav"

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	display: "swap",
})

export const metadata = {
	title: "Cross Development Services",
	description: "Design, Build, Optimize your website.",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} antialiased`}>
				<Nav />
				<div className="flex justify-between">
					{/* body */}
					<div>{children}</div>
					{/* side colors swoop */}
					<div className="flex w-[8px] h-screen">
						<div className="bg-secondary-green h-full w-[4px]" />
						<div className="bg-secondary-blue h-full w-[4px]" />
					</div>
				</div>
			</body>
		</html>
	)
}
