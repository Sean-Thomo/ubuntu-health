import React from "react";

interface Patient {
	id: number;
}

interface PatientsCardProps {
	patients: Patient[];
}

const PatientsCard: React.FC<PatientsCardProps> = ({ patients = [] }) => {
	const patientsThisWeek = {
		// TODO: Write function to filter patients created this week
	};

	const patientsLength = patients.length;

	return (
		<div className="space-y-2">
			<p className="text-gray-600">Total Patients: {patientsLength}</p>
			<p className="text-gray-600">New This Week: </p>
		</div>
	);
};

export default PatientsCard;
