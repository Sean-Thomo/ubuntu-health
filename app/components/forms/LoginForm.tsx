"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomFormField from "../CustomFormField";
import { useRouter } from "next/navigation";
import SubmitButton from "../SubmitButton";

const initialValues = {
	email: "",
	password: "",
};

const validationSchema = Yup.object({
	email: Yup.string()
		.email("Invalid email address.")
		.required("E-Mail is required."),
	password: Yup.string().required("Password is required."),
});

export default function LoginForm() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values) => {
			setIsLoading(true);

			try {
				const response = await fetch("/api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				});

				const data = await response.json();

				if (response.ok) {
					toast.success(data.message);
					router.push(`/${values.practiceNumber}/dashboard`);
				} else {
					toast.error(data.message || "Failed to sign up.");
				}
			} catch (error: any) {
				console.error("Error:", error);
				toast.error(error.message);
			} finally {
				setIsLoading(false);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<div id="signup" className="pt-10 sm:flex">
				<div className="md:w-1/2 px-4">
					<h2 className="font-bold text-xl md:text-[30px] text-dark mb-4 py-6"></h2>
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

					{/* Password */}
					<CustomFormField
						name="password"
						label="Password"
						type="password"
						placeholder=""
						field={formik.getFieldProps("password")}
						meta={formik.getFieldMeta("password")}
						iconSrc="/assets/icons/lock.svg"
						iconAlt="User Icon"
					/>
				</div>
			</div>
			<div className="flex justify-center">
				<SubmitButton isLoading={isLoading} label="Login" />
			</div>

			<ToastContainer
				theme="dark"
				position="top-right"
				hideProgressBar={false}
			/>
		</form>
	);
}
