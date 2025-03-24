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
				<div>
					<h1 className="text-3xl font-bold text-cyan-400">Appointments</h1>
					<p className="text-cyan-400/70 mt-2">
						Manage all clinic appointments and schedules
					</p>
				</div>
				<div className="flex gap-4 mt-4 md:mt-0">
					<div className="relative">
						<Search
							className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400/50"
							size={18}
						/>
						<input
							type="text"
							placeholder="Search appointments..."
							className="pl-10 pr-4 py-2 bg-gray-800 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
						/>
					</div>
					<button
						onClick={() => setActiveModal("scheduleAppointment")}
						className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-sm font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
					>
						<Plus size={18} />
						New Appointment
					</button>
				</div>
			</div>

			<div className="mt-8">
				<h2 className="text-xl font-semibold text-cyan-400 mb-4">
					Today&lsquo;s Appointments
				</h2>
				<AppointmentsTableCard appointments={appointments} />
			</div>
			{activeModal && (
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

						{activeModal === "scheduleAppointment" && (
							<AppointmentForm onClose={handleCloseModal} />
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default AppointmentsTable;
