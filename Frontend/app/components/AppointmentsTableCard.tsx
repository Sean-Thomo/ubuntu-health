import React, { useEffect, useState } from "react";

export default function AppointmentsTableCard() {
	interface Appointment {
		id: number;
		patientFirstName: string;
		patientLastName: string;
		appointmentDate: string;
		appointmentTime: string;
		appointmentType: string;
		status: string;
	}

	const [appointments, setAppointments] = useState<Appointment[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAppointments = async () => {
			try {
				const response = await fetch("http://localhost:5290/api/appointments");

				if (!response.ok) {
					throw new Error(`Failed to fetch appointments: ${response.status}`);
				}

				const data = await response.json();
				setAppointments(data);
				setIsLoading(false);
			} catch (err) {
				console.error(`Error fetching data: ${err}.`);
				setIsLoading(false);
			}
		};

		fetchAppointments();
	}, []);

	if (isLoading) {
		return <div className="p-4">Loading appointments data...</div>;
	}

	if (error) {
		return <div className="p-4 text-red-600">Error loading appointments</div>;
	}

	return (
		<table className="w-full">
			<thead className="bg-gray-200 ">
				<tr>
					<th className="p-3 text-left">Patient</th>
					<th className="p-3 text-left">Date</th>
					<th className="p-3 text-left">Time</th>
					<th className="p-3 text-left">Type</th>
					<th className="p-3 text-left">Status</th>
				</tr>
			</thead>
			<tbody>
				{appointments.map((appointment) => (
					<tr key={appointment.id} className="border-b">
						<td className="p-3">
							{appointment.patientFirstName} {appointment.patientLastName}
						</td>
						<td className="p-3">{appointment.appointmentDate}</td>

						<td className="p-3">{appointment.appointmentTime}</td>
						<td className="p-3">{appointment.appointmentType}</td>
						<td className="p-3">
							<span
								className={`
        px-2 py-1 rounded text-xs
        ${
					appointment.status === "Scheduled"
						? "bg-yellow-100 text-yellow-800"
						: appointment.status === "In Progress"
						? "bg-blue-100 text-blue-800"
						: "bg-green-100 text-green-800"
				}
      `}
							>
								{appointment.status}
							</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
