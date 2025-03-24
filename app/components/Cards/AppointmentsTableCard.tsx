import React from "react";
import Link from "next/link";
import { Trash, SquarePen } from "lucide-react";
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
		<div className="g-gray-800/50 border border-cyan-800/30 rounded-lg overflow-hidden">
			<table className="w-full text-sm ">
				<thead>
					<tr className="bg-gray-800/70">
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
						<tr key={appointment.id} className="border-b hover:bg-gray-800/80">
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
									className={`px-2 py-1 rounded text-xs ${
										STATUS_COLORS[appointment.status] ||
										"bg-gray-100 text-gray-800"
									}`}
								>
									{STATUS_LABELS[appointment.status]}
								</span>
							</td>
							<td className="px-6 py-4 flex gap-2">
								<span title="Edit Appointment">
									<Link href={"#"}>
										<SquarePen
											className="text-blue-300 hover:text-blue-600"
											size={20}
										/>
									</Link>
								</span>

								<span title="Delete Appointment">
									<Link href={"#"}>
										<Trash
											className="text-red-400 hover:text-red-600"
											size={20}
										/>
									</Link>
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AppointmentsTableCard;
