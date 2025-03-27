import React from "react";
import { Prescription } from "@/types";
import PrescriptionsTableCard from "../Cards/PrescriptionsTableCard";
import useApiData from "@/hooks/useApiData";

const PrescriptionsTable = () => {
	const {
		data: prescriptions,
		isLoading: prescriptionsLoading,
		error: prescriptionsError,
	} = useApiData<Prescription>("Prescriptions");

	const isLoading = prescriptionsLoading;
	const error = prescriptionsError;

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				Loading prescriptions data...
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen  text-red-400 flex items-center justify-center">
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
