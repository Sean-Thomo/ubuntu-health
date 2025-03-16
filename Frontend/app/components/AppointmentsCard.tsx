import React from "react";

interface Appointment {
	id: number;
	status: string;
}

interface AppointmentsCardProps {
	appointments: Appointment[];
}

const AppointmentsCard: React.FC<AppointmentsCardProps> = ({
	appointments = [],
}) => {
	const scheduledCount = appointments.filter(
		(a) => a.status === "Scheduled"
	).length;
	const inProgressCount = appointments.filter(
		(a) => a.status === "In Progress"
	).length;

	return (
		<div className="space-y-2">
			<p className="text-gray-600">
				Todays Appointments: {appointments.length}
			</p>
			<div className="flex justify-between">
				<span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800">
					Scheduled: {scheduledCount}
				</span>
				<span className="px-2 py-1 rounded bg-blue-100 text-blue-800">
					In Progress:{inProgressCount}
				</span>
			</div>
		</div>
	);
};

export default AppointmentsCard;
