import React from "react";
import DashboardNav from "../components/DashboardNav";
import Dashboard from "../components/Dashboard";

export default function Page() {
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
