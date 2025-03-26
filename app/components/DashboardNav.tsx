"use client";
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
import PatientForm from "./Forms/PatientForm";
import AppointmentForm from "./Forms/AppointmentForm";

const DashboardNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeModal, setActiveModal] = useState("");
	const handleCloseModal = () => setActiveModal("");

	const navItems = [
		{
			name: "Dashboard",
			href: "/dashboard",
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
			name: "Invoices",
			href: "/invoices",
			icon: FileText,
		},
	];

	// const handleOverlayClick = (e: any) => {
	// 	if (e.target === e.currentTarget) {
	// 		handleCloseModal();
	// 	}
	// };

	return (
		<>
			<button
				className="md:hidden mb-auto fixed top-4 left-4 z-50 p-2 bg-cyan-900/30 border border-cyan-400/20 rounded-full shadow-lg shadow-cyan-500/10"
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? (
					<X className="text-cyan-400" />
				) : (
					<Menu className="text-cyan-400" />
				)}
			</button>

			<nav
				className={`
          fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-cyan-800/30 transform transition-transform
          duration-300 ease-in-out md:relative md:translate-x-0 md:w-full md:max-w-xs 
          ${isOpen ? "translate-x-0 pt-16" : "-translate-x-full"}
          z-40`}
			>
				<div className="flex flex-col h-full">
					<div className="p-6 hidden md:block border-b border-cyan-800/30">
						<h2 className="text-2xl font-semibold text-cyan-400">MediSys</h2>
						<p className="text-xs text-cyan-400/50 tracking-wider">
							CLINIC PORTAL
						</p>
					</div>

					<ul className="py-4 flex-grow overflow-y-auto">
						{navItems.map((item, index) => {
							const Icon = item.icon;
							return (
								<li key={index} className="group">
									<Link
										href={item.href}
										className="flex items-center px-6 py-3 text-cyan-50/80 
                      hover:bg-cyan-900/30 transition-colors duration-200
                      group-hover:text-cyan-400 rounded-lg mx-2"
									>
										<Icon
											className="mr-4 text-cyan-400/50 group-hover:text-cyan-400
                        transition-colors"
											size={20}
										/>
										<span className="font-medium">{item.name}</span>
									</Link>
								</li>
							);
						})}
					</ul>
					<div className="p-4 border-t border-cyan-800/30">
						<button
							onClick={() => setActiveModal("addPatient")}
							className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-md 
                hover:shadow-cyan-500/30 shadow-lg transition-all mb-3 font-medium"
						>
							Add New Patient
						</button>

						<button
							onClick={() => setActiveModal("scheduleAppointment")}
							className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-md 
                hover:shadow-blue-500/30 shadow-lg transition-all font-medium"
						>
							Schedule Appointment
						</button>
					</div>
				</div>
			</nav>
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Modal Overlay */}
			{activeModal && (
				<div
					// onClick={handleOverlayClick}
					className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50"
				>
					<div className="bg-gray-800 border border-cyan-800/30 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative m-4 shadow-xl shadow-cyan-500/10">
						<button
							onClick={handleCloseModal}
							className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 text-2xl"
						>
							&times;
						</button>

						{activeModal === "addPatient" && (
							<PatientForm onClose={handleCloseModal} />
						)}
						{activeModal === "scheduleAppointment" && (
							<AppointmentForm onClose={handleCloseModal} />
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default DashboardNav;
