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
			firstName: "",
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
			createdAt: new Date().toString(),
			updatedAt: new Date().toString(),
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(20, "Name must be 20 characters or less.")
				.required("First Name is required."),
			lastName: Yup.string()
				.max(20, "Name must be 20 characters or less.")
				.required("Last Name is required."),
			email: Yup.string()
				.email("Invalid email address.")
				.required("E-Mail is required."),
		}),
		onSubmit: async (values) => {
			try {
				const response = await fetch("http://localhost:5290/api/Patients", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				});

				if (!response.ok) {
					throw new Error("Failed to register patient");
				}

				toast.success("Patient Registered!");
				formik.resetForm();
			} catch (err) {
				console.error(`Error submitting form: ${err}.`);
				toast.error(`${err}.`);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className="space-y-4">
			<h2 className="text-2xl font-bold mb-4">Patient Registration</h2>
			<div className="grid md:grid-cols-2 md:gap-4 mb-4">
				<div>
					<label
						htmlFor="firstName"
						className="block text-sm font-medium text-gray-700"
					>
						First Name
					</label>

					<input
						type="text"
						name="firstName"
						id="firstName"
						value={formik.values.firstName}
						onChange={formik.handleChange}
						placeholder="John"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>
				{/* Last Name */}
				<div>
					<label
						htmlFor="lastName"
						className="block text-sm font-medium text-gray-700"
					>
						Last Name
					</label>
					<input
						type="text"
						name="lastName"
						id="lastName"
						value={formik.values.lastName}
						onChange={formik.handleChange}
						placeholder="Doe"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>

				<div>
					<label
						htmlFor="idNumber"
						className="block text-sm font-medium text-gray-700"
					>
						ID Number
					</label>
					<input
						type="text"
						name="idNumber"
						id="idNumber"
						value={formik.values.idNumber}
						onChange={formik.handleChange}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>

				<div>
					<label
						htmlFor="gender"
						className="block text-sm font-medium text-gray-700"
					>
						Sex
					</label>
					<select
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						value={sex}
						onChange={(e) => {
							setSex(e.target.value);
							formik.setFieldValue("gender", e.target.value);
						}}
					>
						<option value="" disabled>
							Select Sex
						</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>

				{/* Phone */}
				<div>
					<label
						htmlFor="phone"
						className="block text-sm font-medium text-gray-700"
					>
						Phone Number
					</label>

					<input
						type="text"
						name="phone"
						id="phone"
						value={formik.values.phone}
						onChange={formik.handleChange}
						placeholder="000 000 0000"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>

				{/* Email */}
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>

					<input
						type="email"
						name="email"
						id="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						placeholder="johndoe@email.com"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>
			</div>
			{/* Address */}
			<h1 className="font-semibold text-lg">Address</h1>
			<div className="grid md:grid-cols-2 md:gap-6 mb-4">
				<div>
					<label
						htmlFor="street"
						className="block text-sm font-medium text-gray-700"
					>
						Street Address
					</label>

					<input
						type="text"
						name="street"
						id="street"
						value={formik.values.street}
						onChange={formik.handleChange}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>

				<div>
					<label
						htmlFor="streetTwo"
						className="block text-sm font-medium text-gray-700"
					>
						Street Address Line 2
					</label>

					<input
						type="text"
						name="streetTwo"
						id="streetTwo"
						value={formik.values.streetTwo}
						onChange={formik.handleChange}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>
			</div>

			<div className="grid md:grid-cols-2 md:gap-6 mb-4">
				<div>
					<label
						htmlFor="city"
						className="block text-sm font-medium text-gray-700"
					>
						City
					</label>

					<input
						type="text"
						name="city"
						id="city"
						value={formik.values.city}
						onChange={formik.handleChange}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>

				<div>
					<label
						htmlFor="province"
						className="block text-sm font-medium text-gray-700"
					>
						Province
					</label>

					<input
						type="text"
						name="province"
						id="province"
						value={formik.values.province}
						onChange={formik.handleChange}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>
			</div>

			<h1 className="font-semibold text-lg">Emergency Contact</h1>
			<div className="grid md:grid-cols-2 md:gap-6 mb-4">
				<div>
					<label
						htmlFor="emergencyContactFirstName"
						className="block text-sm font-medium text-gray-700"
					>
						First Name
					</label>

					<input
						type="text"
						name="emergencyContactFirstName"
						id="emergencyContactFirstName"
						value={formik.values.emergencyContactFirstName}
						onChange={formik.handleChange}
						placeholder="Jane"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>

				<div>
					<label
						htmlFor="emergencyContactLastName"
						className="block text-sm font-medium text-gray-700"
					>
						Last Name
					</label>

					<input
						type="email"
						name="emergencyContactLastName"
						id="emergencyContactLastName"
						value={formik.values.emergencyContactLastName}
						onChange={formik.handleChange}
						placeholder="Doe"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>

				<div>
					<label
						htmlFor="emergencyContactRelationship"
						className="block text-sm font-medium text-gray-700"
					>
						Relationship
					</label>

					<input
						type="text"
						name="emergencyContactRelationship"
						id="emergencyContactRelationship"
						value={formik.values.emergencyContactRelationship}
						onChange={formik.handleChange}
						placeholder="Mother"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>

				<div>
					<label
						htmlFor="emergencyContactPhone"
						className="block text-sm font-medium text-gray-700"
					>
						Contact Number
					</label>

					<input
						type="text"
						name="emergencyContactPhone"
						id="emergencyContactPhone"
						value={formik.values.emergencyContactPhone}
						onChange={formik.handleChange}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>
			</div>

			<h1 className="font-semibold text-lg">Medical Aid</h1>
			<div className="grid md:grid-cols-2 md:gap-6 mb-4">
				<div>
					<label
						htmlFor="medicalAidName"
						className="block text-sm font-medium text-gray-700"
					>
						Medical Aid Name
					</label>

					<input
						type="text"
						name="medicalAidName"
						id="medicalAidName"
						value={formik.values.medicalAidName}
						onChange={formik.handleChange}
						placeholder="Discovery"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>

				<div>
					<label
						htmlFor="membershipNumber"
						className="block text-sm font-medium text-gray-700"
					>
						Membership Number
					</label>

					<input
						type="text"
						name="membershipNumber"
						id="membershipNumber"
						value={formik.values.membershipNumber}
						onChange={formik.handleChange}
						placeholder="123456789"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
				</div>
			</div>

			<h1 className="font-semibold text-lg">Additional Information</h1>
			<div className="w-[18rem] md:w-[20rem]">
				<label
					htmlFor="currentMedication"
					className="block text-sm font-medium text-gray-700"
				>
					Taking any medication?
				</label>

				<select
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					value={currentMeds}
					onChange={(e) => {
						setCurrentMeds(e.target.value);
						formik.setFieldValue("currentMedication", e.target.value);
					}}
				>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</div>

			<div>
				<label
					htmlFor="allergies"
					className="block text-sm font-medium text-gray-700"
				>
					Allergies
				</label>
				<textarea
					name="allergies"
					id="allergies"
					value={formik.values.allergies}
					onChange={formik.handleChange}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
			</div>

			{/* Submit button */}
			<div className="flex justify-center">
				<button
					type="submit"
					className="bg-blue-500 text-white py-2.5 px-5 rounded hover:bg-blue-600 transition"
				>
					Submit
				</button>
			</div>

			<ToastContainer
				theme="light"
				position="top-right"
				hideProgressBar={false}
			/>
		</form>
	);
}
