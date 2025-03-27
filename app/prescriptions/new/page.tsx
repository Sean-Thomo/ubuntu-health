"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Calendar, Pill, User } from "lucide-react";
import Link from "next/link";

const NewPrescriptionPage = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const formik = useFormik({
		initialValues: {
			patientId: "",
			medication: "",
			dosage: "",
			frequency: "",
			startDate: "",
			endDate: "",
			instructions: "",
			refills: 0,
		},
		validationSchema: Yup.object({
			patientId: Yup.string().required("Patient ID is required"),
			medication: Yup.string().required("Medication is required"),
			dosage: Yup.string().required("Dosage is required"),
			frequency: Yup.string().required("Frequency is required"),
			startDate: Yup.date().required("Start date is required"),
		}),
		onSubmit: async (values) => {
			setIsSubmitting(true);
			try {
				// Replace with your actual API endpoint
				const response = await fetch(
					"http://localhost:5290/api/Prescriptions",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(values),
					}
				);

				if (!response.ok) {
					throw new Error("Failed to create prescription");
				}

				toast.success("Prescription created successfully!");
				formik.resetForm();
			} catch (err) {
				console.error("Error creating prescription:", err);
				toast.error("Failed to create prescription");
			} finally {
				setIsSubmitting(false);
			}
		},
	});

	return (
		<div className="min-h-screen text-cyan-50 p-6">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="flex justify-between items-center mb-8">
					<div>
						<h1 className="text-2xl font-bold  ">New Prescription</h1>
						<p className="  mt-1">Create a new medication prescription</p>
					</div>
					<Link
						href="/prescriptions"
						className="px-4 py-2 border   rounded-md   hover:  transition-colors"
					>
						Back to Prescriptions
					</Link>
				</div>

				{/* Form */}
				<div className="  border   rounded-lg shadow-lg   p-6">
					<form onSubmit={formik.handleSubmit} className="space-y-6">
						{/* Patient Information */}
						<div className=" /30 border   rounded-lg p-4">
							<h2 className="text-lg font-semibold   mb-4 flex items-center gap-2">
								<User size={18} />
								Patient Information
							</h2>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="patientId"
										className="block text-sm font-medium   mb-1"
									>
										Patient ID
									</label>
									<input
										type="text"
										id="patientId"
										name="patientId"
										value={formik.values.patientId}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										className="w-full p-3   border   rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
										placeholder="PAT-12345"
									/>
									{formik.touched.patientId && formik.errors.patientId && (
										<p className="text-red-400 text-xs mt-1">
											{formik.errors.patientId}
										</p>
									)}
								</div>

								{/* Patient search/select could be added here */}
							</div>
						</div>

						{/* Medication Details */}
						<div className=" /30 border   rounded-lg p-4">
							<h2 className="text-lg font-semibold   mb-4 flex items-center gap-2">
								<Pill size={18} />
								Medication Details
							</h2>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="medication"
										className="block text-sm font-medium   mb-1"
									>
										Medication Name
									</label>
									<input
										type="text"
										id="medication"
										name="medication"
										value={formik.values.medication}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										className="w-full p-3   border   rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
										placeholder="e.g., Amoxicillin"
									/>
									{formik.touched.medication && formik.errors.medication && (
										<p className="text-red-400 text-xs mt-1">
											{formik.errors.medication}
										</p>
									)}
								</div>

								<div>
									<label
										htmlFor="dosage"
										className="block text-sm font-medium   mb-1"
									>
										Dosage
									</label>
									<input
										type="text"
										id="dosage"
										name="dosage"
										value={formik.values.dosage}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										className="w-full p-3   border   rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
										placeholder="e.g., 500mg"
									/>
									{formik.touched.dosage && formik.errors.dosage && (
										<p className="text-red-400 text-xs mt-1">
											{formik.errors.dosage}
										</p>
									)}
								</div>

								<div>
									<label
										htmlFor="frequency"
										className="block text-sm font-medium   mb-1"
									>
										Frequency
									</label>
									<div className="relative">
										<select
											id="frequency"
											name="frequency"
											value={formik.values.frequency}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											className="w-full p-3   border   rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 appearance-none"
										>
											<option value="">Select frequency</option>
											<option value="Once daily">Once daily</option>
											<option value="Twice daily">Twice daily</option>
											<option value="Three times daily">
												Three times daily
											</option>
											<option value="Four times daily">Four times daily</option>
											<option value="As needed">As needed</option>
										</select>
									</div>
									{formik.touched.frequency && formik.errors.frequency && (
										<p className="text-red-400 text-xs mt-1">
											{formik.errors.frequency}
										</p>
									)}
								</div>

								<div>
									<label
										htmlFor="refills"
										className="block text-sm font-medium   mb-1"
									>
										Refills
									</label>
									<input
										type="number"
										id="refills"
										name="refills"
										min="0"
										max="10"
										value={formik.values.refills}
										onChange={formik.handleChange}
										className="w-full p-3   border   rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
									/>
								</div>
							</div>

							<div className="mt-6">
								<label
									htmlFor="instructions"
									className="block text-sm font-medium   mb-1"
								>
									Additional Instructions
								</label>
								<textarea
									id="instructions"
									name="instructions"
									rows={3}
									value={formik.values.instructions}
									onChange={formik.handleChange}
									className="w-full p-3   border   rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
									placeholder="Special instructions for the patient..."
								/>
							</div>
						</div>

						{/* Dates */}
						<div className=" /30 border   rounded-lg p-4">
							<h2 className="text-lg font-semibold   mb-4 flex items-center gap-2">
								<Calendar size={18} />
								Prescription Dates
							</h2>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="startDate"
										className="block text-sm font-medium   mb-1"
									>
										Start Date
									</label>
									<div className="relative">
										<input
											type="date"
											id="startDate"
											name="startDate"
											value={formik.values.startDate}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											className="w-full p-3   border   rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
										/>
									</div>
									{formik.touched.startDate && formik.errors.startDate && (
										<p className="text-red-400 text-xs mt-1">
											{formik.errors.startDate}
										</p>
									)}
								</div>

								<div>
									<label
										htmlFor="endDate"
										className="block text-sm font-medium   mb-1"
									>
										End Date (Optional)
									</label>
									<div className="relative">
										<input
											type="date"
											id="endDate"
											name="endDate"
											value={formik.values.endDate}
											onChange={formik.handleChange}
											className="w-full p-3   border   rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Form Actions */}
						<div className="flex justify-end gap-4 pt-4">
							<button
								type="button"
								onClick={() => formik.resetForm()}
								className="px-6 py-2 border   rounded-md   hover:  transition-colors"
							>
								Reset
							</button>
							<button
								type="submit"
								disabled={isSubmitting}
								className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md  font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
							>
								{isSubmitting ? "Creating..." : "Create Prescription"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewPrescriptionPage;
