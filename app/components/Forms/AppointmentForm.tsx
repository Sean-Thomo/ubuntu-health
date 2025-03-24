"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { APPOINTMENT_TYPES, STATUS_LABELS } from "@/types";

interface AppointmentFormProps {
	onClose: () => void;
}

export default function AppointmentForm({ onClose }: AppointmentFormProps) {
	const [appointmentType, setAppointmentType] = useState("");
	const [status, setStatus] = useState("");

	const formik = useFormik({
		initialValues: {
			tenantId: 1,
			patientFirstName: "",
			patientLastName: "",
			appointmentDate: "",
			appointmentTime: "",
			appointmentType: "",
			status: "scheduled",
			notes: "",
			createdAt: new Date().toString(),
			updatedAt: new Date().toString(),
		},
		validationSchema: Yup.object({
			patientFirstName: Yup.string().required("First name is required"),
			patientLastName: Yup.string().required("Last name is required"),
			appointmentDate: Yup.date().required("Appointment date is required"),
			appointmentTime: Yup.string().required("Appointment time is required"),
			appointmentType: Yup.string().required("Appointment type is required"),
			status: Yup.string().required("Appointment status is required"),
		}),
		onSubmit: async (values) => {
			try {
				const response = await fetch("http://localhost:5290/api/Appointments", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				});

				if (!response.ok) {
					throw new Error("Failed to schedule appointment");
				}

				toast.success("Appointment scheduled!");
				formik.resetForm();
				setTimeout(onClose, 1000);
			} catch (err) {
				console.error(`Error scheduling appointment: ${err}`);
				toast.error(`${err}.`);
			}
		},
	});

	return (
		<div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
			<div className="bg-gray-800 border border-cyan-800/30 rounded-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl shadow-cyan-500/10">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 text-2xl"
				>
					&times;
				</button>

				<form onSubmit={formik.handleSubmit} className="space-y-6">
					<h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
						Schedule Appointment
					</h2>

					{/* Patient Name */}
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label
								htmlFor="patientFirstName"
								className="block text-sm font-medium text-cyan-400 mb-1"
							>
								First Name
							</label>
							<input
								type="text"
								id="patientFirstName"
								name="patientFirstName"
								value={formik.values.patientFirstName}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
							/>
							{formik.touched.patientFirstName &&
								formik.errors.patientFirstName && (
									<p className="text-red-400 text-xs mt-1">
										{formik.errors.patientFirstName}
									</p>
								)}
						</div>
						<div>
							<label
								htmlFor="patientLastName"
								className="block text-sm font-medium text-cyan-400 mb-1"
							>
								Last Name
							</label>
							<input
								type="text"
								id="patientLastName"
								name="patientLastName"
								value={formik.values.patientLastName}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
							/>
							{formik.touched.patientLastName &&
								formik.errors.patientLastName && (
									<p className="text-red-400 text-xs mt-1">
										{formik.errors.patientLastName}
									</p>
								)}
						</div>
					</div>

					{/* Appointment Type and Status */}
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label
								htmlFor="appointmentType"
								className="block text-sm font-medium text-cyan-400 mb-1"
							>
								Appointment Type
							</label>
							<select
								id="appointmentType"
								name="appointmentType"
								className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								value={appointmentType}
								onChange={(e) => {
									setAppointmentType(e.target.value);
									formik.setFieldValue("appointmentType", e.target.value);
								}}
							>
								<option value="" disabled className="bg-gray-800">
									Select appointment type
								</option>
								{Object.entries(APPOINTMENT_TYPES).map(([key, label]) => (
									<option key={key} value={key} className="bg-gray-800">
										{label}
									</option>
								))}
							</select>
							{formik.touched.appointmentType &&
								formik.errors.appointmentType && (
									<p className="text-red-400 text-xs mt-1">
										{formik.errors.appointmentType}
									</p>
								)}
						</div>
						<div>
							<label
								htmlFor="status"
								className="block text-sm font-medium text-cyan-400 mb-1"
							>
								Status
							</label>
							<select
								id="status"
								name="status"
								className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								value={formik.values.status}
								onChange={(e) => {
									setStatus(e.target.value);
									formik.setFieldValue("status", e.target.value);
								}}
							>
								{Object.entries(STATUS_LABELS).map(([value, label]) => (
									<option key={value} value={value} className="bg-gray-800">
										{label}
									</option>
								))}
							</select>
							{formik.touched.status && formik.errors.status && (
								<p className="text-red-400 text-xs mt-1">
									{formik.errors.status}
								</p>
							)}
						</div>
					</div>

					{/* Date and Time */}
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label
								htmlFor="appointmentDate"
								className="block text-sm font-medium text-cyan-400 mb-1"
							>
								Appointment Date
							</label>
							<input
								type="date"
								id="appointmentDate"
								name="appointmentDate"
								value={formik.values.appointmentDate}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
							/>
							{formik.touched.appointmentDate &&
								formik.errors.appointmentDate && (
									<p className="text-red-400 text-xs mt-1">
										{formik.errors.appointmentDate}
									</p>
								)}
						</div>
						<div>
							<label
								htmlFor="appointmentTime"
								className="block text-sm font-medium text-cyan-400 mb-1"
							>
								Appointment Time
							</label>
							<input
								type="time"
								id="appointmentTime"
								name="appointmentTime"
								value={formik.values.appointmentTime}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
							/>
							{formik.touched.appointmentTime &&
								formik.errors.appointmentTime && (
									<p className="text-red-400 text-xs mt-1">
										{formik.errors.appointmentTime}
									</p>
								)}
						</div>
					</div>

					{/* Notes */}
					<div>
						<label
							htmlFor="notes"
							className="block text-sm font-medium text-cyan-400 mb-1"
						>
							Notes (Optional)
						</label>
						<textarea
							id="notes"
							name="notes"
							value={formik.values.notes}
							onChange={formik.handleChange}
							rows={3}
							className="w-full p-3 bg-gray-700 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
						/>
					</div>

					{/* Submit Button */}
					<div className="flex justify-center gap-4 pt-4">
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
							Schedule Appointment
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
