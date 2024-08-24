import React from "react";
import SideNavbar from "@/app/components/SideNavbar";

export default function Dashboard() {
	return (
		<div className="flex">
			<SideNavbar />

			<div className="grid w-full p-3 md:p-8">
				<div className="bg-primary-400 rounded-md flex justify-center items-center">
					<h1>Upcoming Appointments</h1>
				</div>
			</div>
		</div>
	);
}
