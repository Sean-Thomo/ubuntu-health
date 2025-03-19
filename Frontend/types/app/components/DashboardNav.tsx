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

export default function DashboardNav() {
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
			name: "Invoice",
			href: "/invoice",
			icon: FileText,
		},
	];

	const handleOverlayClick = (e: any) => {
		if (e.target === e.currentTarget) {
			handleCloseModal();
		}
	};

	return (
		<>
			<button
				className="md:hidden mb-auto fixed top-4 left-4 z-50 p-2 bg-white shadow-md rounded-full"
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
                    fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform
                    duration-300 ease-in-out md:relative md:translate-x-0 md:w-full md:max-w-xs 
                    md:shadow-none
                    ${isOpen ? "translate-x-0 pt-16" : "-translate-x-full"}
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
					<div className="flex items-center flex-grow flex-col">
						<button
							onClick={() => setActiveModal("addPatient")}
							className="w-4/5 bg-blue-500 text-white py-2 rounded hover:bg-blue-600
                            transition mb-4"
						>
							Add New Patient
						</button>

						<button
							onClick={() => setActiveModal("scheduleAppointment")}
							className="w-4/5 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
						>
							Schedule Appointment
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

			{/* Modal Overlay */}
			{activeModal && (
				<div
					onClick={handleOverlayClick}
					className="fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50"
				>
					<div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative m-0">
						<button
							onClick={handleCloseModal}
							className="absolute top-4 right-4 text-2xl font-bold"
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
}
