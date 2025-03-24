"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PatientOverview from "@/app/components/Modals/PatientOverview";
import { Prescription, Visit, Appointment, Bill, Patient } from "@/types";
import Visits from "@/app/components/Modals/Visits";
import VisitsOverview from "@/app/components/Modals/Visits";
import PrescriptionsOverview from "@/app/components/Modals/PrescriptionsOverview";
import BillingOverview from "@/app/components/Modals/BillingOverview";

interface PatientPageProps {
	params: {
		id: string;
	};
}

const getPatientData = async (id: string): Promise<Patient> => {
	return {
		id,
		firstName: "Zethu",
		lastName: "Johnson",
		dob: "1985-06-15",
		gender: "male",
		phone: "+27 23 456 7890",
		street: "123 Main St",
		streetTwo: "Apt 4B",
		city: "Cape Town",
		province: "Western Cape",
		postalCode: "8001",
		email: "zethu.johnson@example.com",
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
					patientId: "P-001",
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
					patientId: "P-001",
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
			patientFirstName: "Zethu",
			patientLastName: "Johnson",
			appointmentDate: "2024-04-10",
			appointmentTime: "10:00 AM",
			appointmentType: "annualPhysical",
			doctor: "Dr. Smith",
			status: "scheduled",
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
					{activeTab === "overview" && <PatientOverview patient={patient} />}

					{/* Visit History Tab */}
					{activeTab === "visits" && <VisitsOverview visits={visits} />}

					{/* Prescriptions Tab */}
					{activeTab === "prescriptions" && (
						<PrescriptionsOverview
							activePrescriptions={activePrescriptions}
							pastPrescriptions={pastPrescriptions}
						/>
					)}

					{/* Billing & Appointments Tab */}
					{activeTab === "billing" && (
						<BillingOverview appointments={appointments} bills={bills} />
					)}
				</div>
			</main>
		</div>
	);
}
