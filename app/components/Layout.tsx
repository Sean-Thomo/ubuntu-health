import React from "react";
import DashboardNav from "./DashboardNav";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="flex flex-row gap-4 h-screen bg-gray-50 text-gray-800">
			<div className="w-1/6">
				<DashboardNav />
			</div>
			<div className="w-5/6 bg-inherit text-inherit">{children}</div>
		</div>
	);
};

export default Layout;
