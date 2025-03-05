import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

export default function AppointmentScheduler() {
	const formik = useFormik({
		initialValues: {
			patientName: "",
			email: "",
			phone: "",
			date: "",
			time: "",
			reason: "",
		},
		validationSchema: Yup.object({
			patientName: Yup.string().required("Patient name is required"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			phone: Yup.string().required("Phone number is required"),
			date: Yup.date().required("Appointment date is required"),
			time: Yup.string().required("Appointment time is required"),
		}),
		onSubmit: async (values) => {
			try {
				const response = await fetch("http://localhost:5290/Appointments", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				});

				if (!response.ok) {
					throw new Error("Failed to schedule appointment");
				}

				toast.success("Appointment scheduled successfully!");
				formik.resetForm();
			} catch (e) {
				console.error(`Error scheduling appointment: ${e}`);
				toast.error(`Something went wrong: ${e}`);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className="space-y-4">
			<h2 className="text-2xl font-bold mb-4">Schedule Appointment</h2>

			{/* Patient Name */}
			<div>
				<label
					htmlFor="patientName"
					className="block text-sm font-medium text-gray-700"
				>
					Patient Name
				</label>
				<input
					type="text"
					id="patientName"
					name="patientName"
					value={formik.values.patientName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
				{formik.touched.patientName && formik.errors.patientName && (
					<p className="text-red-500 text-xs mt-1">
						{formik.errors.patientName}
					</p>
				)}
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
					id="email"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
				{formik.touched.email && formik.errors.email && (
					<p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
				)}
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
					type="tel"
					id="phone"
					name="phone"
					value={formik.values.phone}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
				{formik.touched.phone && formik.errors.phone && (
					<p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
				)}
			</div>

			{/* Date */}
			<div>
				<label
					htmlFor="date"
					className="block text-sm font-medium text-gray-700"
				>
					Appointment Date
				</label>
				<input
					type="date"
					id="date"
					name="date"
					value={formik.values.date}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
				{formik.touched.date && formik.errors.date && (
					<p className="text-red-500 text-xs mt-1">{formik.errors.date}</p>
				)}
			</div>

			{/* Time */}
			<div>
				<label
					htmlFor="time"
					className="block text-sm font-medium text-gray-700"
				>
					Appointment Time
				</label>
				<input
					type="time"
					id="time"
					name="time"
					value={formik.values.time}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
				{formik.touched.time && formik.errors.time && (
					<p className="text-red-500 text-xs mt-1">{formik.errors.time}</p>
				)}
			</div>

			{/* Reason (Optional) */}
			<div>
				<label
					htmlFor="reason"
					className="block text-sm font-medium text-gray-700"
				>
					Reason for Appointment (Optional)
				</label>
				<textarea
					id="reason"
					name="reason"
					value={formik.values.reason}
					onChange={formik.handleChange}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
			</div>

			{/* Submit Button */}
			<div>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
				>
					Schedule Appointment
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
