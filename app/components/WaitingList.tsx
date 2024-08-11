"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../api/firebase";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomFormField from "./CustomFormField";
import SubmitButton from "./SubmitButton";

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
					<SubmitButton isLoading={false} label="Join!" />
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
