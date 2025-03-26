"use client";
import React, { useState } from "react";
import AppointmentsTable from "../components/Tables/AppointmentsTable";
import Layout from "../components/Layout";
import { Search, Plus } from "lucide-react";
import AppointmentForm from "../components/Forms/AppointmentForm";

const Page = () => {
	const [activeModal, setActiveModal] = useState("");
	const handleCloseModal = () => setActiveModal("");
	return (
		<Layout>
			<div className="min-h-screen bg-gray-900 text-cyan-50 p-6">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
						<div>
							<h1 className="text-3xl font-bold text-cyan-400">
								Appointments Registry
							</h1>
							<p className="text-cyan-400/70 mt-2">
								Manage all patient appointments and schudules
							</p>
						</div>
						<div className="flex gap-4 mt-4 md:mt-0">
							<div className="flex items-center relative">
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
								className="w-44 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-md 
                              hover:shadow-cyan-500/30 shadow-lg transition-all font-medium"
							>
								<Plus size={18} />
								New Appointment
							</button>
						</div>
					</div>

					<AppointmentsTable />
				</div>
			</div>

			{activeModal && (
				<div
					// onClick={handleOverlayClick}
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
		</Layout>
	);
};

export default Page;
