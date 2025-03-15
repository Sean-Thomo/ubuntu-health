import React from "react";
import Link from "next/link";

interface Appointment {
	id: number;
	patientFirstName: string;
	patientLastName: string;
	appointmentDate: string;
	appointmentTime: string;
	appointmentType: string;
	status: string;
}

interface AppointmentsCardProps {
	appointments: Appointment[];
}

const AppointmentsTableCard: React.FC<AppointmentsCardProps> = ({
	appointments,
}) => {
	return (
		<div className="relative overflow-x-auto sm:rounded-tr-lg sm:rounded-tl-lg">
			<table className="w-full text-sm text-left rtl:text-right bg-gray-50 text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Patient Name
						</th>
						<th scope="col" className="px-6 py-3">
							Date
						</th>
						<th scope="col" className="px-6 py-3">
							Time
						</th>
						<th scope="col" className="px-6 py-3">
							Type
						</th>
						<th scope="col" className="px-6 py-3">
							Status
						</th>
						<th scope="col" className="px-6 py-3">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{appointments.map((appointment) => (
						<tr
							key={appointment.id}
							className="bg-white border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-800 dark:border-gray-700"
						>
							<td className="px-6 py-4">
								{appointment.patientFirstName} {appointment.patientLastName}
							</td>
							<td className="px-6 py-4">{appointment.appointmentDate}</td>

							<td className="px-6 py-4">{appointment.appointmentTime}</td>
							<td className="px-6 py-4">{appointment.appointmentType}</td>
							<td className="px-6 py-4">
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
							<td className="px-6 py-4">
								<Link
									href={"#"}
									className="ont-medium text-blue-600 dark:text-blue-500 hover:underline"
								>
									Edit
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AppointmentsTableCard;
