"use client";
import React from "react";
import PrescriptionsTable from "../Tables/PrescriptionsTable";
import useApiData from "@/hooks/useApiData";
import { Prescription } from "@/types";

const PrescriptionsTableCard: React.FC = () => {
	const {
		data: prescriptions,
		isLoading: prescriptionsLoading,
		error: prescriptionsError,
	} = useApiData<Prescription>("Prescriptions");

	const isLoading = prescriptionsLoading;
	const error = prescriptionsError;

	if (isLoading) {
		return (
			<div className="flex justify-center items-center">
				Loading prescriptions data...
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
			<h1 className="text-3xl font-bold mb-6 text-gray-800">Prescriptions</h1>

			<div className="mt-8 rounded-lg">
				<h2 className="text-xl font-semibold text-gray-800 mb-4">
					Prescription List
				</h2>

				<PrescriptionsTable prescriptions={prescriptions} />
			</div>
		</div>
	);
};

export default PrescriptionsTableCard;
