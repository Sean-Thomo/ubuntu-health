"use client";
import React from "react";
import AppointmentsTableCard from "./Cards/AppointmentsTableCard";
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
			<div className="flex justify-center items-center">
				Loading appointments data...
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
			<h1 className="text-3xl font-bold mb-6 text-gray-800">Appointments</h1>

			<div className="mt-8">
				<h2 className="text-xl font-semibold text-gray-800 mb-4">
					Today&lsquo;s Appointments
				</h2>
				<AppointmentsTableCard appointments={appointments} />
			</div>
		</div>
	);
};

export default AppointmentsTable;
