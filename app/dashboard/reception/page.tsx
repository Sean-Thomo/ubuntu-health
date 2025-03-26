"use client";
import React, { useState } from "react";
import {
	Search,
	FileText,
	CreditCard,
	Calendar,
	User,
	Pill,
	Clock,
	Check,
	AlertCircle,
	Plus,
	ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Layout from "../../components/Layout";
import ClientDate from "../../components/ClientDate";

const DashboardPage = () => {
	// Mock data - replace with actual API calls
	const stats = {
		patients: 42,
		appointments: 18,
		prescriptions: 27,
		invoices: 15,
		revenue: 58250,
		pendingPayments: 12750,
	};

	const recentPatients = [
		{ id: "P-001", name: "Zethu Johnson", lastVisit: "2023-10-15" },
		{ id: "P-002", name: "Lerato Mbeki", lastVisit: "2023-10-14" },
		{ id: "P-003", name: "Thando Williams", lastVisit: "2023-10-13" },
		{ id: "P-004", name: "Nomsa Khumalo", lastVisit: "2023-10-12" },
	];

	const upcomingAppointments = [
		{
			id: "A-001",
			patient: "Zethu Johnson",
			date: "2023-10-16T09:30",
			type: "Follow-up",
		},
		{
			id: "A-002",
			patient: "Sipho Dlamini",
			date: "2023-10-16T11:00",
			type: "Consultation",
		},
		{
			id: "A-003",
			patient: "Nomsa Khumalo",
			date: "2023-10-17T10:15",
			type: "Checkup",
		},
	];

	const recentInvoices = [
		{
			id: "INV-001",
			patient: "Zethu Johnson",
			amount: 1550,
			status: "paid",
			date: "2023-10-15",
		},
		{
			id: "INV-002",
			patient: "Lerato Mbeki",
			amount: 750,
			status: "sent",
			date: "2023-10-16",
		},
		{
			id: "INV-003",
			patient: "Thando Williams",
			amount: 350,
			status: "overdue",
			date: "2023-10-17",
		},
	];

	const getStatusColor = (status: string) => {
		switch (status) {
			case "paid":
				return "bg-green-900/30 text-green-400";
			case "sent":
				return "bg-blue-900/30 text-blue-400";
			case "overdue":
				return "bg-red-900/30 text-red-400";
			default:
				return "bg-gray-700 text-cyan-400";
		}
	};

	const getStatusIcon = (status: string) => {
		switch (status) {
			case "paid":
				return <Check size={16} />;
			case "overdue":
				return <AlertCircle size={16} />;
			case "sent":
				return <Clock size={16} />;
			default:
				return <FileText size={16} />;
		}
	};

	return (
		<Layout>
			<div className="min-h-screen bg-gray-900 text-cyan-50 p-6">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
						<div>
							<h1 className="text-3xl font-bold text-cyan-400">Dashboard</h1>
							<p className="text-cyan-400/70 mt-2">
								Overview of your medical practice
							</p>
						</div>
						<div className="relative mt-4 md:mt-0">
							<Search
								className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400/50"
								size={18}
							/>
							<input
								type="text"
								placeholder="Search..."
								className="pl-10 pr-4 py-2 bg-gray-800 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
							/>
						</div>
					</div>

					{/* Stats Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
						{/* Patients Card */}
						<Link href="/patients">
							<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-4 hover:bg-gray-800/70 transition-colors cursor-pointer">
								<div className="flex justify-between items-center">
									<div>
										<p className="text-sm text-cyan-400/70">Total Patients</p>
										<p className="text-2xl font-semibold text-cyan-400">
											{stats.patients}
										</p>
									</div>
									<div className="p-3 rounded-full bg-cyan-900/30 text-cyan-400">
										<User size={20} />
									</div>
								</div>
							</div>
						</Link>

						{/* Appointments Card */}
						<Link href="/appointments">
							<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-4 hover:bg-gray-800/70 transition-colors cursor-pointer">
								<div className="flex justify-between items-center">
									<div>
										<p className="text-sm text-cyan-400/70">
											Today&lsquo;s Appointments
										</p>
										<p className="text-2xl font-semibold text-blue-400">
											{stats.appointments}
										</p>
									</div>
									<div className="p-3 rounded-full bg-blue-900/30 text-blue-400">
										<Calendar size={20} />
									</div>
								</div>
							</div>
						</Link>

						{/* Prescriptions Card */}
						<Link href="/prescriptions">
							<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-4 hover:bg-gray-800/70 transition-colors cursor-pointer">
								<div className="flex justify-between items-center">
									<div>
										<p className="text-sm text-cyan-400/70">
											Active Prescriptions
										</p>
										<p className="text-2xl font-semibold text-purple-400">
											{stats.prescriptions}
										</p>
									</div>
									<div className="p-3 rounded-full bg-purple-900/30 text-purple-400">
										<Pill size={20} />
									</div>
								</div>
							</div>
						</Link>

						{/* Revenue Card */}
						<Link href="/invoices">
							<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-4 hover:bg-gray-800/70 transition-colors cursor-pointer">
								<div className="flex justify-between items-center">
									<div>
										<p className="text-sm text-cyan-400/70">Monthly Revenue</p>
										<p className="text-2xl font-semibold text-green-400">
											R{stats.revenue.toLocaleString()}
										</p>
									</div>
									<div className="p-3 rounded-full bg-green-900/30 text-green-400">
										<CreditCard size={20} />
									</div>
								</div>
							</div>
						</Link>
					</div>

					{/* Main Content */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
						{/* Recent Patients */}
						<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-6 lg:col-span-1">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-xl font-semibold text-cyan-400">
									Recent Patients
								</h2>
								<Link
									href="/patients"
									className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
								>
									View all <ChevronRight size={16} />
								</Link>
							</div>
							<div className="space-y-4">
								{recentPatients.map((patient) => (
									<div
										key={patient.id}
										className="flex items-center justify-between p-3 hover:bg-gray-800/70 rounded-lg transition-colors"
									>
										<div>
											<p className="font-medium">{patient.name}</p>
											<p className="text-sm text-cyan-400/70">
												Last visit:{" "}
												<ClientDate dateString={patient.lastVisit} />
											</p>
										</div>
										<Link
											href={`/patients/${patient.id}`}
											className="mt-4 text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
										>
											<ChevronRight size={18} />
										</Link>
									</div>
								))}
							</div>
						</div>

						{/* Upcoming Appointments */}
						<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-6 lg:col-span-1">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-xl font-semibold text-cyan-400">
									Upcoming Appointments
								</h2>
								<Link
									href="/appointments"
									className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
								>
									View all <ChevronRight size={16} />
								</Link>
							</div>
							<div className="space-y-4">
								{upcomingAppointments.map((appointment) => (
									<div
										key={appointment.id}
										className="p-3 hover:bg-gray-800/70 rounded-lg transition-colors"
									>
										<div className="flex justify-between items-start">
											<div>
												<p className="font-medium">{appointment.patient}</p>
												<p className="text-sm text-cyan-400/70">
													{appointment.type}
												</p>
											</div>
											<div className="text-right">
												<p className="text-cyan-400">
													<ClientDate
														dateString={appointment.date}
														// format="h:mm a"
													/>
												</p>
												<p className="text-sm text-cyan-400/70">
													<ClientDate
														dateString={appointment.date}
														// format="MMM d, yyyy"
													/>
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="mt-4">
								<Link
									href="/appointments/new"
									className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-sm font-medium hover:shadow-cyan-500/30 transition-all"
								>
									<Plus size={18} />
									Schedule New Appointment
								</Link>
							</div>
						</div>

						{/* Recent Invoices */}
						<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-6 lg:col-span-1">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-xl font-semibold text-cyan-400">
									Recent Invoices
								</h2>
								<Link
									href="/invoices"
									className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
								>
									View all <ChevronRight size={16} />
								</Link>
							</div>
							<div className="space-y-4">
								{recentInvoices.map((invoice) => (
									<div
										key={invoice.id}
										className="p-3 hover:bg-gray-800/70 rounded-lg transition-colors"
									>
										<div className="flex justify-between items-center">
											<div>
												<p className="font-medium">{invoice.patient}</p>
												<p className="text-sm text-cyan-400/70">
													<ClientDate dateString={invoice.date} />
												</p>
											</div>
											<div className="text-right">
												<p className="font-medium">
													R{invoice.amount.toLocaleString()}
												</p>
												<div className="flex items-center justify-end gap-1">
													<span
														className={`p-1 rounded-full ${getStatusColor(
															invoice.status
														)}`}
													>
														{getStatusIcon(invoice.status)}
													</span>
													<span className="text-sm capitalize">
														{invoice.status}
													</span>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="mt-4">
								<Link
									href="/invoices/new"
									className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-sm font-medium hover:shadow-cyan-500/30 transition-all"
								>
									<Plus size={18} />
									Create New Invoice
								</Link>
							</div>
						</div>
					</div>

					{/* Financial Overview */}
					<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-6 mb-8">
						<h2 className="text-xl font-semibold text-cyan-400 mb-4">
							Financial Overview
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-gray-800/70 p-4 rounded-lg">
								<div className="flex justify-between items-center mb-2">
									<p className="text-sm text-cyan-400/70">Total Revenue</p>
									<CreditCard size={18} className="text-green-400" />
								</div>
								<p className="text-2xl font-semibold text-green-400">
									R{stats.revenue.toLocaleString()}
								</p>
							</div>
							<div className="bg-gray-800/70 p-4 rounded-lg">
								<div className="flex justify-between items-center mb-2">
									<p className="text-sm text-cyan-400/70">Pending Payments</p>
									<Clock size={18} className="text-yellow-400" />
								</div>
								<p className="text-2xl font-semibold text-yellow-400">
									R{stats.pendingPayments.toLocaleString()}
								</p>
							</div>
							<div className="bg-gray-800/70 p-4 rounded-lg">
								<div className="flex justify-between items-center mb-2">
									<p className="text-sm text-cyan-400/70">
										Outstanding Invoices
									</p>
									<AlertCircle size={18} className="text-red-400" />
								</div>
								<p className="text-2xl font-semibold text-red-400">
									{recentInvoices.filter((i) => i.status !== "paid").length}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default DashboardPage;
