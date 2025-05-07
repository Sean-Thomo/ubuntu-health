"use client";
import React, { useState } from "react";
import PatientsTableCard from "../Cards/PatientsTableCard";
import useApiData from "@/hooks/useApiData";
import { Patient } from "@/types";

const PatientsTable: React.FC = () => {
	const [activeModal, setActiveModal] = useState("");
	const handleCloseModal = () => setActiveModal("");

	const handleOverlayClick = (e: any) => {
		if (e.target === e.currentTarget) {
			handleCloseModal();
		}
	};

	const {
		data: patients,
		isLoading: patientsLoading,
		error: patientsError,
	} = useApiData<Patient>("Patients");

	const isLoading = patientsLoading;
	const error = patientsError;

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				Loading patients data...
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen flex items-center justify-center text-red-600 ">
				Error loading patients data. Please try again later.
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="mt-8">
				<PatientsTableCard patients={patients} />
			</div>
		</div>
	);
};

export default PatientsTable;
