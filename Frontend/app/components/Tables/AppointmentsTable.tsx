import React from "react";
import Link from "next/link";
import { Trash, SquarePen } from "lucide-react";

interface Appointment {
	id: number;
	patientFirstName: string;
	patientLastName: string;
	appointmentDate: string;
	appointmentTime: string;
	appointmentType: string;
	status: keyof typeof STATUS_COLORS;
}

const STATUS_COLORS = {
	scheduled: "bg-yellow-100 text-yellow-800",
	confirmed: "bg-blue-100 text-blue-800",
	checkedIn: "bg-purple-100 text-purple-800",
	inProgress: "bg-green-100 text-green-800",
	completed: "bg-teal-100 text-teal-800",
	cancelled: "bg-red-100 text-red-800",
	noShow: "bg-gray-300 text-gray-700",
	rescheduled: "bg-orange-100 text-orange-800",
};

const STATUS_LABELS = {
	scheduled: "Scheduled",
	confirmed: "Confirmed",
	checkedIn: "Checked In",
	inProgress: "In Progress",
	completed: "Completed",
	cancelled: "Cancelled",
	noShow: "No Show",
	rescheduled: "Rescheduled",
};

interface AppointmentsCardProps {
	appointments: Appointment[];
}

const AppointmentsTableCard: React.FC<AppointmentsCardProps> = ({
	appointments = [],
}) => {
	return (
		<div className="relative overflow-x-auto sm:rounded-tr-lg sm:rounded-tl-lg">
			<table className="w-full text-sm text-left rtl:text-right">
				<thead className="text-xs bg-gray-300 text-gray-600 ">
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
						<tr key={appointment.id} className="border-b hover:bg-gray-100">
							<td className="px-6 py-4">
								{appointment.patientFirstName} {appointment.patientLastName}
							</td>
							<td className="px-6 py-4">{appointment.appointmentDate}</td>

							<td className="px-6 py-4">{appointment.appointmentTime}</td>
							<td className="px-6 py-4">{appointment.appointmentType}</td>
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
								<Link href={"#"}>
									<SquarePen
										className="text-blue-300 hover:text-blue-600"
										size={20}
									/>
								</Link>
								<Link href={"#"}>
									<Trash
										xlinkTitle="Delete"
										className="text-red-400 hover:text-red-600"
										size={20}
									/>
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
