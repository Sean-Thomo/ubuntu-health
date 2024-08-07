import React from "react";
import SideNavbar from "../components/SideNavbar";

export default function Dashboard() {
	return (
		<div className="flex">
			<SideNavbar />
			<div className="bg-secondary-50 w-52 text-secondary-900">Section 1</div>
			<div className="bg-primary-400 w-52">Section 2</div>
			<div className="bg-primary-900 w-52">Section 3</div>
		</div>
	);
}
