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
		<>
			<div className="  border   rounded-lg overflow-hidden shadow-lg  ">
				<div className="overflow-x-auto">
					<table className="w-full text-sm text-cyan-50">
						<thead className=" /70 ">
							<tr>
								<th scope="col" className="px-6 py-4 text-left">
									Patient Name
								</th>
								<th scope="col" className="px-6 py-4 text-left">
									Date
								</th>
								<th scope="col" className="px-6 py-4 text-left">
									Time
								</th>
								<th scope="col" className="px-6 py-4 text-left">
									Type
								</th>
								<th scope="col" className="px-6 py-4 text-left">
									Status
								</th>
								<th scope="col" className="px-6 py-4 text-left">
									Actions
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-cyan-800/30">
							{appointments.map((appointment) => (
								<tr
									key={appointment.id}
									className="hover: /80 transition-colors"
								>
									<td className="px-6 py-4">
										{appointment.patientFirstName} {appointment.patientLastName}
									</td>
									<td className="px-6 py-4">{appointment.appointmentDate}</td>
									<td className="px-6 py-4">{appointment.appointmentTime}</td>
									<td className="px-6 py-4">
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
												className=" hover:text-cyan-300 transition-colors"
												title="Edit Appointment"
											>
												<Pencil size={18} />
											</Link>
											<Link
												href="#"
												className="text-red-400 hover:text-red-300 transition-colors"
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
			</div>

			<div className="flex justify-between items-center mt-6 text-sm ">
				<div>
					Showing 1-{appointments.length} of {appointments.length} appointments
				</div>
				<div className="flex gap-2">
					<button className="px-3 py-1 rounded border   hover: ">
						Previous
					</button>
					<button className="px-3 py-1 rounded border   hover: ">Next</button>
				</div>
			</div>
		</>
	);
};

export default AppointmentsTableCard;
