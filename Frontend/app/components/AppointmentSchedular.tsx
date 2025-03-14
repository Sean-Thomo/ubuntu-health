import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

const APPOINTMENT_TYPES = [
	{ value: "initial-consultation", label: "Initial Consultation" },
	{ value: "follow-up", label: "Follow-up" },
	{ value: "annual-physical", label: "Annual Physical" },
	{ value: "urgent-care", label: "Urgent Care" },
	{ value: "specialist-referral", label: "Specialist Referral" },
	{ value: "procedure", label: "Procedure" },
	{ value: "lab-work", label: "Lab Work" },
	{ value: "vaccination", label: "Vaccination" },
	{ value: "preventive-care", label: "Preventive Care" },
	{ value: "chronic-disease", label: "Chronic Disease Management" },
	{ value: "mental-health", label: "Mental Health" },
	{ value: "telehealth", label: "Telehealth" },
	{ value: "pre-operative", label: "Pre-operative" },
	{ value: "post-operative", label: "Post-operative" },
	{ value: "physical-therapy", label: "Physical Therapy" },
	{ value: "other", label: "Other" },
];

export default function AppointmentScheduler() {
	const [appointmentType, setAppointmentType] = useState("");
	const [otherType, setOtherType] = useState("");
	const formik = useFormik({
		initialValues: {
			patientFirstName: "",
			patientLastName: "",
			type: "",
			status: "",
			date: "",
			time: "",
			notes: "",
		},
		validationSchema: Yup.object({
			patientName: Yup.string().required("Patient name is required"),
			type: Yup.string()
				.email("Invalid type address")
				.required("type is required"),
			date: Yup.date().required("Appointment date is required"),
			time: Yup.string().required("Appointment time is required"),
			appointmentType: Yup.string().required("Appointment type is required"),
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
			} catch (err) {
				console.error(`Error scheduling appointment: ${err}`);
				toast.error(`${err}.`);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className="space-y-4">
			<h2 className="text-2xl font-bold mb-4">Schedule Appointment</h2>

			{/* Patient Name */}
			<div className="grid md:grid-cols-2 md:gap-6 mb-4">
				<div>
					<label
						htmlFor="patientFirstName"
						className="block text-sm font-medium text-gray-700"
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
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
					{formik.touched.patientFirstName &&
						formik.errors.patientFirstName && (
							<p className="text-red-500 text-xs mt-1">
								{formik.errors.patientFirstName}
							</p>
						)}
				</div>
				<div>
					<label
						htmlFor="patientLastName"
						className="block text-sm font-medium text-gray-700"
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
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
					{formik.touched.patientLastName && formik.errors.patientLastName && (
						<p className="text-red-500 text-xs mt-1">
							{formik.errors.patientLastName}
						</p>
					)}
				</div>

				{/* Type */}
				<div className="w-[18rem] md:w-[20rem]">
					<label
						htmlFor="appointmentType"
						className="block text-sm font-medium text-gray-700"
					>
						Appointment Type
					</label>
					<div>
						<select
							id="appointmentType"
							name="appointmentType"
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							value={appointmentType}
							onChange={(e) => {
								const value = e.target.value;
								setAppointmentType(value);
								formik.setFieldValue("appointmentType", value);
							}}
						>
							<option value="" disabled>
								Select appointment type
							</option>
							{APPOINTMENT_TYPES.map((type) => (
								<option key={type.value} value={type.value}>
									{type.label}
								</option>
							))}
						</select>
					</div>

					{/* Show text input for "Other" appointment type */}
					{appointmentType === "other" && (
						<div className="mt-2">
							<label
								htmlFor="otherAppointmentType"
								className="block text-sm font-medium text-gray-700"
							>
								Specify other appointment type
							</label>
							<input
								type="text"
								id="otherAppointmentType"
								name="otherAppointmentType"
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
								value={otherType}
								onChange={(e) => {
									setOtherType(e.target.value);
									formik.setFieldValue("otherAppointmentType", e.target.value);
								}}
								placeholder="Please specify appointment type"
							/>
						</div>
					)}
				</div>

				{/* status */}
				<div>
					<label
						htmlFor="status"
						className="block text-sm font-medium text-gray-700"
					>
						Status
					</label>
					<input
						type="tel"
						id="status"
						name="status"
						value={formik.values.status}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					/>
					{formik.touched.status && formik.errors.status && (
						<p className="text-red-500 text-xs mt-1">{formik.errors.status}</p>
					)}
				</div>
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

			{/* Notes (Optional) */}
			<div>
				<label
					htmlFor="notes"
					className="block text-sm font-medium text-gray-700"
				>
					Reason for Appointment (Optional)
				</label>
				<textarea
					id="notes"
					name="notes"
					value={formik.values.notes}
					onChange={formik.handleChange}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
			</div>

			{/* Submit Button */}
			<div className="flex justify-center ">
				<button
					type="submit"
					className="bg-blue-500 text-white py-2.5 px-5 rounded hover:bg-blue-600 transition"
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
