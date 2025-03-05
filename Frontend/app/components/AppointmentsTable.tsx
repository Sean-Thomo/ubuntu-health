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
			patientName: "Thabo Mbeki",
			time: "08:00",
			type: "General Consultation",
			status: "Scheduled",
		},
		{
			id: "appt2",
			patientName: "Naledi Botha",
			time: "08:30",
			type: "Chronic Medication Review",
			status: "Scheduled",
		},
		{
			id: "appt3",
			patientName: "Sipho Dlamini",
			time: "09:00",
			type: "Blood Pressure Check",
			status: "In Progress",
		},
		{
			id: "appt4",
			patientName: "Lerato van der Merwe",
			time: "09:30",
			type: "Pregnancy Check-Up",
			status: "Completed",
		},
		{
			id: "appt5",
			patientName: "Kagiso Nkosi",
			time: "10:00",
			type: "Diabetes Management",
			status: "Scheduled",
		},
		{
			id: "appt6",
			patientName: "Zinhle Khumalo",
			time: "10:30",
			type: "Vaccination",
			status: "Scheduled",
		},
		{
			id: "appt7",
			patientName: "Tumi van Wyk",
			time: "11:00",
			type: "Minor Injury Treatment",
			status: "In Progress",
		},
		{
			id: "appt8",
			patientName: "Nomvula Petersen",
			time: "11:30",
			type: "Annual Health Check",
			status: "Scheduled",
		},
		{
			id: "appt9",
			patientName: "Mandla Jacobs",
			time: "12:00",
			type: "HIV Counselling",
			status: "Completed",
		},
		{
			id: "appt10",
			patientName: "Palesa le Roux",
			time: "12:30",
			type: "Child Immunization",
			status: "Scheduled",
		},
	]);

	return (
		<div className="min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-gray-800">Appointments</h1>

			<div className="mt-8 rounded-lg">
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
