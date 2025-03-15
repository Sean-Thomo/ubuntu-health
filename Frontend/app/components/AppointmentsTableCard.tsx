import React from "react";
import AppointmentsTableCard from "./AppointmentsTable";

export default function AppointmentsTable() {
	return (
		<div className="min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-gray-800">Appointments</h1>

			<div className="mt-8">
				<h2 className="text-xl font-semibold text-gray-700 mb-4">
					Today&lsquo;s Appointments
				</h2>
				<AppointmentsTableCard />
			</div>
		</div>
	);
}
