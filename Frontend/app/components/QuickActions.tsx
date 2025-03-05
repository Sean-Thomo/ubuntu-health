import React, { useState } from "react";
import PatientForm from "./PatientForm";
import AppointmentScheduler from "./AppointmentSchedular";

export default function QuickActions() {
	const [activeModal, setActiveModal] = useState("");

	const handleCloseModal = () => setActiveModal("");

	return (
		<div className="space-y-4">
			<button
				onClick={() => setActiveModal("addPatient")}
				className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
			>
				Add New Patient
			</button>

			<button
				onClick={() => setActiveModal("scheduleAppointment")}
				className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
			>
				Schedule Appointment
			</button>

			{/* Modal Overlay */}
			{activeModal && (
				<div className="fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50">
					<div className="bg-white p-6 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative m-0">
						<button
							onClick={handleCloseModal}
							className="absolute top-4 right-4 text-2xl font-bold"
						>
							&times;
						</button>

						{activeModal === "addPatient" && <PatientForm />}
						{activeModal === "scheduleAppointment" && <AppointmentScheduler />}
					</div>
				</div>
			)}
		</div>
	);
}
