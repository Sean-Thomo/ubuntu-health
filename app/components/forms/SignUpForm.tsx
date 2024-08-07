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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";
import SubmitButton from "../SubmitButton";

export default function SignUpForm() {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			surname: "",
			email: "",
			practiceName: "",
			practiceNumber: "",
			street: "",
			city: "",
			province: "",
			postalCode: "",
			country: "",
			password: "",
			phoneNumber: "",
		},
		// Validate form
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(20, "First name must be 20 characters or less.")
				.required("First name is required."),
			surname: Yup.string()
				.max(20, "Surname must be 20 characters or less.")
				.required("Surname is required."),
			email: Yup.string()
				.email("Invalid email address.")
				.required("E-Mail is required."),
			phoneNumber: Yup.string()
				.matches(/^[0-9]+$/, "Must be only digits")
				.max(10, "Must be exactly 10 digits")
				.min(10, "Must be exactly 10 digits")
				.required("Phone Number is required."),
			practiceName: Yup.string().required("Practice Name is required"),
			practiceNumber: Yup.string().required("Practice Number is required"),
			password: Yup.string().required("Password is required."),
		}),
		// Submit form
		onSubmit: async (values) => {
			try {
				const email = values.email;
				const password = values.password;
				const auth = getAuth();
				createUserWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						// Signed up
						const user = userCredential.user;
					})
					.catch((error) => {
						console.error(`Error adding document: ${error}.`);
						toast.error(`${error.message}`);
					});

				const docRef = await addDoc(collection(db, "SignUp"), {
					firstName: values.firstName,
					surname: values.surname,
					practiceName: values.practiceName,
					practiceNumber: values.practiceNumber,
					street: values.street,
					city: values.city,
					province: values.province,
					postalCode: values.postalCode,
					country: values.country,
					phoneNumber: values.phoneNumber,
					signedUpAt: new Date(),
				});
				toast.success("Thank you for signing up!");
				redirect("/dashboard");
			} catch (e) {
				console.error(`Error adding document: ${e}.`);
				toast.error(`Something went wrong, ${e}.`);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<div id="signup" className="pt-10 sm:flex">
				<div className="md:w-1/2 px-4">
					<h2 className="font-bold text-xl md:text-[30px] text-dark mb-4 py-6">
						Personal Information
					</h2>
					{/* First Name */}
					<CustomFormField
						name="firstName"
						label="First Name"
						type="text"
						placeholder="John"
						field={formik.getFieldProps("firstName")}
						meta={formik.getFieldMeta("firstName")}
						iconSrc="/assets/icons/user.svg"
						iconAlt="User Icon"
					/>
					{/* Surname */}
					<CustomFormField
						name="surname"
						label="Surname"
						type="text"
						placeholder="Doe"
						field={formik.getFieldProps("surname")}
						meta={formik.getFieldMeta("surname")}
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
						name="phoneNumber"
						label="Phone Number"
						type="text"
						placeholder=""
						field={formik.getFieldProps("phoneNumber")}
						meta={formik.getFieldMeta("phoneNumber")}
						iconSrc="/assets/icons/phone.svg"
						iconAlt="User Icon"
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

				<div className="md:w-1/2 flex flex-col pl-4">
					<h2 className="font-bold text-xl md:text-[30px] text-dark mb-4 py-6">
						Practice Details
					</h2>
					{/* Practice Name */}
					<CustomFormField
						name="practiceName"
						label="Practice Name"
						type="text"
						placeholder=""
						field={formik.getFieldProps("practiceName")}
						meta={formik.getFieldMeta("practiceName")}
						iconSrc="/assets/icons/company.svg"
						iconAlt="Email Icon"
					/>
					{/* Practice Number */}
					<CustomFormField
						name="practiceNumber"
						label="Practice Number"
						type="text"
						placeholder=""
						field={formik.getFieldProps("practiceNumber")}
						meta={formik.getFieldMeta("practiceNumber")}
						iconSrc="/assets/icons/number.svg"
						iconAlt="Email Icon"
					/>
					{/* Practice Address */}
					<h2 className="font-bold text-xl md:text-[30px] text-dark mb-4 py-6">
						Practice Address
					</h2>
					<CustomFormField
						name="street"
						label=""
						type="text"
						placeholder="Street"
						field={formik.getFieldProps("street")}
						meta={formik.getFieldMeta("street")}
						iconSrc="/assets/icons/street.svg"
						iconAlt="Address Icon"
					/>
					<CustomFormField
						name="city"
						label=""
						type="text"
						placeholder="City"
						field={formik.getFieldProps("city")}
						meta={formik.getFieldMeta("city")}
						iconSrc="/assets/icons/city.svg"
						iconAlt="City Icon"
					/>
					<CustomFormField
						name="province"
						label=""
						type="text"
						placeholder="Province"
						field={formik.getFieldProps("province")}
						meta={formik.getFieldMeta("province")}
						iconSrc="/assets/icons/location.svg"
						iconAlt="State Icon"
					/>
					<CustomFormField
						name="postalCode"
						label=""
						type="text"
						placeholder="Postal Code"
						field={formik.getFieldProps("postalCode")}
						meta={formik.getFieldMeta("postalCode")}
						iconSrc="/assets/icons/location.svg"
						iconAlt="Zip Icon"
					/>
					<CustomFormField
						name="country"
						label=""
						type="text"
						placeholder="Country"
						field={formik.getFieldProps("country")}
						meta={formik.getFieldMeta("country")}
						iconSrc="/assets/icons/location.svg"
						iconAlt="Country Icon"
					/>
				</div>
			</div>
			<div className="flex justify-center">
				<SubmitButton isLoading={false} children={"Sign Up"} />
			</div>

			<ToastContainer
				theme="light"
				position="top-right"
				hideProgressBar={false}
			/>
		</form>
	);
}
