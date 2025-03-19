"use client";
import React from "react";
import PatientsTable from "../Tables/PatientsTable";
import useApiData from "@/hooks/useApiData";
import { Patient } from "@/types";

const PatientsTableCard: React.FC = () => {
	const {
		data: patients,
		isLoading: patientsLoading,
		error: patientsError,
	} = useApiData<Patient>("Patients");

	const isLoading = patientsLoading;
	const error = patientsError;

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
			<h1 className="text-3xl font-bold mb-6 text-gray-800">Patients</h1>

			<div className="mt-8 rounded-lg">
				<h2 className="text-xl font-semibold text-gray-700 mb-4">
					Patients List
				</h2>
				<PatientsTable patients={patients} />
			</div>
		</div>
	);
};

export default PatientsTableCard;
