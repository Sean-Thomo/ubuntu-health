import React from "react";
import Link from "next/link";
import { Trash2, Pencil } from "lucide-react";
import {
	Appointment,
	APPOINTMENT_TYPES,
	STATUS_COLORS,
	STATUS_LABELS,
} from "@/types";

interface AppointmentsCardProps {
	appointments: Appointment[];
}

const AppointmentsTableCard: React.FC<AppointmentsCardProps> = ({
	appointments = [],
}) => {
	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
			<div className="overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-700">
					<thead className="bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3 font-medium text-gray-700">
								Patient Name
							</th>
							<th scope="col" className="px-6 py-3 font-medium text-gray-700">
								Date
							</th>
							<th scope="col" className="px-6 py-3 font-medium text-gray-700">
								Time
							</th>
							<th scope="col" className="px-6 py-3 font-medium text-gray-700">
								Type
							</th>
							<th scope="col" className="px-6 py-3 font-medium text-gray-700">
								Status
							</th>
							<th scope="col" className="px-6 py-3 font-medium text-gray-700">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200">
						{appointments.map((appointment) => (
							<tr
								key={appointment.id}
								className="hover:bg-gray-50 transition-colors"
							>
								<td className="px-6 py-4 font-medium text-gray-900">
									{appointment.patientFirstName} {appointment.patientLastName}
								</td>
								<td className="px-6 py-4 text-gray-500">
									{appointment.appointmentDate}
								</td>
								<td className="px-6 py-4 text-gray-500">
									{appointment.appointmentTime}
								</td>
								<td className="px-6 py-4 text-gray-500">
									{APPOINTMENT_TYPES[appointment.appointmentType]}
								</td>
								<td className="px-6 py-4">
									<span
										className={`px-3 py-1 rounded-full text-xs font-medium ${
											STATUS_COLORS[appointment.status]
										}`}
									>
										{STATUS_LABELS[appointment.status]}
									</span>
								</td>
								<td className="px-6 py-4">
									<div className="flex gap-4">
										<Link
											href="#"
											className="text-blue-600 hover:text-blue-800 transition-colors"
											title="Edit Appointment"
										>
											<Pencil size={18} />
										</Link>
										<Link
											href="#"
											className="text-red-600 hover:text-red-800 transition-colors"
											title="Delete Appointment"
										>
											<Trash2 size={18} />
										</Link>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="flex justify-between items-center mt-6 text-sm text-gray-600">
				<div>
					Showing 1-{appointments.length} of {appointments.length} appointments
				</div>
				<div className="flex gap-2">
					<button
						className="px-3 py-1 rounded border border-gray-300 bg-white
          hover:bg-gray-50 transition-colors"
					>
						Previous
					</button>
					<button
						className="px-3 py-1 rounded border border-gray-300 bg-white
          hover:bg-gray-50 transition-colors"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default AppointmentsTableCard;
