import React from "react";
import { startOfWeek, endOfWeek, isWithinInterval } from "date-fns";

interface Patient {
	id: number;
	createdAt: string;
}

interface PatientsCardProps {
	patients: Patient[];
}

const PatientsCard: React.FC<PatientsCardProps> = ({ patients = [] }) => {
	const now = new Date();
	const startOfCurrentWeek = startOfWeek(now, { weekStartsOn: 1 });
	const endOfCurrentWeek = endOfWeek(now, { weekStartsOn: 1 });
	const patientsThisWeek = patients.filter((patient) =>
		isWithinInterval(new Date(patient.createdAt), {
			start: startOfCurrentWeek,
			end: endOfCurrentWeek,
		})
	);
	const patientsLength = patients.length;
	const patientsThisWeekLength = patientsThisWeek.length;

	return (
		<div className="space-y-2">
			<p className="text-gray-600">Total Patients: {patientsLength}</p>
			<p className="text-gray-600">
				New This Week:{" "}
				<span className="text-blue-600">{patientsThisWeekLength}</span>
			</p>
		</div>
	);
};

export default PatientsCard;
