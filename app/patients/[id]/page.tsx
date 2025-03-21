"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Type definitions
interface Patient {
	id: string;
	firstName: string;
	lastName: string;
	dob: string;
	gender: string;
	phone: string;
	address: string;
	bloodType: string;
	medicalHistory: string[];
	allergies: string[];
	activeConditions: string[];
	medicalAidName?: string;
}

interface Visit {
	id: string;
	date: string;
	diagnosis: string;
	treatment: string;
	notes: string;
	prescriptions: Prescription[];
}

interface Prescription {
	id: string;
	medication: string;
	dosage: string;
	frequency: string;
	startDate: string;
	endDate: string;
	active: boolean;
}

interface Appointment {
	id: string;
	date: string;
	time: string;
	type: string;
	doctor: string;
	status: string;
}

interface Bill {
	id: string;
	date: string;
	amount: number;
	description: string;
	status: string;
}

interface PatientPageProps {
	params: {
		id: string;
	};
}

// Example data fetching function (in a real app, you'd fetch from an API)
const getPatientData = async (id: string): Promise<Patient> => {
	// This would be an API call in a real application
	return {
		id,
		firstName: "Zethu",
		lastName: "Johnson",
		dob: "1985-06-15",
		gender: "male",
		phone: "+27 23 456 7890",
		address: "123 Main St, Anytown, AT 12345",
		bloodType: "A+",
		medicalHistory: ["Appendectomy (2010)", "Hypertension (2018-Present)"],
		allergies: ["Penicillin", "Peanuts"],
		activeConditions: ["Hypertension", "Seasonal Allergies"],
		medicalAidName: "HealthPlus",
	};
};

// Example data for visits
const getPatientVisits = async (patientId: string): Promise<Visit[]> => {
	// This would be an API call in a real application
	return [
		{
			id: "V-001",
			date: "2023-10-15",
			diagnosis: "Acute Bronchitis",
			treatment: "Antibiotics, rest, increased fluid intake",
			notes: "Patient presented with persistent cough and fever for 3 days",
			prescriptions: [
				{
					id: "RX-001",
					medication: "Amoxicillin",
					dosage: "500mg",
					frequency: "3x daily",
					startDate: "2023-10-15",
					endDate: "2023-10-22",
					active: false,
				},
			],
		},
		{
			id: "V-002",
			date: "2023-12-05",
			diagnosis: "Hypertension Follow-up",
			treatment: "Continue current medication, lifestyle modifications",
			notes: "Blood pressure: 130/85. Improved from previous visit.",
			prescriptions: [
				{
					id: "RX-002",
					medication: "Lisinopril",
					dosage: "10mg",
					frequency: "1x daily",
					startDate: "2023-12-05",
					endDate: "2024-06-05",
					active: true,
				},
			],
		},
	];
};

// Example data for appointments and bills
const getPatientAppointments = async (
	patientId: string
): Promise<Appointment[]> => {
	return [
		{
			id: "A-001",
			date: "2024-04-10",
			time: "10:00 AM",
			type: "Annual Physical",
			doctor: "Dr. Jane Smith",
			status: "Scheduled",
		},
	];
};

const getPatientBills = async (patientId: string): Promise<Bill[]> => {
	return [
		{
			id: "B-001",
			date: "2023-12-05",
			amount: 75.0,
			description: "Co-pay for consultation",
			status: "Unpaid",
		},
	];
};

// Client component for the patient detail page
export default function PatientPage({ params }: PatientPageProps) {
	const [activeTab, setActiveTab] = useState<string>("overview");
	const [patient, setPatient] = useState<Patient | null>(null);
	const [visits, setVisits] = useState<Visit[]>([]);
	const [appointments, setAppointments] = useState<Appointment[]>([]);
	const [bills, setBills] = useState<Bill[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	// Load data on component mount
	useEffect(() => {
		const loadData = async () => {
			try {
				const patientData = await getPatientData(params.id);
				const visitsData = await getPatientVisits(params.id);
				const appointmentsData = await getPatientAppointments(params.id);
				const billsData = await getPatientBills(params.id);

				setPatient(patientData);
				setVisits(visitsData);
				setAppointments(appointmentsData);
				setBills(billsData);
			} catch (error) {
				console.error("Failed to load patient data", error);
			} finally {
				setLoading(false);
			}
		};

		loadData();
	}, [params.id]);

	// Derived data
	const allPrescriptions = visits.flatMap((visit) => visit.prescriptions);
	const activePrescriptions = allPrescriptions.filter((p) => p.active);
	const pastPrescriptions = allPrescriptions.filter((p) => !p.active);

	if (loading) {
		return (
			<div className="min-h-screen bg-gray-900 text-cyan-50 flex items-center justify-center">
				<div className="text-cyan-400">Loading patient data...</div>
			</div>
		);
	}

	if (!patient) {
		return (
			<div className="min-h-screen bg-gray-900 text-cyan-50 flex items-center justify-center">
				<div className="text-red-400">Patient not found</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-900 text-cyan-50">
			{/* Header */}
			<header className="border-b border-cyan-800/30 p-4">
				<div className="max-w-7xl mx-auto flex justify-between items-center">
					<div>
						<p className="text-xs text-cyan-400 tracking-wider">
							PATIENT ID: {patient.id}
						</p>
						<h1 className="text-2xl font-semibold">{`${patient.firstName} ${patient.lastName}`}</h1>
					</div>
					<div className="flex items-center gap-4">
						<span className="mx-4 mt-3 px-4 py-1 rounded-full bg-cyan-900/30 border border-cyan-400/20 text-cyan-400 text-xs">
							{patient.activeConditions.length > 0
								? "Active Conditions"
								: "No Active Conditions"}
						</span>
						<Link
							href={`/patients/${patient.id}/consultation/new`}
							className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-sm font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
						>
							+ New Consultation
						</Link>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="max-w-7xl mx-auto p-4">
				{/* Tabs */}
				<div className="flex gap-6 mb-6 border-b border-cyan-800/30">
					<button
						onClick={() => setActiveTab("overview")}
						className={`pb-4 px-2 relative ${
							activeTab === "overview"
								? "text-cyan-400"
								: "text-cyan-400/50 hover:text-cyan-400/70"
						}`}
					>
						Overview
						{activeTab === "overview" && (
							<span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"></span>
						)}
					</button>
					<button
						onClick={() => setActiveTab("visits")}
						className={`pb-4 px-2 relative ${
							activeTab === "visits"
								? "text-cyan-400"
								: "text-cyan-400/50 hover:text-cyan-400/70"
						}`}
					>
						Visit History
						{activeTab === "visits" && (
							<span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"></span>
						)}
					</button>
					<button
						onClick={() => setActiveTab("prescriptions")}
						className={`pb-4 px-2 relative ${
							activeTab === "prescriptions"
								? "text-cyan-400"
								: "text-cyan-400/50 hover:text-cyan-400/70"
						}`}
					>
						Prescriptions
						{activeTab === "prescriptions" && (
							<span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"></span>
						)}
					</button>
					<button
						onClick={() => setActiveTab("billing")}
						className={`pb-4 px-2 relative ${
							activeTab === "billing"
								? "text-cyan-400"
								: "text-cyan-400/50 hover:text-cyan-400/70"
						}`}
					>
						Billing & Appointments
						{activeTab === "billing" && (
							<span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"></span>
						)}
					</button>
				</div>

				{/* Tab Content */}
				<div className="space-y-8">
					{/* Overview Tab */}
					{activeTab === "overview" && (
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
							<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-6 backdrop-blur-sm">
								<h2 className="text-cyan-400 text-lg font-medium mb-4">
									Demographics
								</h2>
								<div className="grid grid-cols-2 gap-4">
									<div>
										<p className="text-xs text-cyan-400/70">Date of Birth</p>
										<p>{patient.dob}</p>
									</div>
									<div>
										<p className="text-xs text-cyan-400/70">Gender</p>
										<p>{patient.gender.toUpperCase()}</p>
									</div>
									<div>
										<p className="text-xs text-cyan-400/70">Blood Type</p>
										<p>{patient.bloodType}</p>
									</div>
									<div>
										<p className="text-xs text-cyan-400/70">Contact</p>
										<p>{patient.phone}</p>
									</div>
									<div className="col-span-2">
										<p className="text-xs text-cyan-400/70">Address</p>
										<p>{patient.address}</p>
									</div>
									{patient.medicalAidName && (
										<div className="col-span-2">
											<p className="text-xs text-cyan-400/70">Medical Aid</p>
											<p>{patient.medicalAidName}</p>
										</div>
									)}
								</div>
							</div>

							<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-6 backdrop-blur-sm">
								<h2 className="text-cyan-400 text-lg font-medium mb-4">
									Medical History
								</h2>
								<ul className="list-disc list-inside space-y-1">
									{patient.medicalHistory.map((item, index) => (
										<li key={index} className="text-cyan-50">
											{item}
										</li>
									))}
								</ul>
							</div>

							<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-6 backdrop-blur-sm">
								<h2 className="text-cyan-400 text-lg font-medium mb-4">
									Allergies
								</h2>
								<div className="flex flex-wrap gap-2">
									{patient.allergies.map((allergy, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-red-900/30 border border-red-400/20 text-red-400 rounded-full text-xs"
										>
											{allergy}
										</span>
									))}
								</div>
							</div>

							<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-6 backdrop-blur-sm">
								<h2 className="text-cyan-400 text-lg font-medium mb-4">
									Active Conditions
								</h2>
								<div className="flex flex-wrap gap-2">
									{patient.activeConditions.map((condition, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-amber-900/30 border border-amber-400/20 text-amber-400 rounded-full text-xs"
										>
											{condition}
										</span>
									))}
								</div>
							</div>
						</div>
					)}

					{/* Visit History Tab */}
					{activeTab === "visits" && (
						<div className="space-y-4">
							<h2 className="text-cyan-400 text-lg font-medium">
								Visit History
							</h2>
							{visits.map((visit) => (
								<div
									key={visit.id}
									className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-6 backdrop-blur-sm"
								>
									<div className="flex justify-between items-start mb-4">
										<div>
											<p className="text-xs text-cyan-400/70">
												VISIT ID: {visit.id}
											</p>
											<h3 className="text-lg font-medium">{visit.diagnosis}</h3>
										</div>
										<span className="text-sm text-cyan-400">{visit.date}</span>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
										<div>
											<p className="text-xs text-cyan-400/70">Treatment</p>
											<p>{visit.treatment}</p>
										</div>
										<div>
											<p className="text-xs text-cyan-400/70">Notes</p>
											<p>{visit.notes}</p>
										</div>
									</div>

									{visit.prescriptions.length > 0 && (
										<div className="mt-4">
											<p className="text-xs text-cyan-400/70 mb-2">
												Prescriptions
											</p>
											<div className="space-y-2">
												{visit.prescriptions.map((prescription) => (
													<div
														key={prescription.id}
														className="flex items-center gap-2 text-sm"
													>
														<span
															className={`w-2 h-2 rounded-full ${
																prescription.active
																	? "bg-green-400"
																	: "bg-gray-400"
															}`}
														></span>
														<span>
															{prescription.medication} {prescription.dosage},{" "}
															{prescription.frequency}
														</span>
													</div>
												))}
											</div>
										</div>
									)}
								</div>
							))}
						</div>
					)}

					{/* Prescriptions Tab */}
					{activeTab === "prescriptions" && (
						<div className="space-y-6">
							<div>
								<h2 className="text-cyan-400 text-lg font-medium mb-4">
									Active Prescriptions
								</h2>
								{activePrescriptions.length > 0 ? (
									<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg overflow-hidden">
										<table className="w-full text-sm">
											<thead>
												<tr className="bg-gray-800/70">
													<th className="text-left p-4">Medication</th>
													<th className="text-left p-4">Dosage</th>
													<th className="text-left p-4">Frequency</th>
													<th className="text-left p-4">Start Date</th>
													<th className="text-left p-4">End Date</th>
												</tr>
											</thead>
											<tbody>
												{activePrescriptions.map((prescription) => (
													<tr
														key={prescription.id}
														className="border-t border-cyan-800/20"
													>
														<td className="p-4">{prescription.medication}</td>
														<td className="p-4">{prescription.dosage}</td>
														<td className="p-4">{prescription.frequency}</td>
														<td className="p-4">{prescription.startDate}</td>
														<td className="p-4">{prescription.endDate}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								) : (
									<p className="text-cyan-400/70">No active prescriptions</p>
								)}
							</div>

							<div>
								<h2 className="text-cyan-400 text-lg font-medium mb-4">
									Past Prescriptions
								</h2>
								{pastPrescriptions.length > 0 ? (
									<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg overflow-hidden">
										<table className="w-full text-sm">
											<thead>
												<tr className="bg-gray-800/70">
													<th className="text-left p-4">Medication</th>
													<th className="text-left p-4">Dosage</th>
													<th className="text-left p-4">Frequency</th>
													<th className="text-left p-4">Start Date</th>
													<th className="text-left p-4">End Date</th>
												</tr>
											</thead>
											<tbody>
												{pastPrescriptions.map((prescription) => (
													<tr
														key={prescription.id}
														className="border-t border-cyan-800/20"
													>
														<td className="p-4">{prescription.medication}</td>
														<td className="p-4">{prescription.dosage}</td>
														<td className="p-4">{prescription.frequency}</td>
														<td className="p-4">{prescription.startDate}</td>
														<td className="p-4">{prescription.endDate}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								) : (
									<p className="text-cyan-400/70">No past prescriptions</p>
								)}
							</div>
						</div>
					)}

					{/* Billing & Appointments Tab */}
					{activeTab === "billing" && (
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
							<div>
								<h2 className="text-cyan-400 text-lg font-medium mb-4">
									Upcoming Appointments
								</h2>
								{appointments.length > 0 ? (
									<div className="space-y-4">
										{appointments.map((appointment) => (
											<div
												key={appointment.id}
												className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-6 backdrop-blur-sm"
											>
												<div className="flex justify-between items-start mb-2">
													<div>
														<p className="text-xs text-cyan-400/70">
															APPOINTMENT ID: {appointment.id}
														</p>
														<h3 className="font-medium">{appointment.type}</h3>
													</div>
													<span className="px-2 py-1 bg-cyan-900/30 border border-cyan-400/20 text-cyan-400 rounded-full text-xs">
														{appointment.status}
													</span>
												</div>
												<div className="grid grid-cols-2 gap-4 mt-4">
													<div>
														<p className="text-xs text-cyan-400/70">Date</p>
														<p>{appointment.date}</p>
													</div>
													<div>
														<p className="text-xs text-cyan-400/70">Time</p>
														<p>{appointment.time}</p>
													</div>
													<div className="col-span-2">
														<p className="text-xs text-cyan-400/70">Doctor</p>
														<p>{appointment.doctor}</p>
													</div>
												</div>
											</div>
										))}
									</div>
								) : (
									<p className="text-cyan-400/70">No upcoming appointments</p>
								)}
							</div>

							<div>
								<h2 className="text-cyan-400 text-lg font-medium mb-4">
									Outstanding Bills
								</h2>
								{bills.length > 0 ? (
									<div className="space-y-4">
										{bills.map((bill) => (
											<div
												key={bill.id}
												className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-6 backdrop-blur-sm"
											>
												<div className="flex justify-between items-start mb-2">
													<div>
														<p className="text-xs text-cyan-400/70">
															BILL ID: {bill.id}
														</p>
														<h3 className="font-medium">{bill.description}</h3>
													</div>
													<span className="px-2 py-1 bg-red-900/30 border border-red-400/20 text-red-400 rounded-full text-xs">
														{bill.status}
													</span>
												</div>
												<div className="grid grid-cols-2 gap-4 mt-4">
													<div>
														<p className="text-xs text-cyan-400/70">Date</p>
														<p>{bill.date}</p>
													</div>
													<div>
														<p className="text-xs text-cyan-400/70">Amount</p>
														<p className="font-medium">
															${bill.amount.toFixed(2)}
														</p>
													</div>
												</div>
												<div className="mt-4">
													<button className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-400 rounded text-sm transition-all">
														Pay Now
													</button>
												</div>
											</div>
										))}
									</div>
								) : (
									<p className="text-cyan-400/70">No outstanding bills</p>
								)}
							</div>
						</div>
					)}
				</div>
			</main>
		</div>
	);
}
