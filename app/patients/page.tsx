import React from "react";
import SideNavbar from "@/app/components/SideNavbar";

export default function Dashboard() {
	return (
		<div className="flex">
			<SideNavbar />

			<div className="grid lg:grid-cols-4 lg:grid-rows-[1fr,2fr] gap-4 w-full p-3 md:p-8">
				<div className="bg-primary-300 rounded-md flex justify-center items-center">
					<h1>Patients</h1>
				</div>
			</div>
		</div>
	);
}
