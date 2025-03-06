import React, { useEffect, useState } from "react";

export default function AppointmentsCard() {
	interface Appointment {
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
	});

	if (isLoading) {
		return <div className="p-4">Loading invoice data...</div>;
	}

	if (error) {
		return <div className="p-4 text-red-600">Error loading invoices</div>;
	}

	return (
		<div className="space-y-2">
			<p className="text-gray-600">
				Todays Appointments: {appointments.length}
			</p>
			<div className="flex justify-between">
				<span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800">
					Scheduled:{" "}
					{appointments.filter((a) => a.status === "Scheduled").length}
				</span>
				<span className="px-2 py-1 rounded bg-blue-100 text-blue-800">
					In Progress:{" "}
					{appointments.filter((a) => a.status === "In Progress").length}
				</span>
			</div>
		</div>
	);
}
