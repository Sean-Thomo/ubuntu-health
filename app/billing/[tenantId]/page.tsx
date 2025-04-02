"use client";
import React, { useState } from "react";
import {
	Search,
	Plus,
	CreditCard,
	Filter,
	Download,
	Printer,
	MoreVertical,
} from "lucide-react";
import Link from "next/link";
import Layout from "@/app/components/Layout";
import ClientDate from "@/app/components/ClientDate";
import BillForm from "@/app/components/Forms/BillForm";

interface Bill {
	id: string;
	invoiceNumber: string;
	patientName: string;
	date: string;
	amount: number;
	status: "paid" | "pending" | "overdue" | "cancelled";
	service: string;
}

const BillingPage = () => {
	const [filter, setFilter] = useState<"all" | "paid" | "pending" | "overdue">(
		"all"
	);
	const [isOpen, setIsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [activeModal, setActiveModal] = useState("");

	const handleCloseModal = () => setActiveModal("");

	// Mock data - replace with your actual data fetching
	const bills: Bill[] = [
		{
			id: "B-001",
			invoiceNumber: "INV-2023-001",
			patientName: "Zethu Johnson",
			date: "",
			amount: 1200,
			status: "paid",
			service: "Annual Checkup",
		},
		{
			id: "B-002",
			invoiceNumber: "INV-2023-002",
			patientName: "Lerato Mbeki",
			date: "",
			amount: 750,
			status: "pending",
			service: "Dental Procedure",
		},
		{
			id: "B-003",
			invoiceNumber: "INV-2023-003",
			patientName: "Thando Williams",
			date: "",
			amount: 350,
			status: "overdue",
			service: "Lab Tests",
		},
		{
			id: "B-004",
			invoiceNumber: "INV-2023-004",
			patientName: "Nomsa Khumalo",
			date: "",
			amount: 1800,
			status: "paid",
			service: "Vaccination",
		},
		{
			id: "B-005",
			invoiceNumber: "INV-2023-005",
			patientName: "Sipho Dlamini",
			date: "",
			amount: 420,
			status: "pending",
			service: "Consultation",
		},
	];

	const filteredBills = bills.filter((bill) => {
		const matchesFilter = filter === "all" || bill.status === filter;
		const matchesSearch =
			bill.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			bill.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesFilter && matchesSearch;
	});

	const totalPaid = bills
		.filter((b) => b.status === "paid")
		.reduce((sum, b) => sum + b.amount, 0);
	const totalPending = bills
		.filter((b) => b.status === "pending")
		.reduce((sum, b) => sum + b.amount, 0);
	const totalOverdue = bills
		.filter((b) => b.status === "overdue")
		.reduce((sum, b) => sum + b.amount, 0);

	const getStatusColor = (status: string) => {
		switch (status) {
			case "paid":
				return "bg-green-900/30 text-green-400";
			case "pending":
				return "bg-yellow-900/30 text-yellow-400";
			case "overdue":
				return "bg-red-900/30 text-red-400";
			case "cancelled":
				return "  text-blue-400";
			default:
				return "  text-blue-400";
		}
	};

	return (
		<Layout>
			<div className="min-h-screen p-6">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
						<div>
							<h1 className="text-3xl font-bold">Billing</h1>
							<p className="mt-2">Manage patient invoices and payments</p>
						</div>
						<div className="flex gap-4 mt-4 md:mt-0">
							<div className="relative">
								<Search
									className="absolute left-3 top-1/2 -translate-y-1/2"
									size={18}
								/>
								<input
									type="text"
									placeholder="Search bills..."
									className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
							</div>
							<button
								onClick={() => setActiveModal("addBill")}
								className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-md text-white text-sm font-medium hover:bg-blue-700 transition-colors"
							>
								<Plus size={18} />
								New Invoice
							</button>
						</div>
					</div>

					{/* Stats Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						<div className="border rounded-lg p-4">
							<div className="flex justify-between items-center">
								<div>
									<p className="text-sm ">Total Paid</p>
									<p className="text-2xl font-semibold text-green-400">
										R{totalPaid.toLocaleString()}
									</p>
								</div>
								<div className="p-3 rounded-full bg-green-900/30 text-green-400">
									<CreditCard size={20} />
								</div>
							</div>
						</div>

						<div className="  border   rounded-lg p-4">
							<div className="flex justify-between items-center">
								<div>
									<p className="text-sm ">Pending Payments</p>
									<p className="text-2xl font-semibold text-yellow-400">
										R{totalPending.toLocaleString()}
									</p>
								</div>
								<div className="p-3 rounded-full bg-yellow-900/30 text-yellow-400">
									<CreditCard size={20} />
								</div>
							</div>
						</div>

						<div className="  border   rounded-lg p-4">
							<div className="flex justify-between items-center">
								<div>
									<p className="text-sm ">Overdue</p>
									<p className="text-2xl font-semibold text-red-400">
										R{totalOverdue.toLocaleString()}
									</p>
								</div>
								<div className="p-3 rounded-full bg-red-900/30 text-red-400">
									<CreditCard size={20} />
								</div>
							</div>
						</div>
					</div>

					{/* Filters */}
					<div className="flex flex-wrap gap-3 mb-6">
						<button
							onClick={() => setFilter("all")}
							className={`px-4 py-2 rounded-md text-sm font-medium border ${
								filter === "all"
									? "  border-cyan-500/50"
									: "   hover:bg-cyan-900/20"
							}`}
						>
							All Bills
						</button>
						<button
							onClick={() => setFilter("paid")}
							className={`px-4 py-2 rounded-md text-sm font-medium border ${
								filter === "paid"
									? "bg-green-900/30 border-green-500/50 text-green-400"
									: "   hover:bg-cyan-900/20"
							}`}
						>
							Paid
						</button>
						<button
							onClick={() => setFilter("pending")}
							className={`px-4 py-2 rounded-md text-sm font-medium border ${
								filter === "pending"
									? "bg-yellow-900/30 border-yellow-500/50 text-yellow-400"
									: "   hover:bg-cyan-900/20"
							}`}
						>
							Pending
						</button>
						<button
							onClick={() => setFilter("overdue")}
							className={`px-4 py-2 rounded-md text-sm font-medium border ${
								filter === "overdue"
									? "bg-red-900/30 border-red-500/50 text-red-400"
									: "   hover:bg-cyan-900/20"
							}`}
						>
							Overdue
						</button>
					</div>

					{/* Bills Table */}
					<div className="border rounded-lg overflow-hidden shadow-lg">
						<div className="overflow-x-auto">
							<table className="w-full text-sm  ">
								<thead className=" /70">
									<tr>
										<th className="px-6 py-4 text-left">Invoice #</th>
										<th className="px-6 py-4 text-left">Patient</th>
										<th className="px-6 py-4 text-left">Service</th>
										<th className="px-6 py-4 text-left">Date</th>
										<th className="px-6 py-4 text-left">Amount</th>
										<th className="px-6 py-4 text-left">Status</th>
										<th className="px-6 py-4 text-left">Action</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-cyan-800/30">
									{filteredBills.map((bill) => (
										<tr key={bill.id} className="hover: /80 transition-colors">
											<td className="px-6 py-4 font-mono/80">
												{bill.invoiceNumber}
											</td>
											<td className="px-6 py-4">{bill.patientName}</td>
											<td className="px-6 py-4/80">{bill.service}</td>
											<td className="px-6 py-4">
												{" "}
												<ClientDate dateString={bill.date} />
											</td>
											<td className="px-6 py-4 font-medium">
												R{bill.amount.toLocaleString()}
											</td>
											<td className="px-6 py-4">
												<span
													className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
														bill.status
													)}`}
												>
													{bill.status.charAt(0).toUpperCase() +
														bill.status.slice(1)}
												</span>
											</td>
											<td className="px-6 py-4">
												<div className="flex gap-4">
													<button className="transition-colors" title="View">
														<CreditCard size={18} />
													</button>
													<button className="transition-colors" title="Print">
														<Printer size={18} />
													</button>
													<button className="transition-colors" title="More">
														<MoreVertical size={18} />
													</button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						{/* Empty State */}
						{filteredBills.length === 0 && (
							<div className="p-8 text-center">
								<CreditCard className="mx-auto" size={48} />
								<h3 className="mt-4 text-lg font-medium">No bills found</h3>
								<p className="mt-2 ">
									{searchQuery
										? "Try a different search term"
										: "Create a new invoice to get started"}
								</p>
							</div>
						)}
					</div>
				</div>
			</div>

			{isOpen && (
				<div
					className="fixed inset-0 backdrop-blur-sm z-30 md:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{activeModal && (
				<div>
					{activeModal === "addBill" && <BillForm onClose={handleCloseModal} />}
				</div>
			)}
		</Layout>
	);
};

export default BillingPage;
