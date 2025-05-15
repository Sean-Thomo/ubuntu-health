import React from "react";
import { Prescription } from "@/types";
import PrescriptionsTableCard from "../Cards/PrescriptionsTableCard";
import useApiData from "@/hooks/useApiData";

interface PrescriptionTableProps {
	searchQuery: string;
}

const PrescriptionsTable: React.FC<PrescriptionTableProps> = ({
	searchQuery,
}) => {
	const {
		data: prescriptions,
		isLoading: prescriptionsLoading,
		error: prescriptionsError,
	} = useApiData<Prescription>("Prescriptions");

	console.log("SUBMIT VALUES JSON:");
	console.log(JSON.stringify(prescriptions, null, 2));

	const isLoading = prescriptionsLoading;
	const error = prescriptionsError;

	const filterdPrescriptions = prescriptions.filter((prescription) => {
		// const matchesSearch = prescription.patientId.includes(searchQuery);
		// return matchesSearch;
	});

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				Loading prescriptions data...
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen flex items-center justify-center text-red-400">
				Error loading prescriptions. Please try again later.
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="mt-8">
				<PrescriptionsTableCard prescriptions={prescriptions} />
			</div>
		</div>
	);
};

export default PrescriptionsTable;
