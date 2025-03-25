"use client";
import React, { useState } from "react";
import PatientsTableCard from "../Cards/PatientsTableCard";
import useApiData from "@/hooks/useApiData";
import { Patient } from "@/types";
import { Search, Plus } from "lucide-react";
import PatientForm from "../Forms/PatientForm";

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
			<div className="min-h-screen bg-gray-900 text-cyan-400 flex items-center justify-center">
				Loading patients data...
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen bg-gray-900 flex items-center justify-center text-red-600 ">
				Error loading patients data. Please try again later.
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="mt-8">
				<PatientsTableCard patients={patients} />
			</div>

			{/* {activeModal && (
				<div
					onClick={handleOverlayClick}
					className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50"
				>
					<div className="bg-gray-800 border border-cyan-800/30 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative m-4 shadow-xl shadow-cyan-500/10">
						<button
							onClick={handleCloseModal}
							className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 text-2xl"
						>
							&times;
						</button>

						{activeModal === "addPatient" && (
							<PatientForm onClose={handleCloseModal} />
						)}
					</div>
				</div>
			)} */}
		</div>
	);
};

export default PatientsTable;
