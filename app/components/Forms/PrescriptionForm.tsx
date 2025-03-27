"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { MEDICATION_TYPES, PRESCRIPTION_STATUS } from "@/types";
import { Plus } from "lucide-react";

interface PrescriptionFormProps {
	onClose: () => void;
	patientId?: string;
}

export default function PrescriptionForm({
	onClose,
	patientId,
}: PrescriptionFormProps) {
	const [medications, setMedications] = useState([
		{ name: "", dosage: "", frequency: "", type: "" },
	]);

	const formik = useFormik({
		initialValues: {
			patientId: patientId || "",
			doctorId: "",
			issueDate: new Date().toISOString().split("T")[0],
			expiryDate: "",
			status: "active",
			notes: "",
		},
		validationSchema: Yup.object({
			patientId: Yup.string().required("Patient ID is required"),
			issueDate: Yup.date().required("Issue date is required"),
			expiryDate: Yup.date().required("Expiry date is required"),
		}),
		onSubmit: async (values) => {
			try {
				const payload = {
					...values,
					medications,
				};

				const response = await fetch(
					"http://localhost:5290/api/Prescriptions",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(payload),
					}
				);

				if (!response.ok) {
					throw new Error("Failed to create prescription");
				}

				toast.success("Prescription created successfully!");
				setTimeout(onClose, 1000);
			} catch (err) {
				console.error(`Error creating prescription: ${err}`);
				toast.error(`${err}`);
			}
		},
	});

	const addMedication = () => {
		setMedications([
			...medications,
			{ name: "", dosage: "", frequency: "", type: "" },
		]);
	};

	const removeMedication = (index: number) => {
		const newMedications = [...medications];
		newMedications.splice(index, 1);
		setMedications(newMedications);
	};

	const handleMedicationChange = (
		index: number,
		field: string,
		value: string
	) => {
		const newMedications = [...medications];
		newMedications[index] = { ...newMedications[index], [field]: value };
		setMedications(newMedications);
	};

	return (
		<div className="fixed inset-0   backdrop-blur-sm flex items-center justify-center z-50 p-4">
			<div className="  border   rounded-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl  ">
				<button onClick={onClose} className="absolute top-4 right-4  text-2xl">
					&times;
				</button>

				<form onSubmit={formik.handleSubmit} className="space-y-6">
					<h2 className="text-2xl font-bold mb-6 text-center">
						e-Prescription
					</h2>

					{/* Patient and Doctor Info */}
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label className="block text-sm font-medium mb-1">
								Patient ID
							</label>
							<input
								type="text"
								className="w-full p-3   border   rounded-md text-cyan-50"
								value={formik.values.patientId}
								disabled
							/>
						</div>
						<div>
							<label className="block text-sm font-medium mb-1">
								Prescribing Doctor
							</label>
							<input
								type="text"
								className="w-full p-3   border   rounded-md text-cyan-50"
								value="Dr. Smith"
								disabled
							/>
						</div>
					</div>

					{/* Dates */}
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label
								htmlFor="issueDate"
								className="block text-sm font-medium mb-1"
							>
								Issue Date
							</label>
							<input
								type="date"
								id="issueDate"
								name="issueDate"
								value={formik.values.issueDate}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className="w-full p-3   border   rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
							/>
						</div>
						<div>
							<label
								htmlFor="expiryDate"
								className="block text-sm font-medium mb-1"
							>
								Expiry Date
							</label>
							<input
								type="date"
								id="expiryDate"
								name="expiryDate"
								value={formik.values.expiryDate}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className="w-full p-3   border   rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
							/>
							{formik.touched.expiryDate && formik.errors.expiryDate && (
								<p className="text-red-400 text-xs mt-1">
									{formik.errors.expiryDate}
								</p>
							)}
						</div>
					</div>

					{/* Medications */}
					<div>
						<h3 className="text-lg font-semibold mb-3">Medications</h3>
						{medications.map((med, index) => (
							<div key={index} className="mb-4 p-4   rounded-lg">
								<div className="grid md:grid-cols-2 gap-4 mb-3">
									<div>
										<label className="block text-sm font-medium mb-1">
											Medication Name
										</label>
										<input
											type="text"
											value={med.name}
											onChange={(e) =>
												handleMedicationChange(index, "name", e.target.value)
											}
											className="w-full p-2   border   rounded-md text-cyan-50"
											required
										/>
									</div>
									<div>
										<label className="block text-sm font-medium mb-1">
											Type
										</label>
										<select
											value={med.type}
											onChange={(e) =>
												handleMedicationChange(index, "type", e.target.value)
											}
											className="w-full p-2   border   rounded-md text-cyan-50"
										>
											<option value="">Select type</option>
											{Object.entries(MEDICATION_TYPES).map(([key, value]) => (
												<option key={key} value={key}>
													{value}
												</option>
											))}
										</select>
									</div>
								</div>
								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium mb-1">
											Dosage
										</label>
										<input
											type="text"
											value={med.dosage}
											onChange={(e) =>
												handleMedicationChange(index, "dosage", e.target.value)
											}
											className="w-full p-2   border   rounded-md text-cyan-50"
											required
										/>
									</div>
									<div>
										<label className="block text-sm font-medium mb-1">
											Frequency
										</label>
										<input
											type="text"
											value={med.frequency}
											onChange={(e) =>
												handleMedicationChange(
													index,
													"frequency",
													e.target.value
												)
											}
											className="w-full p-2   border   rounded-md text-cyan-50"
											required
										/>
									</div>
								</div>
								{medications.length > 1 && (
									<button
										type="button"
										onClick={() => removeMedication(index)}
										className="mt-2 text-red-400 text-sm hover:text-red-300"
									>
										Remove Medication
									</button>
								)}
							</div>
						))}
						<button
							type="button"
							onClick={addMedication}
							className="flex items-center gap-2  text-sm"
						>
							<Plus size={16} />
							Add Another Medication
						</button>
					</div>

					{/* Status and Notes */}
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<label
								htmlFor="status"
								className="block text-sm font-medium mb-1"
							>
								Status
							</label>
							<select
								id="status"
								name="status"
								value={formik.values.status}
								onChange={formik.handleChange}
								className="w-full p-3   border   rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
							>
								{Object.entries(PRESCRIPTION_STATUS).map(([value, label]) => (
									<option key={value} value={value}>
										{label}
									</option>
								))}
							</select>
						</div>
					</div>

					<div>
						<label htmlFor="notes" className="block text-sm font-medium mb-1">
							Additional Notes
						</label>
						<textarea
							id="notes"
							name="notes"
							value={formik.values.notes}
							onChange={formik.handleChange}
							rows={3}
							className="w-full p-3   border   rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
						/>
					</div>

					{/* Submit Button */}
					<div className="flex justify-center gap-4 pt-4">
						<button
							type="button"
							onClick={onClose}
							className="px-6 py-2 border   rounded-md hover:  transition-colors"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md  font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
						>
							Create Prescription
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
