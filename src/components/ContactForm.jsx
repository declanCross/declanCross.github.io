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
	const [errors, setErrors] = useState({})

	const validate = () => {
		const newErrors = {}

		// Name: required, at least 2 characters
		if (!form.name.trim()) {
			newErrors.name = "Name is required."
		} else if (form.name.trim().length < 2) {
			newErrors.name = "Name must be at least 2 characters."
		}

		// Email: required, valid email format
		if (!form.email.trim()) {
			newErrors.email = "Email is required."
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
			newErrors.email = "Please enter a valid email address."
		}

		// Phone: optional, but if present, must be only numbers, spaces, dashes, parentheses, or plus
		if (form.phone && /[a-zA-Z]/.test(form.phone)) {
			newErrors.phone = "Phone number can only contain numbers and symbols."
		}

		// Message: required, at least 10 characters
		if (!form.message.trim()) {
			newErrors.message = "Message is required."
		} else if (form.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters."
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
		setErrors({ ...errors, [e.target.name]: undefined }) // Clear error on change
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!validate()) return
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
				noValidate
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
					{errors.name && (
						<p className="text-red-500 text-sm -mt-3">{errors.name}</p>
					)}
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="bg-primary p-3"
						value={form.email}
						onChange={handleChange}
						required
					/>
					{errors.email && (
						<p className="text-red-500 text-sm -mt-3">{errors.email}</p>
					)}
					<input
						type="tel"
						name="phone"
						placeholder="Phone (optional)"
						className="bg-primary p-3"
						value={form.phone}
						onChange={handleChange}
					/>
					{errors.phone && (
						<p className="text-red-500 text-sm -mt-3">{errors.phone}</p>
					)}
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
				{errors.message && (
					<p className="text-red-500 text-sm mt-0">{errors.message}</p>
				)}
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
						<span className="flex items-center gap-2">
							<svg
								className="animate-spin h-5 w-5 text-primary"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
								></path>
							</svg>
							<h2 className="text-primary font-bold text-xl">Sending...</h2>
						</span>
					) : (
						<h2 className="text-primary font-bold text-xl">Submit</h2>
					)}
				</button>
				{status === "sent" && (
					<p className="text-green-400 mt-2 text-xl font-bold text-center border-4 border-green-400 px-4 py-2 w-fit mx-auto">
						Message sent!
					</p>
				)}
				{status === "error" && (
					<p className="text-red-500 mt-2 text-xl font-bold text-center border-4 border-red-500 px-4 py-2 w-fit mx-auto">
						Something went wrong. Please try again.
					</p>
				)}
			</form>{" "}
		</>
	)
}
