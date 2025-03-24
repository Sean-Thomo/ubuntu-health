"use client";
import React from "react";
import AppointmentsTableCard from "../Cards/AppointmentsTableCard";
import useApiData from "@/hooks/useApiData";
import { Appointment } from "@/types";

const AppointmentsTable: React.FC = () => {
	const {
		data: appointments,
		isLoading: appointmentsLoading,
		error: appointmentsError,
	} = useApiData<Appointment>("Appointments");

	const isLoading = appointmentsLoading;
	const error = appointmentsError;

	if (isLoading) {
		return (
			<div className="min-h-screen bg-gray-900 text-cyan-50 flex items-center justify-center">
				<div className="text-cyan-400">Loading appointments data...</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen bg-gray-900 text-cyan-50 flex items-center justify-center">
				<div className="text-red-400">
					Error loading appointments. Please try again later.
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold text-cyan-400">Appointments</h1>
				<div className="flex gap-4">
					<button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-sm font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all">
						+ New Appointment
					</button>
				</div>
			</div>

			<div className="mt-8">
				<h2 className="text-xl font-semibold text-cyan-400 mb-4">
					Today&lsquo;s Appointments
				</h2>
				<AppointmentsTableCard appointments={appointments} />
			</div>
		</div>
	);
};

export default AppointmentsTable;
