"use client"

import { useState } from "react"

export default function ContactForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	})
	const [status, setStatus] = useState(null)

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setStatus("sending")
		const res = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(form),
		})
		if (res.ok) {
			setStatus("sent")
			setForm({ name: "", email: "", phone: "", message: "" })
		} else {
			setStatus("error")
		}
	}

	return (
		<>
			<div className="flex justify-center items-center px-4 py-2 bg-primary w-fit my-4 lg:mx-auto">
				<h2 className="text-secondary-blue font-bold text-xl">CONTACT</h2>
			</div>
			<p className="text-xl font-bold text-primary">
				Tell me about your website idea and let's make your vision a reality.
			</p>
			<form
				className="mt-6 text-neutral-600 font-medium"
				onSubmit={handleSubmit}
			>
				<div className="grid grid-cols-1 gap-4">
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="bg-primary p-3"
						value={form.name}
						onChange={handleChange}
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="bg-primary p-3"
						value={form.email}
						onChange={handleChange}
						required
					/>
					<input
						type="tel"
						name="phone"
						placeholder="Phone (optional)"
						className="bg-primary p-3"
						value={form.phone}
						onChange={handleChange}
					/>
				</div>
				<textarea
					name="message"
					placeholder="Tell me about your idea."
					className="bg-primary p-3 mt-4 w-full"
					rows={10}
					value={form.message}
					onChange={handleChange}
					required
				></textarea>
				<button
					className={`flex justify-center items-center px-4 py-2 border-4 border-primary w-full my-4 shadow-md mx-auto ${
						status === "sending"
							? ""
							: "cursor-pointer hover:bg-blue-600 transition-colors duration-300"
					}`}
					type="submit"
					disabled={status === "sending"}
				>
					{status === "sending" ? (
						<h2 className="text-primary font-bold text-xl">Sending...</h2>
					) : (
						<h2 className="text-primary font-bold text-xl">Submit</h2>
					)}
				</button>
				{/* {status === "sending" && (
					<p className="text-primary mt-2 text-lg text-center">Sending...</p>
				)} */}
				{status === "sent" && (
					<p className="text-green-400 mt-2 text-xl font-bold text-center border-4 border-green-400 px-4 py-2 w-fit mx-auto">
						Message sent!
					</p>
				)}
				{status === "error" && (
					<p className="text-red-400 mt-2 text-xl font-bold text-center border-4 border-red-400 px-4 py-2 w-fit mx-auto">
						Something went wrong. Please try again.
					</p>
				)}
			</form>
		</>
	)
}
