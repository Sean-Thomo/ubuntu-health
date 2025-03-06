import React, { useState } from "react";
import { Calendar, Users, CreditCard, Clipboard } from "lucide-react";
import QuickActions from "./QuickActionsCard";
import PatientsCard from "./PatientsCard";
import AppointmentsCard from "./AppointmentsCard";

interface Patient {
	id: string;
	name: string;
	lastVisit: string;
	upcomingAppointment?: string;
}

interface Appointment {
	id: string;
	patientName: string;
	time: string;
	type: string;
	status: "Scheduled" | "In Progress" | "Completed";
}

interface Invoice {
	id: string;
	patientName: string;
	amount: number;
}

const Dashboard: React.FC = () => {
	const [patients] = useState<Patient[]>([
		{
			id: "1",
			name: "John Doe",
			lastVisit: "2024-03-03",
			upcomingAppointment: "2024-03-05 10:00",
		},
		{ id: "2", name: "Jane Smith", lastVisit: "2024-02-28" },
	]);

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

	const [invoices] = useState<Invoice[]>([
		{ id: "inv1", patientName: "John Doe", amount: 500 },
		{ id: "inv2", patientName: "Jane Smith", amount: 750 },
	]);

	return (
		<div className="min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{/* Patients Overview */}
				<div className="rounded-lg p-6 border">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-gray-700">Patients</h2>
						<Users className="text-blue-500" />
					</div>
					<PatientsCard />
				</div>

				{/* Appointments Overview */}
				<div className="rounded-lg p-6 border">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-gray-700">
							Appointments
						</h2>
						<Calendar className="text-blue-600" />
					</div>
					<AppointmentsCard />
				</div>

				{/* Invoicing Overview */}
				<div className="rounded-lg p-6 border">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-gray-700">Invoicing</h2>
						<CreditCard className="text-blue-600" />
					</div>
					<div className="space-y-2">
						<p className="text-gray-600">Total Invoices: {invoices.length}</p>
						<p className="text-gray-600">
							Total Revenue: R
							{invoices.reduce((sum, inv) => sum + inv.amount, 0)}
						</p>
					</div>
				</div>

				{/* Quick Actions */}
				<div className="rounded-lg p-6 border">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-gray-700">
							Quick Actions
						</h2>
						<Clipboard className="text-blue-600" />
					</div>
					<QuickActions />
				</div>
			</div>

			{/* Recent Appointments Table */}
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

export default Dashboard;
