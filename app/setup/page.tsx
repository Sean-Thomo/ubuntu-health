import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Page() {
	return (
		<div>
			{/* Navbar */}
			<Navbar />
			<div className="md:h-[85vh] flex items-center justify-center mt-12">
				<div className="max-w-6xl text-center grid gap-8">
					<section className="text-14-regular flex justify-center pt-5">
						<div className="space-y-4">
							<h1 className="header">Sign Up ✍️</h1>
							<p className="text-dark font-medium">
								Set an account for your practice.
							</p>
						</div>
					</section>

					{/* Signup form */}
					<section className="flex justify-center mb-4">
						<SignUpForm />
					</section>

					<div className="flex justify-center items-center">
						<p className="mx-2">Already have an account?</p>
						<Link
							href="/login"
							className="text-primary-500 cursor-pointer hover:underline"
						>
							Login
						</Link>
					</div>

					<Footer />
				</div>
			</div>
		</div>
	);
}
