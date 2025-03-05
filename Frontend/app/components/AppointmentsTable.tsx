import React, { useState } from "react";

interface Appointment {
	id: string;
	patientName: string;
	time: string;
	type: string;
	status: "Scheduled" | "In Progress" | "Completed";
}

const AppointmentsTable: React.FC = () => {
	const [appointments] = useState<Appointment[]>([
		{
			id: "appt1",
			patientName: "John Doe",
			time: "10:00",
			type: "Check-Up",
			status: "Scheduled",
		},
		{
			id: "appt2",
			patientName: "Jane Smith",
			time: "11:30",
			type: "Follow-Up",
			status: "In Progress",
		},
	]);

	return (
		<div className="min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-gray-800">Appointments</h1>

			<div className="mt-8 rounded-lg p-6">
				<h2 className="text-xl font-semibold text-gray-700 mb-4">
					Today&lsquo;s Appointments
				</h2>
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
			</div>
		</div>
	);
};

export default AppointmentsTable;
