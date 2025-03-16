import React from "react";
import { Calendar, Users, CreditCard, Clipboard } from "lucide-react";
import QuickActions from "./QuickActionsCard";
import PatientsCard from "./PatientsCard";
import AppointmentsCard from "./AppointmentsCard";
import InvoicesCard from "./InvoicesCard";
import AppointmentsTableCard from "./AppointmentsTable";
import { GetServerSideProps } from "next";

interface Patient {
	id: number;
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
	phone: string;
	medicalAidName: string;
}

interface Appointment {
	id: number;
	patientFirstName: string;
	patientLastName: string;
	appointmentDate: string;
	appointmentTime: string;
	appointmentType: string;
	status: string;
}

interface DashboardProps {
	patients: Patient[];
	appointments: Appointment[];
	invoices: any[];
}

const Dashboard: React.FC<DashboardProps> = ({
	patients,
	appointments,
	invoices,
}) => {
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
					<PatientsCard patients={patients} />
				</div>

				{/* Appointments Overview */}
				<div className="rounded-lg p-6 border">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-gray-700">
							Appointments
						</h2>
						<Calendar className="text-blue-600" />
					</div>
					<AppointmentsCard appointments={appointments} />
				</div>

				{/* Invoicing Overview */}
				<div className="rounded-lg p-6 border">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-xl font-semibold text-gray-700">Invoicing</h2>
						<CreditCard className="text-blue-600" />
					</div>
					<InvoicesCard invoices={invoices} />
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
				<AppointmentsTableCard appointments={appointments} />
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const patientResponse = await fetch("https://localhost:5290/api/Patients");
		const patients: Patient[] = await patientResponse.json();

		const appointmentsResponse = await fetch(
			"http://localhost:5290/api/Appointments"
		);
		const appointments: Appointment[] = await appointmentsResponse.json();

		const invoicesResponse = await fetch("http://localhost:5290/api/Invoices");
		const invoices = await invoicesResponse.json();

		return {
			props: {
				patients,
				appointments,
				invoices,
			},
		};
	} catch (error) {
		console.error("Error fetching data:", error);
		return {
			props: {
				patients: [],
				appointments: [],
				invoices: [],
			},
		};
	}
};

export default Dashboard;
