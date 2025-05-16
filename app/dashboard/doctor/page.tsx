"use client";
import React from "react";
import {
	Stethoscope,
	Pill,
	ClipboardList,
	AlertTriangle,
	Clock,
	User,
	Plus,
	ChevronRight,
	Search,
} from "lucide-react";
import Link from "next/link";
import Layout from "@/app/components/Layout";
import ClientDate from "@/app/components/ClientDate";

const DoctorDashboard = () => {
	const tenantId = localStorage.getItem("tenantId");

	// Mock data
	const todaysConsultations = [
		{
			id: "C-001",
			patient: "Zethu Johnson",
			time: "2023-10-16T09:30",
			status: "upcoming",
			history: ["Hypertension", "Type 2 Diabetes"],
			notes: "Follow-up on medication adjustment",
		},
		{
			id: "C-002",
			patient: "Lerato Mbeki",
			time: "2023-10-16T10:15",
			status: "upcoming",
			history: ["Asthma"],
			notes: "Annual checkup",
		},
	];

	const pendingPrescriptions = [
		{
			id: "RX-001",
			patient: "Thando Williams",
			medication: "Amoxicillin",
			date: "2023-10-10",
			status: "active",
		},
		{
			id: "RX-002",
			patient: "Nomsa Khumalo",
			medication: "Lisinopril",
			date: "2023-10-12",
			status: "needs-review",
		},
	];

	const labResults = [
		{
			id: "LAB-001",
			patient: "Sipho Dlamini",
			test: "CBC",
			status: "completed",
			date: "2023-10-15",
		},
		{
			id: "LAB-002",
			patient: "Zethu Johnson",
			test: "HbA1c",
			status: "pending",
			date: "2023-10-16",
		},
	];

	return (
		<Layout>
			<div className="min-h-screen   p-6">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
						<div>
							<h1 className="text-3xl font-bold ">Doctor Dashboard</h1>
							<p className=" mt-2">Patient care and clinical management</p>
						</div>
						<div className="relative mt-4 md:mt-0">
							<Search
								className="absolute left-3 top-1/2 -translate-y-1/2 "
								size={18}
							/>
							<input
								type="text"
								placeholder="Search patients, conditions..."
								className="pl-10 pr-4 py-2   border   rounded-md   focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
							/>
						</div>
					</div>

					{/* Stats Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
						<Link href="/appointments">
							<div className="  border   rounded-lg p-4 hover: /70 transition-colors cursor-pointer">
								<div className="flex justify-between items-center">
									<div>
										<p className="text-sm ">Today&lsquo;s Consultations</p>
										<p className="text-2xl font-semibold text-blue-400">5</p>
									</div>
									<div className="p-3 rounded-full bg-blue-900/30 text-blue-400">
										<Stethoscope size={20} />
									</div>
								</div>
							</div>
						</Link>

						<Link href="/prescriptions">
							<div className="  border   rounded-lg p-4 hover: /70 transition-colors cursor-pointer">
								<div className="flex justify-between items-center">
									<div>
										<p className="text-sm ">Active Prescriptions</p>
										<p className="text-2xl font-semibold text-purple-400">18</p>
									</div>
									<div className="p-3 rounded-full bg-purple-900/30 text-purple-400">
										<Pill size={20} />
									</div>
								</div>
							</div>
						</Link>

						<Link href="/lab-results">
							<div className="  border   rounded-lg p-4 hover: /70 transition-colors cursor-pointer">
								<div className="flex justify-between items-center">
									<div>
										<p className="text-sm ">Pending Lab Results</p>
										<p className="text-2xl font-semibold text-yellow-400">3</p>
									</div>
									<div className="p-3 rounded-full bg-yellow-900/30 text-yellow-400">
										<ClipboardList size={20} />
									</div>
								</div>
							</div>
						</Link>

						<Link href="/patients">
							<div className="  border   rounded-lg p-4 hover: /70 transition-colors cursor-pointer">
								<div className="flex justify-between items-center">
									<div>
										<p className="text-sm ">High-Risk Patients</p>
										<p className="text-2xl font-semibold text-red-400">2</p>
									</div>
									<div className="p-3 rounded-full bg-red-900/30 text-red-400">
										<AlertTriangle size={20} />
									</div>
								</div>
							</div>
						</Link>
					</div>

					{/* Main Content */}
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
						{/* Today's Consultations */}
						<div className="  border   rounded-lg p-6 lg:col-span-2">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-xl font-semibold ">
									Today&lsquo;s Consultations
								</h2>
								<Link
									href={`/appointments/${tenantId}`}
									className="text-sm  hover:text-cyan-300 flex items-center"
								>
									View all <ChevronRight size={16} />
								</Link>
							</div>
							<div className="space-y-4">
								{todaysConsultations.map((consult) => (
									<div
										key={consult.id}
										className="p-4 hover: /70 rounded-lg transition-colors border  "
									>
										<div className="flex justify-between items-start">
											<div>
												<p className="font-medium text-lg">{consult.patient}</p>
												<p className="text-sm  mb-2">
													<ClientDate
														dateString={consult.time}
														// format="h:mm a"
													/>
												</p>
												<div className="flex flex-wrap gap-2 mb-2">
													{consult.history.map((condition, idx) => (
														<span
															key={idx}
															className="px-2 py-1   rounded-md text-xs"
														>
															{condition}
														</span>
													))}
												</div>
												<p className="/80 italic">{consult.notes}</p>
											</div>
											<div className="flex flex-col items-end">
												<span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs">
													{consult.status === "upcoming"
														? "Upcoming"
														: "In Progress"}
												</span>
												<Link
													href={`/patients/${consult.id}`}
													className="mt-4 text-sm  hover:text-cyan-300 flex items-center"
												>
													View Patient <ChevronRight size={16} />
												</Link>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Clinical Quick View */}
						<div className="  border   rounded-lg p-6">
							<h2 className="text-xl font-semibold  mb-4">Clinical Tasks</h2>

							{/* Pending Prescriptions */}
							<div className="mb-6">
								<div className="flex justify-between items-center mb-3">
									<h3 className="font-medium ">Prescriptions to Review</h3>
									<Link
										href={`/prescriptions/${tenantId}`}
										className="text-xs  hover:text-cyan-300"
									>
										View all
									</Link>
								</div>
								<div className="space-y-3">
									{pendingPrescriptions.map((rx) => (
										<div
											key={rx.id}
											className="p-3 hover: /70 rounded-lg transition-colors border  "
										>
											<div className="flex justify-between items-center">
												<div>
													<p className="font-medium">{rx.patient}</p>
													<p className="text-sm ">{rx.medication}</p>
												</div>
												<span
													className={`px-2 py-1 rounded-full text-xs ${
														rx.status === "active"
															? "bg-green-900/30 text-green-400"
															: "bg-yellow-900/30 text-yellow-400"
													}`}
												>
													{rx.status === "active" ? "Active" : "Review Needed"}
												</span>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Lab Results */}
							<div className="mb-6">
								<div className="flex justify-between items-center mb-3">
									<h3 className="font-medium ">Lab Results</h3>
									<Link
										href="/lab-results"
										className="text-xs  hover:text-cyan-300"
									>
										View all
									</Link>
								</div>
								<div className="space-y-3">
									{labResults.map((lab) => (
										<div
											key={lab.id}
											className="p-3 hover: /70 rounded-lg transition-colors border  "
										>
											<div className="flex justify-between items-center">
												<div>
													<p className="font-medium">{lab.patient}</p>
													<p className="text-sm ">{lab.test}</p>
												</div>
												<span
													className={`px-2 py-1 rounded-full text-xs ${
														lab.status === "completed"
															? "bg-green-900/30 text-green-400"
															: "bg-yellow-900/30 text-yellow-400"
													}`}
												>
													{lab.status === "completed" ? "Ready" : "Pending"}
												</span>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Quick Actions */}
							<div>
								<h3 className="font-medium  mb-3">Quick Actions</h3>
								<div className="space-y-2">
									<Link
										href="/e-prescribe"
										className="flex items-center gap-2 p-2 hover: /70 rounded transition-colors"
									>
										<Pill size={16} className="" />
										<span>E-Prescribe Medication</span>
									</Link>
									<Link
										href="/notes/new"
										className="flex items-center gap-2 p-2 hover: /70 rounded transition-colors"
									>
										<ClipboardList size={16} className="" />
										<span>Add Clinical Note</span>
									</Link>
									<Link
										href="/lab-orders/new"
										className="flex items-center gap-2 p-2 hover: /70 rounded transition-colors"
									>
										<ClipboardList size={16} className="" />
										<span>Order Lab Test</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default DoctorDashboard;
