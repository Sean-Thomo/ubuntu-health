"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import PatientOverview from "@/app/components/Modals/PatientOverview";
import {
	Prescription,
	Appointment,
	Patient,
	Invoice,
	ClinicalNote,
} from "@/types";
import VisitsOverview from "@/app/components/Modals/Visits";
import PrescriptionsOverview from "@/app/components/Modals/PrescriptionsOverview";
import Layout from "@/app/components/Layout";
import { PlusCircle } from "lucide-react";
import InvoicesOverview from "@/app/components/Modals/InvoicesOverview";
import useApiData from "@/hooks/useApiData";
import { toast } from "react-toastify";

interface PatientPageProps {
	params: {
		id: string;
	};
}

const PatientPage = ({ params }: PatientPageProps) => {
	const [activeTab, setActiveTab] = useState<string>("overview");
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [patient, setPatient] = useState<Patient>();
	const [clinicalNotes, setClinicalNotes] = useState<ClinicalNote[]>([]);
	const [prescriptions, setPrescriptions] = useState<Prescription>();
	const [invoices, setInvoices] = useState<Invoice>();
	const [appointments, setAppointments] = useState<Appointment>();
	const token = localStorage.getItem("token");

	useEffect(() => {
		// Fetch Patients
		const fetchPatientData = async () => {
			try {
				const response = await fetch(
					`http://localhost:5290/api/Patients/${params.id}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				if (!response.ok) {
					throw new Error(`API error: ${response.text}`);
				}

				const result = await response.json();
				setPatient(result);
				setIsLoading(false);
			} catch (error) {
				toast.error("failed to fetch data");
				throw new Error("Failed to fetch");
			}
		};

		// Fetch ClinicalNotes
		const fetchClinicalNotes = async () => {
			try {
				const response = await fetch(
					`http://localhost:5290/api/ClinicalNotes/${params.id}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				if (!response.ok) {
					throw new Error(`API error: ${response.text}`);
				}

				const result = await response.json();
				setClinicalNotes(Array.isArray(result) ? result : [result]);
				setIsLoading(false);
			} catch (error) {
				toast.error("failed to fetch data");
				throw new Error("Failed to fetch");
			}
		};

		// Fetch Prescriptions
		const fetchPrescriptions = async () => {
			try {
				const response = await fetch(
					`http://localhost:5290/api/Prescriptions/${params.id}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				if (!response.ok) {
					throw new Error(`API error: ${response.text}`);
				}

				const result = await response.json();
				setPrescriptions(result);
				setIsLoading(false);
			} catch (error) {
				toast.error("failed to fetch data");
				throw new Error("Failed to fetch");
			}
		};

		// Fetch Invoices
		const fetchInvoices = async () => {
			try {
				const response = await fetch(
					`http://localhost:5290/api/Invoices/${params.id}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				if (!response.ok) {
					throw new Error(`API error: ${response.text}`);
				}

				const result = await response.json();
				setInvoices(result);
				setIsLoading(false);
			} catch (error) {
				toast.error("failed to fetch data");
				throw new Error("Failed to fetch");
			}
		};

		// Fetch Appointmentrs
		const fetchAppointmentrs = async () => {
			try {
				const response = await fetch(
					`http://localhost:5290/api/Appointmentrs/${params.id}`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				if (!response.ok) {
					throw new Error(`API error: ${response.text}`);
				}

				const result = await response.json();
				setAppointments(result);
				setIsLoading(false);
			} catch (error) {
				toast.error("failed to fetch data");
				throw new Error("Failed to fetch");
			}
		};
	}, []);

	// const {
	// 	data: patients,
	// 	isLoading: patientsLoading,
	// 	error: patientsError,
	// } = useApiData<Patient>("Patients");

	// const {
	// 	data: prescriptions,
	// 	isLoading: prescriptionsLoading,
	// 	error: prescriptionsError,
	// } = useApiData<Prescription>("Prescriptions");

	// const {
	// 	data: appointments,
	// 	isLoading: appointmentsLoading,
	// 	error: appointmentsError,
	// } = useApiData<Appointment>("Appointments");

	// const {
	// 	data: invoices,
	// 	isLoading: invoicesLoading,
	// 	error: invoicesError,
	// } = useApiData<Invoice>("Invoices");

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className=" ">Loading patient data...</div>
			</div>
		);
	}

	return (
		<Layout>
			<div className="min-h-screen p-6">
				{/* Header */}
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
						<div>
							<p className="text-xs tracking-wider">
								Patient ID: {patient?.id}
							</p>
							<h1 className="text-2xl font-semibold">{`${patient?.firstName} ${patient?.lastName}`}</h1>
						</div>
						<div className="flex items-center gap-4">
							{/* <span className="mx-4 mt-3 px-4 py-1 rounded-full border border-cyan-400/20 text-xs">
								{patient?.activeConditions.length > 0
									? "Active Conditions"
									: "No Active Conditions"}
							</span> */}
							<Link
								href={`/patients/${patient?.id}/consultation/new`}
								className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-md
                text-white text-sm font-medium hover:bg-blue-700 transition-colors"
							>
								<PlusCircle size={18} />
								New Consultation
							</Link>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<main className="max-w-7xl mx-auto p-4">
					{/* Tabs */}
					<div className="flex gap-6 mb-6 border-b">
						<button
							onClick={() => setActiveTab("overview")}
							className={`pb-4 px-2 relative ${
								activeTab === "overview" ? " " : "  hover: "
							}`}
						>
							Overview
							{activeTab === "overview" && (
								<span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
							)}
						</button>
						<button
							onClick={() => setActiveTab("visits")}
							className={`pb-4 px-2 relative ${
								activeTab === "visits" ? " " : "  hover: "
							}`}
						>
							Visit History
							{activeTab === "visits" && (
								<span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
							)}
						</button>
						<button
							onClick={() => setActiveTab("prescriptions")}
							className={`pb-4 px-2 relative ${
								activeTab === "prescriptions" ? " " : "  hover: "
							}`}
						>
							Prescriptions
							{activeTab === "prescriptions" && (
								<span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
							)}
						</button>
						<button
							onClick={() => setActiveTab("invoices")}
							className={`pb-4 px-2 relative ${
								activeTab === "invoices" ? " " : " hover: "
							}`}
						>
							Invoices & Appointments
							{activeTab === "invoices" && (
								<span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700"></span>
							)}
						</button>
					</div>

					{/* Tab Content */}
					<div className="space-y-8">
						{/* Overview Tab */}
						{activeTab === "overview" && patient && (
							<PatientOverview patient={patient} />
						)}

						{/* Visit History Tab */}
						{activeTab === "visits" && clinicalNotes.length > 0 && (
							<VisitsOverview clinicalNotes={clinicalNotes} />
						)}

						{/* Prescriptions Tab */}
						{activeTab === "prescriptions" && (
							<PrescriptionsOverview prescriptions={prescriptions ? (Array.isArray(prescriptions) ? prescriptions : [prescriptions]) : []} />
						)}

						{activeTab === "invoices" && invoices && (
							<InvoicesOverview invoices={invoices} />
						)}
					</div>
				</main>
			</div>
		</Layout>
	);
};

export default PatientPage;
