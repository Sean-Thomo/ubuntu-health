import React, { useEffect, useState } from "react";

export default function AppointmentsTableCard() {
	interface Appointment {
		id: number;
		patientName: string;
		time: string;
		type: string;
		status: string;
	}

	const [appointments, setAppointments] = useState<Appointment[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAppointments = async () => {
			try {
				const response = await fetch("http://localhost:5290/api/Appointments");

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
	});

	if (isLoading) {
		return <div className="p-4">Loading invoice data...</div>;
	}

	if (error) {
		return <div className="p-4 text-red-600">Error loading invoices</div>;
	}

	return (
		<table className="w-full rounded-t-lg">
			<thead className="bg-gray-200 ">
				<tr>
					<th className="p-3 text-left">Patient</th>
					<th className="p-3 text-left">Time</th>
					<th className="p-3 text-left">Type</th>
					<th className="p-3 text-left">Status</th>
				</tr>
			</thead>
			<tbody>
				{appointments.map((appointment) => (
					<tr key={appointment.id} className="border-b">
						<td className="p-3">{appointment.patientName}</td>
						<td className="p-3">{appointment.time}</td>
						<td className="p-3">{appointment.type}</td>
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
