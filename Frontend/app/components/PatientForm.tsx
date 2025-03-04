import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PatientForm() {
	const [sex, setSex] = useState("");
	const [currentMeds, setCurrentMeds] = useState("");

	const formik = useFormik({
		initialValues: {
			fistName: "",
			lastName: "",
			idNumber: "",
			gender: "",
			email: "",
			phone: "",
			street: "",
			streetTwo: "",
			city: "",
			province: "",
			postalCode: "",
			allergies: "",
			currentMedication: "",
			emergencyContactFirstName: "",
			emergencyContactLastName: "",
			emergencyContactPhone: "",
			emergencyContactRelationship: "",
			medicalAidName: "",
			membershipNumber: "",
			createdAt: new Date().toString,
			updatedAt: new Date().toString,
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(20, "Name must be 20 characters or less.")
				.required("Name is required."),
			email: Yup.string()
				.email("Invalid email address.")
				.required("E-Mail is required."),
		}),
		onSubmit: async (values) => {
			try {
				const response = await fetch("http://localhost:5290/Patients", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				});

				if (!response.ok) {
					throw new Error("Failed to submit form");
				}

				toast.success("Form submitted successfully!");
				formik.resetForm();
			} catch (e) {
				console.error(`Error submitting form: ${e}.`);
				toast.error(`Something went wrong, ${e}.`);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<div id="add-patient-form" className="pt-10">
				{/* First Half */}
				<div className="flex flex-col justify-center">
					{/* Name Name */}
					<h1 className="font-semibold text-lg pb-2">Patient Name</h1>
					<div className="grid md:grid-cols-2 md:gap-6 mb-4">
						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="text"
									name="fistName"
									id="fistName"
									value={formik.values.fistName}
									onChange={formik.handleChange}
									placeholder="John"
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="fistName" className="text-sm">
								First Name
							</label>
						</div>
						{/* Last Name */}
						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="text"
									name="lastName"
									id="lastName"
									value={formik.values.lastName}
									onChange={formik.handleChange}
									placeholder="Doe"
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="lastName" className="text-sm">
								Last Name
							</label>
						</div>
						<div>
							<div className="w-[18rem] md:w-[20rem]">
								<input
									type="text"
									name="idNumb"
									id="idNumb"
									value={formik.values.idNumber}
									onChange={formik.handleChange}
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="idNumb" className="text-sm">
								ID Number
							</label>
						</div>
						<div>
							<div className="w-[18rem] md:w-[20rem]">
								<div>
									<select
										className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
										value={sex}
										onChange={(e) => {
											setSex(e.target.value);
										}}
									>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</select>
								</div>
							</div>
							<label htmlFor="gender" className="text-sm">
								Sex
							</label>
						</div>
					</div>

					<h1 className="font-semibold text-lg pb-2">Contact Details</h1>
					<div className="grid md:grid-cols-2 md:gap-6 mb-4">
						{/* Phone */}
						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="text"
									name="phone"
									id="phone"
									value={formik.values.phone}
									onChange={formik.handleChange}
									placeholder="000 000 0000"
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="phone" className="text-sm">
								Phone Number
							</label>
						</div>

						{/* Email */}
						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="email"
									name="email"
									id="email"
									value={formik.values.email}
									onChange={formik.handleChange}
									placeholder="johndoe@email.com"
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="email" className="text-sm">
								Email
							</label>
						</div>
					</div>

					{/* Address */}
					<h1 className="font-semibold text-lg pb-2">Address</h1>
					<div className="grid md:grid-cols-2 md:gap-6 mb-4">
						{/* Street Address */}
						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="text"
									name="street"
									id="street"
									value={formik.values.street}
									onChange={formik.handleChange}
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="street" className="text-sm">
								Street Address
							</label>
						</div>

						{/* Street 2 */}
						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="text"
									name="streetTwo"
									id="streetTwo"
									value={formik.values.streetTwo}
									onChange={formik.handleChange}
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="streetTwo" className="text-sm">
								Street Address Line 2
							</label>
						</div>
					</div>

					<div className="grid md:grid-cols-2 md:gap-6 mb-4">
						{/* City */}
						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="text"
									name="city"
									id="city"
									value={formik.values.city}
									onChange={formik.handleChange}
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="city" className="text-sm">
								City
							</label>
						</div>

						{/* Province */}
						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="text"
									name="province"
									id="province"
									value={formik.values.province}
									onChange={formik.handleChange}
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="province" className="text-sm">
								Province
							</label>
						</div>
					</div>

					<h1 className="font-semibold text-lg pb-2">Emergency Contact</h1>
					<div className="grid md:grid-cols-2 md:gap-6 mb-4">
						{/* First Name */}
						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="text"
									name="emergencyContactFirstName"
									id="emergencyContactFirstName"
									value={formik.values.emergencyContactFirstName}
									onChange={formik.handleChange}
									placeholder="Jane"
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="emergencyContactFirstName" className="text-sm">
								First Name
							</label>
						</div>

						{/* last Name */}
						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="email"
									name="emergencyContactLastName"
									id="emergencyContactLastName"
									value={formik.values.emergencyContactLastName}
									onChange={formik.handleChange}
									placeholder="Doe"
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="emergencyContactLastName" className="text-sm">
								Last Name
							</label>
						</div>

						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="text"
									name="emergencyContactRelationship"
									id="emergencyContactRelationship"
									value={formik.values.emergencyContactRelationship}
									onChange={formik.handleChange}
									placeholder="Mother"
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="emergencyContactRelationship" className="text-sm">
								Relationship
							</label>
						</div>

						{/* Street 2 */}
						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="text"
									name="emergencyContactPhone"
									id="emergencyContactPhone"
									value={formik.values.emergencyContactPhone}
									onChange={formik.handleChange}
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="emergencyContactPhone" className="text-sm">
								Contact Number
							</label>
						</div>
					</div>

					<h1 className="font-semibold text-lg pb-2">Medical Aid</h1>
					<div className="grid md:grid-cols-2 md:gap-6 mb-4">
						{/* Medical Aid Name */}
						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="text"
									name="medicalAidName"
									id="medicalAidName"
									value={formik.values.medicalAidName}
									onChange={formik.handleChange}
									placeholder="Discovery"
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="medicalAidName" className="text-sm">
								Medical Aid Name
							</label>
						</div>

						{/* Membersjip Number */}
						<div>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<input
									type="text"
									name="membershipNumber"
									id="membershipNumber"
									value={formik.values.membershipNumber}
									onChange={formik.handleChange}
									placeholder="123456789"
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
							<label htmlFor="membershipNumber" className="text-sm">
								Membership Number
							</label>
						</div>
					</div>

					<h1 className="font-semibold text-lg pb-2">Additional Information</h1>
					<div className="grid md:grid-cols-2 md:gap-6 mb-4">
						{/* Allergies */}
						<div>
							<label htmlFor="allergies" className="text-sm">
								Allergies
							</label>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<textarea
									name="allergies"
									id="allergies"
									value={formik.values.allergies}
									onChange={formik.handleChange}
									className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
								/>
							</div>
						</div>

						{/* Medication */}
						<div>
							<label htmlFor="currentMedication" className="text-sm">
								Taking any medication?
							</label>
							<div className="mt-2 w-[18rem] md:w-[20rem]">
								<div>
									<select
										className="rounded-sm border p-2.5 text-sm w-full
                                        focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                                        dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
										value={currentMeds}
										onChange={(e) => {
											setCurrentMeds(e.target.value);
										}}
									>
										<option value="Yes">Yes</option>
										<option value="No">No</option>
									</select>
								</div>
							</div>
						</div>
					</div>

					{/* End */}
				</div>

				{/* Submit button */}
				<div className="flex justify-center mt-8">
					<button
						type="submit"
						className="text-primary-50 bg-primary-600 hover:bg-primary-700
                        focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl
                        text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                        dark:focus:ring-blue-800 flex flex-col items-center justify-center"
					>
						Submit
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
