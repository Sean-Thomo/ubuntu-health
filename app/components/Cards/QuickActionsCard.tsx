"use client";
import React, { useState } from "react";
import PatientForm from "../Forms/PatientForm";
import AppointmentForm from "../Forms/AppointmentForm";

const QuickActionsCard = () => {
	const [activeModal, setActiveModal] = useState("");
	const handleCloseModal = () => setActiveModal("");

	return (
		<>
			<div className="space-y-4">
				<button
					onClick={() => setActiveModal("addPatient")}
					className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-md 
                hover:shadow-cyan-500/30 shadow-lg transition-all mb-3 font-medium"
				>
					Add New Patient
				</button>

				<button
					onClick={() => setActiveModal("scheduleAppointment")}
					className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-md 
                hover:shadow-blue-500/30 shadow-lg transition-all font-medium"
				>
					Schedule Appointment
				</button>
			</div>
			{/* Modal Overlay */}
			{activeModal && (
				<div className="inset-0 backdrop-blur-lg flex items-center justify-center z-50">
					<div className="bg-white p-6 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
						<button
							onClick={handleCloseModal}
							className="absolute top-4 right-4 text-2xl font-bold"
						>
							&times;
						</button>

						{activeModal === "addPatient" && (
							<PatientForm onClose={handleCloseModal} />
						)}
						{activeModal === "scheduleAppointment" && (
							<AppointmentForm onClose={handleCloseModal} />
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default QuickActionsCard;
