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
			<div className="min-h-screen text-cyan-50 p-6">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
						<div>
							<h1 className="text-3xl font-bold">Appointments Registry</h1>
							<p className="mt-2">
								Manage all patient appointments and schudules
							</p>
						</div>
						<div className="flex gap-4 mt-4 md:mt-0">
							<div className="flex items-center relative">
								<Search
									className="absolute left-3 top-1/2 -translate-y-1/2"
									size={18}
								/>
								<input
									type="text"
									placeholder="Search appointments..."
									className="pl-10 pr-4 py-2   border   rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>
							<button
								onClick={() => setActiveModal("scheduleAppointment")}
								className="w-44 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500  py-2 rounded-md 
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
				<div>
					{activeModal === "scheduleAppointment" && (
						<AppointmentForm onClose={handleCloseModal} />
					)}
				</div>
			)}
		</Layout>
	);
};

export default Page;
