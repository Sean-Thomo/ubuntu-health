"use client";
import React, { use } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
	const { plan } = useParams();

	useEffect(() => {
		console.log("Plan selected:", plan);
	}, [plan]);

	return (
		<>
			<div className="flex min-h-screen flex-col items-center justify-center px-2 sm:px-24">
				{/* Navbar */}
				<Navbar />

				{/* Signup Form */}
				<div className="flex flex-col items-center justify-center w-full max-w-md mx-auto mt-10">
					<h1 className="text-3xl font-bold mb-6">Sign Up for {plan} Plan</h1>
					<form className="w-full">
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="email"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                leading-tight focus:outline-none focus:shadow-outline"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="password"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                leading-tight focus:outline-none focus:shadow-outline"
								required
							/>
						</div>
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
              focus:outline-none focus:shadow-outline w-full"
						>
							Create Account
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
