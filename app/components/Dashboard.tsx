"use client";
import React from "react";
import { Calendar, Users, CreditCard, Clipboard } from "lucide-react";
import QuickActionsCard from "./Cards/QuickActionsCard";
import PatientsCard from "./Cards/PatientsCard";
import AppointmentsCard from "./Cards/AppointmentsCard";
import AppointmentsTableCard from "./Cards/AppointmentsTableCard";
import useApiData from "../../hooks/useApiData";
import { Appointment, Invoice, Patient } from "@/types";
import { ToastContainer } from "react-toastify";

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

	const isLoading = patientsLoading || appointmentsLoading;
	const error = patientsError || appointmentsError;

	if (isLoading) {
		return (
			<div className="min-h-screen bg-gray-900 text-cyan-50 flex items-center justify-center">
				<div className="text-cyan-400">Loading dashboard data...</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen bg-gray-900 text-cyan-50 flex items-center justify-center">
				<div className="text-red-400">
					Error loading dashboard data. Please try again later.
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-900 text-cyan-50 p-6">
			<ToastContainer
				theme="dark"
				position="top-right"
				hideProgressBar={false}
				toastClassName="bg-gray-800 text-cyan-50"
			/>
			<h1 className="text-3xl font-bold mb-6 text-cyan-400">Dashboard</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{/* Patients Overview */}
				<div className="rounded-lg p-6 bg-gray-800/50 border border-cyan-800/30 shadow-lg">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-cyan-400">Patients</h2>
						<Users className="text-cyan-400" />
					</div>
					<PatientsCard patients={patients} />
				</div>

				{/* Appointments Overview */}
				<div className="rounded-lg p-6 bg-gray-800/50 border border-cyan-800/30 shadow-lg">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-cyan-400">
							Appointments
						</h2>
						<Calendar className="text-cyan-400" />
					</div>
					<AppointmentsCard appointments={appointments} />
				</div>

				{/* Invoicing Overview */}
				<div className="rounded-lg p-6 bg-gray-800/50 border border-cyan-800/30 shadow-lg">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-cyan-400">Invoicing</h2>
						<CreditCard className="text-cyan-400" />
					</div>
					{/* <InvoicesCard invoices={invoices} /> */}
				</div>

				{/* Quick Actions */}
				<div className="rounded-lg p-6 bg-gray-800/50 border border-cyan-800/30 shadow-lg">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-cyan-400">
							Quick Actions
						</h2>
						<Clipboard className="text-cyan-400" />
					</div>
					<QuickActionsCard />
				</div>
			</div>

			{/* Recent Appointments Table */}
			<div className="mt-8">
				<h2 className="text-xl font-semibold mb-4 text-cyan-400">
					Today&lsquo;s Appointments
				</h2>
				<AppointmentsTableCard appointments={appointments} />
			</div>
		</div>
	);
};

export default Dashboard;
