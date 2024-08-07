import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import Navbar from "../components/Navbar";

export default function Page() {
	return (
		<div>
			{/* Navbar */}
			<Navbar />

			<section className="text-14-regular flex justify-center pt-5">
				<div className="space-y-4">
					<h1 className="header">Sign Up ✍️</h1>
					<p className="text-dark font-medium">
						Set an account for your practice.
					</p>
				</div>
			</section>

			{/* Signup form */}
			<section className="flex justify-center">
				<SignUpForm />
			</section>

			<section className="text-14-regular flex justify-center">
				<p className="m-16 text-dark-600 xl:text-left">© 2024 Ubuntu Health</p>
			</section>
		</div>
	);
}
