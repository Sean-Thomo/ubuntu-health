import React, { useState } from "react";
import Link from "next/link";
import {
	LayoutDashboard,
	CalendarCheck,
	Users,
	PillBottle,
	CreditCard,
	FileText,
	Menu,
	X,
} from "lucide-react";

export default function DashboardNav() {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{
			name: "Dashboard",
			href: "/",
			icon: LayoutDashboard,
		},
		{
			name: "Appointments",
			href: "/appointments",
			icon: CalendarCheck,
		},
		{
			name: "Patients",
			href: "/patients",
			icon: Users,
		},
		{
			name: "Prescriptions",
			href: "/prescriptions",
			icon: PillBottle,
		},
		{
			name: "Billing",
			href: "/billing",
			icon: CreditCard,
		},
		{
			name: "Invoice",
			href: "/invoice",
			icon: FileText,
		},
	];

	return (
		<>
			<button
				className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white shadow-md rounded-full"
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? (
					<X className="text-red-500" />
				) : (
					<Menu className="text-blue-500" />
				)}
			</button>

			<nav
				className={`
                    fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
                    md:relative md:translate-x-0 md:w-full md:max-w-xs md:shadow-none
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    z-40`}
			>
				<div className="flex flex-col h-full">
					<div className="p-6 hidden md:block">
						<h2 className="text-2xl font-bold text-gray-800">@ Logo</h2>
					</div>

					<ul className="py-4 flex-grow overflow-y-auto">
						{navItems.map((item, index) => {
							const Icon = item.icon;
							return (
								<li key={index} className="group">
									<Link
										href={item.href}
										className="flex items-center px-6 py-3 text-gray-600 
                                                hover:bg-blue-50 ransition-colors duration-200
                                                group-hover:text-blue-600 rounded-lg"
									>
										<Icon
											className="mr-4 text-gray-400 group-hover:text-blue-500
                                                    transition-colors"
											size={20}
										/>
										<span className="font-medium">{item.name}</span>
									</Link>
								</li>
							);
						})}
					</ul>
					<div className="p-4 border-t border-gray-200">
						<button
							className="w-full py-2 bg-blue-500 text-white rounded-lg
                            hover:bg-blue-600 transition-colors"
						>
							New Appointment
						</button>
					</div>
				</div>
			</nav>
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-30 md:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</>
	);
}
