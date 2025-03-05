"use client";
import React from "react";
import DashboardNav from "../components/DashboardNav";
import Dashboard from "../components/Dashboard";

export default function Page() {
	const mockDashboardData = {
		appointments: {
			total: 20,
			completed: 14,
			delayMinutes: 10,
		},
		alerts: [
			{
				id: "1",
				message: "Critical: Elevated glucose (12 mmol/L) - Patient Y",
				type: "critical",
				timestamp: new Date(),
			},
		],
		billing: {
			todayRevenue: 8500,
			unpaidInvoices: 3,
		},
		prescriptions: {
			pendingRenewals: 2,
			recent: [
				{
					id: "1",
					patient: "John Doe",
					medication: "Amoxicillin 500mg",
				},
			],
		},
	};

	return (
		<div className="flex flex-row gap-4 h-screen">
			<div className="w-1/6">
				<div>
					<DashboardNav />
				</div>
			</div>
			<div className="w-5/6 py-6 pr-4">
				<Dashboard />
			</div>
		</div>
	);
}
