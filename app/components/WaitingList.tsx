"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../api/firebase";

function WaitingList() {
	const [submissionError, setSubmissionError] = useState<string | null>(null);

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
				.required("E-Mail is required"),
		}),
		// Submit form
		onSubmit: async (values) => {
			try {
				const docRef = await addDoc(collection(db, "WaitingList"), {
					name: values.name,
					email: values.email,
				});
				console.log(`Document written with ID: ${docRef.id}`);
				alert("Thank you for joining the waiting list!");
				formik.resetForm();
			} catch (e) {
				console.error(`Error adding document: ${e}`);
				setSubmissionError("Something went wrong. Please try again later.");
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className="rounded-lg pb-20">
			<div id="waitlist" className="pt-20">
				<div className="px-4">
					<div className="text-center mx-auto lg:mb-10 max-w-[720px]">
						<h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 py-6">
							Join Our Waiting List
						</h2>
						<p className="text-base text-body-color">
							Be the first to know when our EHR SAAS platform launches! Sign up
							below to receive exclusive updates and early access.
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center">
					{/* Name */}
					<div className="mt-6">
						<div className="pb-4">
							<label htmlFor="name" className="m-9 font-semibold text-md pb-2">
								Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								value={formik.values.name}
								onChange={formik.handleChange}
								placeholder="Enter your name"
							/>
						</div>
					</div>
					{/* Email */}
					<div className="mt-6">
						<div className="pb-4">
							<label htmlFor="email" className="m-9 font-semibold text-md pb-2">
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
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
