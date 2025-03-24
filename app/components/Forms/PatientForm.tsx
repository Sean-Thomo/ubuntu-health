"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PatientFormProps {
	onClose: () => void;
}

export default function PatientForm({ onClose }: PatientFormProps) {
	const [sex, setSex] = useState("");
	const [currentMeds, setCurrentMeds] = useState("");

	const formik = useFormik({
		initialValues: {
			tenantId: 1,
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
				setTimeout(onClose, 1000);
			} catch (err) {
				console.error(`Error submitting form: ${err}.`);
				toast.error(`${err}.`);
			}
		},
	});

	return (
		<div className="bg-black/70 fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
			<div className="bg-gray-800 border border-cyan-800/30 rounded-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl shadow-cyan-500/10">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 text-2xl"
				>
					&times;
				</button>

				<form onSubmit={formik.handleSubmit} className="space-y-6">
					<h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
						Patient Registration
					</h2>

					{/* Personal Information */}
					<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-4">
						<h3 className="text-lg font-semibold text-cyan-400 mb-4">
							Personal Information
						</h3>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="firstName"
									className="block text-sm font-medium text-cyan-400 mb-1"
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
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
								{formik.touched.firstName && formik.errors.firstName && (
									<p className="text-red-400 text-xs mt-1">
										{formik.errors.firstName}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="lastName"
									className="block text-sm font-medium text-cyan-400 mb-1"
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
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
								{formik.touched.lastName && formik.errors.lastName && (
									<p className="text-red-400 text-xs mt-1">
										{formik.errors.lastName}
									</p>
								)}
							</div>

							<div>
								<label
									htmlFor="idNumber"
									className="block text-sm font-medium text-cyan-400 mb-1"
								>
									ID Number
								</label>
								<input
									type="text"
									name="idNumber"
									id="idNumber"
									value={formik.values.idNumber}
									onChange={formik.handleChange}
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>

							<div>
								<label
									htmlFor="gender"
									className="block text-sm font-medium text-cyan-400 mb-1"
								>
									Sex
								</label>
								<select
									required
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
									value={sex}
									onChange={(e) => {
										setSex(e.target.value);
										formik.setFieldValue("gender", e.target.value);
									}}
								>
									<option value="" disabled className="bg-gray-800">
										Select Sex
									</option>
									<option value="male" className="bg-gray-800">
										Male
									</option>
									<option value="female" className="bg-gray-800">
										Female
									</option>
								</select>
							</div>

							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium text-cyan-400 mb-1"
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
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-cyan-400 mb-1"
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
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
								{formik.touched.email && formik.errors.email && (
									<p className="text-red-400 text-xs mt-1">
										{formik.errors.email}
									</p>
								)}
							</div>
						</div>
					</div>

					{/* Address */}
					<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-4">
						<h3 className="text-lg font-semibold text-cyan-400 mb-4">
							Address
						</h3>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="street"
									className="block text-sm font-medium text-cyan-400 mb-1"
								>
									Street Address
								</label>
								<input
									type="text"
									name="street"
									id="street"
									value={formik.values.street}
									onChange={formik.handleChange}
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>

							<div>
								<label
									htmlFor="streetTwo"
									className="block text-sm font-medium text-cyan-400 mb-1"
								>
									Street Address Line 2
								</label>
								<input
									type="text"
									name="streetTwo"
									id="streetTwo"
									value={formik.values.streetTwo}
									onChange={formik.handleChange}
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>

							<div>
								<label
									htmlFor="city"
									className="block text-sm font-medium text-cyan-400 mb-1"
								>
									City
								</label>
								<input
									type="text"
									name="city"
									id="city"
									value={formik.values.city}
									onChange={formik.handleChange}
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>

							<div>
								<label
									htmlFor="province"
									className="block text-sm font-medium text-cyan-400 mb-1"
								>
									Province
								</label>
								<input
									type="text"
									name="province"
									id="province"
									value={formik.values.province}
									onChange={formik.handleChange}
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>
						</div>
					</div>

					{/* Emergency Contact */}
					<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-4">
						<h3 className="text-lg font-semibold text-cyan-400 mb-4">
							Emergency Contact
						</h3>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="emergencyContactFirstName"
									className="block text-sm font-medium text-cyan-400 mb-1"
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
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>

							<div>
								<label
									htmlFor="emergencyContactLastName"
									className="block text-sm font-medium text-cyan-400 mb-1"
								>
									Last Name
								</label>
								<input
									type="text"
									name="emergencyContactLastName"
									id="emergencyContactLastName"
									value={formik.values.emergencyContactLastName}
									onChange={formik.handleChange}
									placeholder="Doe"
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>

							<div>
								<label
									htmlFor="emergencyContactRelationship"
									className="block text-sm font-medium text-cyan-400 mb-1"
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
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>

							<div>
								<label
									htmlFor="emergencyContactPhone"
									className="block text-sm font-medium text-cyan-400 mb-1"
								>
									Contact Number
								</label>
								<input
									type="text"
									name="emergencyContactPhone"
									id="emergencyContactPhone"
									value={formik.values.emergencyContactPhone}
									onChange={formik.handleChange}
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>
						</div>
					</div>

					{/* Medical Aid */}
					<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-4">
						<h3 className="text-lg font-semibold text-cyan-400 mb-4">
							Medical Aid
						</h3>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="medicalAidName"
									className="block text-sm font-medium text-cyan-400 mb-1"
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
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>

							<div>
								<label
									htmlFor="membershipNumber"
									className="block text-sm font-medium text-cyan-400 mb-1"
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
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>
						</div>
					</div>

					{/* Additional Information */}
					<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-4">
						<h3 className="text-lg font-semibold text-cyan-400 mb-4">
							Additional Information
						</h3>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="currentMedication"
									className="block text-sm font-medium text-cyan-400 mb-1"
								>
									Taking any medication?
								</label>
								<select
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
									value={currentMeds}
									onChange={(e) => {
										setCurrentMeds(e.target.value);
										formik.setFieldValue("currentMedication", e.target.value);
									}}
								>
									<option value="" disabled className="bg-gray-800">
										Choice
									</option>
									<option value="Yes" className="bg-gray-800">
										Yes
									</option>
									<option value="No" className="bg-gray-800">
										No
									</option>
								</select>
							</div>

							<div>
								<label
									htmlFor="allergies"
									className="block text-sm font-medium text-cyan-400 mb-1"
								>
									Allergies
								</label>
								<textarea
									required
									name="allergies"
									id="allergies"
									value={formik.values.allergies}
									onChange={formik.handleChange}
									className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
									rows={3}
								/>
							</div>
						</div>
					</div>

					{/* Submit button */}
					<div className="flex justify-center gap-4 pt-4 pb-6">
						<button
							type="button"
							onClick={onClose}
							className="px-6 py-2 border border-cyan-800/30 rounded-md text-cyan-400 hover:bg-cyan-900/30 transition-colors"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
						>
							Register Patient
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
