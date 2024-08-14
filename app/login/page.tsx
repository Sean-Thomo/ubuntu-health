import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/forms/LoginForm";

export default function Page() {
	return (
		<div>
			{/* Navbar */}
			<Navbar />
			<div className="md:h-[85vh] flex items-center justify-center">
				<div className="max-w-6xl text-center grid gap-8">
					<section className="text-14-regular flex justify-center pt-5">
						<div className="space-y-4">
							<h1 className="header">Login ✍️</h1>
						</div>
					</section>

					{/* Signup form */}
					<section className="flex justify-center">
						<LoginForm />
					</section>

					<Footer />
				</div>
			</div>
		</div>
	);
}
