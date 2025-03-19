"use client";
import React from "react";
import { Calendar, Users, CreditCard, Clipboard } from "lucide-react";
import QuickActionsCard from "./Cards/QuickActionsCard";
import PatientsCard from "./Cards/PatientsCard";
import AppointmentsCard from "./Cards/AppointmentsCard";
// import InvoicesCard from "./InvoicesCard";
import AppointmentsTableCard from "./Tables/AppointmentsTable";
import useApiData from "../../hooks/useApiData";
import { Appointment, Invoice, Patient } from "@/types";

const Dashboard: React.FC = () => {
	const {
		data: patients,
		isLoading: patientsLoading,
		error: patientsError,
	} = useApiData<Patient>("Patients");

	const {
		data: appointments,
		isLoading: appointmentsLoading,
		error: appointmentsError,
	} = useApiData<Appointment>("Appointments");

	// const {
	// 	data: invoices,
	// 	isLoading: invoicesLoading,
	// 	error: invoicesError,
	// } = useApiData<Invoice>("Invoices");

	const isLoading = patientsLoading || appointmentsLoading;
	const error = patientsError || appointmentsError;

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-64">
				Loading dashboard data...
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-red-600 p-4">
				Error loading dashboard data. Please try again later.
			</div>
		);
	}

	return (
		<div className="min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{/* Patients Overview */}
				<div className="rounded-lg p-6 border">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-gray-700">Patients</h2>
						<Users className="text-blue-500" />
					</div>
					<PatientsCard patients={patients} />
				</div>

				{/* Appointments Overview */}
				<div className="rounded-lg p-6 border">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-gray-700">
							Appointments
						</h2>
						<Calendar className="text-blue-600" />
					</div>
					<AppointmentsCard appointments={appointments} />
				</div>

				{/* Invoicing Overview */}
				<div className="rounded-lg p-6 border">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-gray-700">Invoicing</h2>
						<CreditCard className="text-blue-600" />
					</div>
					{/* <InvoicesCard invoices={invoices} /> */}
				</div>

				{/* Quick Actions */}
				<div className="rounded-lg p-6 border">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-gray-700">
							Quick Actions
						</h2>
						<Clipboard className="text-blue-600" />
					</div>
					<QuickActionsCard />
				</div>
			</div>

			{/* Recent Appointments Table */}
			<div className="mt-8 rounded-lg">
				<h2 className="text-xl font-semibold text-gray-700 mb-4">
					Today&lsquo;s Appointments
				</h2>
				<AppointmentsTableCard appointments={appointments} />
			</div>
		</div>
	);
};

export default Dashboard;
