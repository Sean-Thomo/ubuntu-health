"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../api/firebase";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomFormField from "../CustomFormField";

function PatientForm() {
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
				const docRef = await addDoc(collection(db, "PatientForm"), {
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
		<form onSubmit={formik.handleSubmit} className="space-y-6 flex-1">
			<div id="waitlist" className="pt-20 md:flex">
				<div className="md:w-3/5 flex flex-col">
					<section className="mb-12 space-y-4">
						<h1 className="header">Hi There👋</h1>
						<p className="text-dark">Schedule your first appointment</p>
					</section>
					{/* Name */}
					<CustomFormField
						name="name"
						label="Name"
						type="text"
						placeholder="John Doe"
						field={formik.getFieldProps("name")}
						meta={formik.getFieldMeta("name")}
						iconSrc="/assets/icons/user.svg"
						iconAlt="User Icon"
					/>
					{/* Email */}
					<CustomFormField
						name="email"
						label="Email"
						type="email"
						placeholder="johndoe@email.com"
						field={formik.getFieldProps("email")}
						meta={formik.getFieldMeta("email")}
						iconSrc="/assets/icons/email.svg"
						iconAlt="Email Icon"
					/>
					{/* Phone Number */}
					<CustomFormField
						name="phone"
						label="Phone Number"
						type="number"
						placeholder="0112223333"
						field={formik.getFieldProps("number")}
						meta={formik.getFieldMeta("number")}
						iconSrc="/assets/icons/email.svg"
						iconAlt={""}
					/>
					<button
						type="submit"
						className="text-primary-50 bg-primary-600 hover:bg-primary-700
                    focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl
                    text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                    dark:focus:ring-blue-800 flex flex-col items-center justify-center"
					>
						Get Started
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

export default PatientForm;
