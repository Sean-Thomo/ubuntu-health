"use client";
import React from "react";
import DashboardNav from "../components/DashboardNav";
import AppointmentsTable from "../components/Tables/AppointmentsTable";

export default function Page() {
	return (
		<div className="flex h-screen bg-gray-900 text-cyan-50">
			<div className="hidden md:block">
				<DashboardNav />
			</div>
			<div className="flex-1 overflow-y-auto p-6">
				<AppointmentsTable />
			</div>
		</div>
	);
}
