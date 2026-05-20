import nodemailer from "nodemailer"

export async function POST(req) {
	try {
		const body = await req.json()
		const { name, email, phone, message } = body

		// Server-side validation
		if (!name || typeof name !== "string" || name.trim().length < 2) {
			return new Response(
				JSON.stringify({ success: false, error: "Invalid name." }),
				{ status: 400 },
			)
		}
		if (
			!email ||
			typeof email !== "string" ||
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
		) {
			return new Response(
				JSON.stringify({ success: false, error: "Invalid email." }),
				{ status: 400 },
			)
		}
		if (!message || typeof message !== "string" || message.trim().length < 10) {
			return new Response(
				JSON.stringify({ success: false, error: "Invalid message." }),
				{ status: 400 },
			)
		}

		const safeName = name.trim().replace(/[^\w\s'-]/g, "")
		const safeEmail = email.trim()
		const safePhone = phone ? String(phone).trim().slice(0, 30) : ""
		const safeMessage = message.trim()

		// Configure your SMTP transporter
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		})

		await transporter.sendMail({
			from: `"Cross Development Services" <${process.env.SMTP_USER}>`,
			replyTo: `"${safeName}" <${safeEmail}>`,
			to: process.env.CONTACT_EMAIL,
			subject: "New Contact Form Submission",
			text: `
Name: ${safeName}
Email: ${safeEmail}
Phone: ${safePhone}
Message: ${safeMessage}
      `,
		})

		return new Response(JSON.stringify({ success: true }), { status: 200 })
	} catch (error) {
		return new Response(
			JSON.stringify({ success: false, error: "Failed to send message." }),
			{ status: 500 },
		)
	}
}
