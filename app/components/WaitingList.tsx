"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../api/firebase";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WaitingList() {
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
				.email("Invalid email address.")
				.required("E-Mail is required."),
		}),
		// Submit form
		onSubmit: async (values) => {
			try {
				const docRef = await addDoc(collection(db, "WaitingList"), {
					name: values.name,
					email: values.email,
					signedUpAt: new Date(),
				});
				toast.success("Thank you for joining the waiting list!");
				formik.resetForm();
			} catch (e) {
				console.error(`Error adding document: ${e}.`);
				toast.error(`Something went wrong, ${e}.`);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className="rounded-lg pb-20">
			<div id="waitlist" className="pt-20 md:flex">
				<div className="px-4 md:w-2/5">
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
				<div className="md:w-3/5 flex flex-col items-center justify-center">
					{/* Name */}
					<div className="mt-6">
						<label htmlFor="name" className="font-semibold text-md pb-2">
							Name
						</label>
						<div
							className="mt-2 pb-4 w-[18rem] md:w-[20rem] md:flex flex-col items-center
                            justify-center"
						>
							<input
								type="text"
								name="name"
								id="name"
								value={formik.values.name}
								onChange={formik.handleChange}
								placeholder="John Doe"
								className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500
                                focus:border-primary-500 block flex-1 min-w-0 w-full text-sm border-gray-300
                                p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                dark:focus:ring-blue-500 dark:focus:border-primary-500"
							/>
						</div>
					</div>
					{/* Email */}
					<div className="mt-6 mb-6">
						<label htmlFor="email" className="font-semibold text-md pb-2">
							Email
						</label>
						<div className="mt-2 pb-4 w-[18rem] md:w-[20rem] md:flex flex-col items-center justify-center">
							<input
								type="email"
								name="email"
								id="email"
								value={formik.values.email}
								onChange={formik.handleChange}
								placeholder="john.doe@email.com"
								className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500
                                focus:border-primary-500 block flex-1 min-w-0 w-full text-sm border-gray-300
                                p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                dark:focus:ring-blue-500 dark:focus:border-primary-500"
							/>
						</div>
					</div>
					<button
						type="submit"
						className="text-primary-50 bg-primary-600 hover:bg-primary-700
                        focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl
                        text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                        dark:focus:ring-blue-800 flex flex-col items-center justify-center"
					>
						Join Waitlist
					</button>
				</div>
			</div>
			<ToastContainer
				theme="light"
				position="top-right"
				hideProgressBar={false}
			/>
		</form>
	);
}
