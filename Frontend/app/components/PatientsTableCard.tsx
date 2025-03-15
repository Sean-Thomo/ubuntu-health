import React from "react";
import PatientsTable from "./PatientsTable";

export default function PatientsTableCard() {
	return (
		<div className="min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-gray-800">Patients</h1>

			<div className="mt-8 rounded-lg">
				<h2 className="text-xl font-semibold text-gray-700 mb-4">
					Patients List
				</h2>
				<PatientsTable />
			</div>
		</div>
	);
}
