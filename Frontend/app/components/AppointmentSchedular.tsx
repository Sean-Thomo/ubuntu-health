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

const APPOINTMENT_STATUS = [
	{ value: "scheduled", label: "Scheduled" },
	{ value: "confirmed", label: "Confirmed" },
	{ value: "checked-in", label: "Checked In" },
	{ value: "in-progress", label: "In Progress" },
	{ value: "completed", label: "Completed" },
	{ value: "cancelled", label: "Cancelled" },
	{ value: "no-show", label: "No Show" },
	{ value: "rescheduled", label: "Rescheduled" },
];

export default function AppointmentScheduler() {
	const [appointmentType, setAppointmentType] = useState("");
	const [status, setStatus] = useState("");
	const formik = useFormik({
		initialValues: {
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
			<div className="grid md:grid-cols-2 md:gap-4 mb-4">
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
								setAppointmentType(e.target.value);
								formik.setFieldValue("appointmentType", e.target.value);
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
				</div>

				{/* status */}
				<div className="w-[18rem] md:w-[20rem]">
					<label
						htmlFor="status"
						className="block text-sm font-medium text-gray-700"
					>
						Appointment Status
					</label>
					<select
						id="status"
						name="status"
						className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						value={formik.values.status}
						onChange={(e) => {
							setStatus(e.target.value);
							formik.setFieldValue("status", e.target.value);
						}}
					>
						{APPOINTMENT_STATUS.map((statusOption) => (
							<option key={statusOption.value} value={statusOption.value}>
								{statusOption.label}
							</option>
						))}
					</select>
					{formik.touched.status && formik.errors.status && (
						<p className="text-red-500 text-xs mt-1">{formik.errors.status}</p>
					)}
				</div>
			</div>

			{/* Date */}
			<div>
				<label
					htmlFor="appointmentDate"
					className="block text-sm font-medium text-gray-700"
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
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
				{formik.touched.appointmentDate && formik.errors.appointmentDate && (
					<p className="text-red-500 text-xs mt-1">
						{formik.errors.appointmentDate}
					</p>
				)}
			</div>

			{/* Time */}
			<div>
				<label
					htmlFor="appointmentTime"
					className="block text-sm font-medium text-gray-700"
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
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
				{formik.touched.appointmentTime && formik.errors.appointmentTime && (
					<p className="text-red-500 text-xs mt-1">
						{formik.errors.appointmentTime}
					</p>
				)}
			</div>

			{/* Notes (Optional) */}
			<div>
				<label
					htmlFor="notes"
					className="block text-sm font-medium text-gray-700"
				>
					Notes (Optional)
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
			<div className="flex justify-center">
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
