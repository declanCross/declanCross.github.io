import Footer from "@/components/Footer"

export default function Page() {
	return (
		<>
			<section className="mt-8 mb-12 w-11/12 max-w-prose lg:max-w-7xl mx-auto ">
				<div className="max-w-prose mx-auto">
					<h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
					<p className="mb-4">
						Welcome to Cross Development Services. Please read these terms and
						conditions carefully before using my website or submitting a contact
						form.
					</p>
					<h2 className="text-2xl font-semibold mt-8 mb-2">
						Contact Form & Communication
					</h2>
					<p className="mb-2">
						By submitting your information through the contact form on this
						website, you consent to being contacted by Declan Cross (Cross
						Development Services) using the email address and/or phone number
						you provide. This contact may be for the purpose of discussing your
						project, answering your questions, providing quotes, or following up
						on your inquiry.
					</p>
					<p className="mb-4">
						Your information will be used solely for communication related to
						your request and{" "}
						<strong>will not be shared or sold to third parties.</strong>
					</p>
					<h2 className="text-2xl font-semibold mt-8 mb-2">
						Project Discussions & Quotes
					</h2>
					<p className="mb-4">
						All project discussions, consultations, and quotes are provided free
						of charge and without obligation. Any work will only begin after
						mutual agreement on project scope, timeline, and pricing.
					</p>
					<h2 className="text-2xl font-semibold mt-8 mb-2">
						Intellectual Property
					</h2>
					<p className="mb-4">
						All content, designs, and code created by Cross Development Services
						remain the intellectual property of Declan Cross until full payment
						for the project is received, unless otherwise agreed in writing.
					</p>
					<h2 className="text-2xl font-semibold mt-8 mb-2">Privacy</h2>
					<p className="mb-4">
						Your privacy is important. Any personal information you provide will
						be handled with care and used only for the purposes described above.{" "}
						<strong>
							We will not sell, trade, or otherwise transfer your personal
							information to outside parties.
						</strong>
					</p>
					<h2 className="text-2xl font-semibold mt-8 mb-2">Changes to Terms</h2>
					<p className="mb-4">
						Cross Development Services reserves the right to update these terms
						and conditions at any time. Any changes will be posted on this page.
					</p>
					<p className="mt-8">
						If you have any questions about these terms, please contact me using
						the form on the main page.
					</p>
				</div>
			</section>
			<Footer />
		</>
	)
}
