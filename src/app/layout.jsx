import { Montserrat } from "next/font/google"
import "./globals.css"

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
			<body className={`${montserrat.variable} antialiased`}>{children}</body>
		</html>
	)
}
