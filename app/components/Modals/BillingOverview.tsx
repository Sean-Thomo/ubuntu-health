import { Appointment, APPOINTMENT_TYPES, Bill } from "@/types";
import React from "react";

interface BillingOverviewProps {
	appointments: Appointment[];
	bills: Bill[];
}

const BillingOverview: React.FC<BillingOverviewProps> = ({
	appointments,
	bills,
}) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
			<div>
				<h2 className=" text-lg font-medium mb-4">Upcoming Appointments</h2>
				{appointments.length > 0 ? (
					<div className="space-y-4">
						{appointments.map((appointment) => (
							<div
								key={appointment.id}
								className="  border   rounded-lg p-6 backdrop-blur-sm"
							>
								<div className="flex justify-between items-start mb-2">
									<div>
										<p className="text-xs ">APPOINTMENT ID: {appointment.id}</p>
										<h3 className="font-medium">
											{APPOINTMENT_TYPES[appointment.appointmentType]}
										</h3>
									</div>
									<span className="px-2 py-1   border border-cyan-400/20  rounded-full text-xs">
										{appointment.status}
									</span>
								</div>
								<div className="grid grid-cols-2 gap-4 mt-4">
									<div>
										<p className="text-xs ">Date</p>
										<p>{appointment.appointmentDate}</p>
									</div>
									<div>
										<p className="text-xs ">Time</p>
										<p>{appointment.appointmentTime}</p>
									</div>
									<div className="col-span-2">
										<p className="text-xs ">Doctor</p>
										<p>{appointment.doctor}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<p className="/70">No upcoming appointments</p>
				)}
			</div>

			<div>
				<h2 className=" text-lg font-medium mb-4">Outstanding Bills</h2>
				{bills.length > 0 ? (
					<div className="space-y-4">
						{bills.map((bill) => (
							<div
								key={bill.id}
								className="  border   rounded-lg p-6 backdrop-blur-sm"
							>
								<div className="flex justify-between items-start mb-2">
									<div>
										<p className="text-xs ">BILL ID: {bill.id}</p>
										<h3 className="font-medium">{bill.description}</h3>
									</div>
									<span className="px-2 py-1 bg-red-900/30 border border-red-400/20 text-red-400 rounded-full text-xs">
										{bill.status}
									</span>
								</div>
								<div className="grid grid-cols-2 gap-4 mt-4">
									<div>
										<p className="text-xs ">Date</p>
										<p>{bill.date}</p>
									</div>
									<div>
										<p className="text-xs ">Amount</p>
										<p className="font-medium">${bill.amount.toFixed(2)}</p>
									</div>
								</div>
								<div className="mt-4">
									<button className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30  rounded text-sm transition-all">
										Pay Now
									</button>
								</div>
							</div>
						))}
					</div>
				) : (
					<p className="/70">No outstanding bills</p>
				)}
			</div>
		</div>
	);
};

export default BillingOverview;
