"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function WaitingList() {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
		},
		// Validate form
		validationSchema: Yup.object({
			name: Yup.string()
				.max(20, "Name must be 20 characters or less.")
				.required("Name is required."),
			email: Yup.string()
				.email("Invalid email address")
				.required("EMail is required"),
		}),
		// Submit form
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className="rounded-lg pb-20">
			<div id="waitlist">
				<div className="w-full px-4">
					<div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[720px]">
						<h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 py-6">
							Join Our Waiting List
						</h2>
						<p className="text-base text-body-color">
							Be the first to know when our EHR SAAS platform launches! Sign up
							below to receive exclusive updates and early access.
						</p>
					</div>
				</div>
				<div>
					{/* Name */}
					<div className="mt-6">
						<div className="pb-4">
							<label
								htmlFor="name"
								className="block font-semibold text-sm pb-2"
							>
								Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								className="w-full"
								value={formik.values.name}
								onChange={formik.handleChange}
								placeholder="Enter your name"
							/>
						</div>
					</div>
					{/* Email */}
					<div className="mt-6">
						<div className="pb-4">
							<label
								htmlFor="email"
								className="block font-semibold text-sm pb-2"
							>
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="w-full"
								value={formik.values.email}
								onChange={formik.handleChange}
								placeholder="Enter your email"
							/>
						</div>
					</div>
					<button
						type="submit"
						className="text-primary-50 bg-primary-600 hover:bg-primary-700
                    focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full
                    text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                    dark:focus:ring-blue-800"
					>
						Join Waitlist
					</button>
				</div>
			</div>
		</form>
	);
}

export default WaitingList;
