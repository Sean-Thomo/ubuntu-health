"use client";
import React, { useState } from "react";
import AppointmentsTableCard from "../Cards/AppointmentsTableCard";
import useApiData from "@/hooks/useApiData";
import { Appointment } from "@/types";
import { Search, Plus } from "lucide-react";
import AppointmentForm from "../Forms/AppointmentForm";

const AppointmentsTable: React.FC = () => {
	const [activeModal, setActiveModal] = useState("");
	const handleCloseModal = () => setActiveModal("");

	const handleOverlayClick = (e: any) => {
		if (e.target === e.currentTarget) {
			handleCloseModal();
		}
	};

	const {
		data: appointments,
		isLoading: appointmentsLoading,
		error: appointmentsError,
	} = useApiData<Appointment>("Appointments");

	const isLoading = appointmentsLoading;
	const error = appointmentsError;

	if (isLoading) {
		return (
			<div className="min-h-screen bg-gray-900 text-cyan-400 flex items-center justify-center">
				Loading appointments data...
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen bg-gray-900 text-red-400flex items-center justify-center">
				Error loading appointments. Please try again later.
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="mt-8">
				<AppointmentsTableCard appointments={appointments} />
			</div>
		</div>
	);
};

export default AppointmentsTable;
