import React from "react";
import Link from "next/link";
import { Trash, SquarePen } from "lucide-react";

interface Appointment {
	id: number;
	patientFirstName: string;
	patientLastName: string;
	appointmentDate: string;
	appointmentTime: string;
	appointmentType: keyof typeof APPOINTMENT_TYPES;
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

const APPOINTMENT_TYPES = {
	initialConsultation: "Initial Consultation",
	followUp: "Follow-up",
	annualPhysical: "Annual Physical",
	urgentCare: "Urgent Care",
	specialistReferral: "Specialist Referral",
	procedure: "Procedure",
	labWork: "Lab Work",
	vaccination: "Vaccination",
	preventiveCare: "Preventive Care",
	chronicDisease: "Chronic Disease Management",
	mentalHealth: "Mental Health",
	telehealth: "Telehealth",
	preOperative: "Pre-operative",
	postOperative: "Post-operative",
	physicalTherapy: "Physical Therapy",
	other: "Other",
};

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
						<tr key={appointment.id} className="border-b hover:bg-gray-100">
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
