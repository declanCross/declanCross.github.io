import nodemailer from "nodemailer"

export async function POST(req) {
	try {
		const { name, email, phone, message } = await req.json()

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
			from: `"${name}" <${email}>`,
			to: process.env.CONTACT_EMAIL, // your email address
			subject: "New Contact Form Submission",
			text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
		})

		return new Response(JSON.stringify({ success: true }), { status: 200 })
	} catch (error) {
		return new Response(
			JSON.stringify({ success: false, error: error.message }),
			{ status: 500 }
		)
	}
}
