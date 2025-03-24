"use client";
import React from "react";
import Link from "next/link";
import {
	Search,
	Plus,
	Calendar,
	Clock,
	User,
	Pencil,
	Trash2,
} from "lucide-react";
import {
	Appointment,
	APPOINTMENT_TYPES,
	STATUS_COLORS,
	STATUS_LABELS,
} from "@/types";

// Mock data for appointments
const mockAppointments: Appointment[] = [
	{
		id: "APT-001",
		patientFirstName: "Zethu",
		patientLastName: "Johnson",
		appointmentDate: "2023-10-15",
		appointmentTime: "09:30 AM",
		doctor: "Dr. Smith",
		appointmentType: "annualPhysical",
		status: "completed",
	},
	{
		id: "APT-002",
		patientFirstName: "Lerato",
		patientLastName: "Mbeki",
		appointmentDate: "2023-10-15",
		appointmentTime: "10:45 AM",
		doctor: "Dr. Patel",
		appointmentType: "followUp",
		status: "confirmed",
	},
	{
		id: "APT-003",
		patientFirstName: "Thando",
		patientLastName: "Williams",
		appointmentDate: "2023-10-16",
		appointmentTime: "02:15 PM",
		doctor: "Dr. Smith",
		appointmentType: "chronicDisease",
		status: "scheduled",
	},
	{
		id: "APT-004",
		patientFirstName: "Nomsa",
		patientLastName: "Khumalo",
		appointmentDate: "2023-10-16",
		appointmentTime: "11:00 AM",
		doctor: "Dr. Jones",
		appointmentType: "vaccination",
		status: "checkedIn",
	},
	{
		id: "APT-005",
		patientFirstName: "Sipho",
		patientLastName: "Dlamini",
		appointmentDate: "2023-10-17",
		appointmentTime: "08:00 AM",
		doctor: "Dr. Patel",
		appointmentType: "urgentCare",
		status: "inProgress",
	},
	{
		id: "APT-006",
		patientFirstName: "Amahle",
		patientLastName: "Ndlovu",
		appointmentDate: "2023-10-17",
		appointmentTime: "03:30 PM",
		doctor: "Dr. Jones",
		appointmentType: "mentalHealth",
		status: "cancelled",
	},
	{
		id: "APT-007",
		patientFirstName: "Kagiso",
		patientLastName: "Moloi",
		appointmentDate: "2023-10-18",
		appointmentTime: "01:15 PM",
		doctor: "Dr. Smith",
		appointmentType: "labWork",
		status: "rescheduled",
	},
];

const AppointmentsPage = () => {
	// Using mock data instead of API call
	const appointments = mockAppointments;

	// Sort appointments by date and time (most recent first)
	const sortedAppointments = [...appointments].sort((a, b) => {
		const dateA = new Date(`${a.appointmentDate}T${a.appointmentTime}`);
		const dateB = new Date(`${b.appointmentDate}T${b.appointmentTime}`);
		return dateA.getTime() - dateB.getTime();
	});

	// Group appointments by date
	const appointmentsByDate: Record<string, Appointment[]> = {};
	sortedAppointments.forEach((appointment) => {
		const date = new Date(appointment.appointmentDate).toLocaleDateString(
			"en-US",
			{
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
			}
		);
		if (!appointmentsByDate[date]) {
			appointmentsByDate[date] = [];
		}
		appointmentsByDate[date].push(appointment);
	});

	return (
		<div className="min-h-screen bg-gray-900 text-cyan-50 p-6">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
					<div>
						<h1 className="text-3xl font-bold text-cyan-400">Appointments</h1>
						<p className="text-cyan-400/70 mt-2">
							Manage all clinic appointments and schedules
						</p>
					</div>
					<div className="flex gap-4 mt-4 md:mt-0">
						<div className="relative">
							<Search
								className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400/50"
								size={18}
							/>
							<input
								type="text"
								placeholder="Search appointments..."
								className="pl-10 pr-4 py-2 bg-gray-800 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
							/>
						</div>
						<Link
							href="/appointments/new"
							className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-sm font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
						>
							<Plus size={18} />
							New Appointment
						</Link>
					</div>
				</div>

				{/* Appointments List */}
				<div className="space-y-8">
					{Object.entries(appointmentsByDate).map(
						([date, dateAppointments]) => (
							<div
								key={date}
								className="bg-gray-800/50 border border-cyan-800/30 rounded-lg shadow-lg shadow-cyan-500/10"
							>
								<div className="px-6 py-4 border-b border-cyan-800/30">
									<h2 className="text-xl font-semibold text-cyan-400">
										{date}
									</h2>
								</div>
								<div className="divide-y divide-cyan-800/30">
									{dateAppointments.map((appointment) => (
										<div
											key={appointment.id}
											className="p-6 hover:bg-gray-800/80 transition-colors"
										>
											<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
												{/* Patient Info */}
												<div className="flex items-center gap-4">
													<div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-900/30 text-cyan-400">
														<User size={20} />
													</div>
													<div>
														<div className="font-medium">
															{appointment.patientFirstName}{" "}
															{appointment.patientLastName}
														</div>
														<div className="text-sm text-cyan-400/70">
															{APPOINTMENT_TYPES[appointment.appointmentType]}
														</div>
													</div>
												</div>

												{/* Time Info */}
												<div className="flex items-center gap-4">
													<div className="flex items-center gap-2 text-cyan-400">
														<Calendar size={16} />
														<span>{appointment.appointmentDate}</span>
													</div>
													<div className="flex items-center gap-2 text-cyan-400">
														<Clock size={16} />
														<span>{appointment.appointmentTime}</span>
													</div>
												</div>

												{/* Status */}
												<div className="flex items-center gap-4">
													<span
														className={`px-3 py-1 rounded-full text-xs font-medium ${
															STATUS_COLORS[appointment.status] ||
															"bg-gray-700 text-cyan-400"
														}`}
													>
														{STATUS_LABELS[appointment.status]}
													</span>
												</div>

												{/* Actions */}
												<div className="flex gap-4">
													<Link
														href={`/appointments/${appointment.id}`}
														className="text-cyan-400 hover:text-cyan-300 transition-colors"
														title="Edit Appointment"
													>
														<Pencil size={18} />
													</Link>
													<button
														className="text-red-400 hover:text-red-300 transition-colors"
														title="Cancel Appointment"
													>
														<Trash2 size={18} />
													</button>
												</div>
											</div>

											{/* Doctor Info */}
											<div className="mt-4 md:mt-2 md:pl-16">
												<div className="text-sm text-cyan-400/70">
													With: {appointment.doctor}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default AppointmentsPage;
