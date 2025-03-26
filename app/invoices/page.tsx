"use client";
import React, { useState } from "react";
import {
	Search,
	Plus,
	FileText,
	Printer,
	Download,
	ChevronDown,
	Check,
	Clock,
	AlertCircle,
} from "lucide-react";
import Link from "next/link";
import Layout from "../components/Layout";
import ClientDate from "../components/ClientDate";

interface Invoice {
	id: string;
	invoiceNumber: string;
	patientName: string;
	date: string;
	dueDate: string;
	amount: number;
	status: "draft" | "sent" | "paid" | "overdue";
	services: {
		name: string;
		cost: number;
	}[];
}

const InvoicePage = () => {
	const [filter, setFilter] = useState<
		"all" | "draft" | "sent" | "paid" | "overdue"
	>("all");
	const [searchQuery, setSearchQuery] = useState("");

	// Mock data - replace with API calls
	const invoices: Invoice[] = [
		{
			id: "INV-001",
			invoiceNumber: "INV-2023-001",
			patientName: "Zethu Johnson",
			date: "2023-10-15",
			dueDate: "2023-11-15",
			amount: 1550,
			status: "paid",
			services: [
				{ name: "Annual Checkup", cost: 1200 },
				{ name: "Blood Test", cost: 350 },
			],
		},
		{
			id: "INV-002",
			invoiceNumber: "INV-2023-002",
			patientName: "Lerato Mbeki",
			date: "2023-10-16",
			dueDate: "2023-11-16",
			amount: 750,
			status: "sent",
			services: [{ name: "Dental Procedure", cost: 750 }],
		},
		{
			id: "INV-003",
			invoiceNumber: "INV-2023-003",
			patientName: "Thando Williams",
			date: "2023-10-17",
			dueDate: "2023-11-17",
			amount: 350,
			status: "overdue",
			services: [{ name: "Lab Tests", cost: 350 }],
		},
		{
			id: "INV-004",
			invoiceNumber: "INV-2023-004",
			patientName: "Nomsa Khumalo",
			date: "2023-10-18",
			dueDate: "2023-11-18",
			amount: 1800,
			status: "draft",
			services: [{ name: "Vaccination", cost: 1800 }],
		},
	];

	const filteredInvoices = invoices.filter((invoice) => {
		const matchesFilter = filter === "all" || invoice.status === filter;
		const matchesSearch =
			invoice.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			invoice.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesFilter && matchesSearch;
	});

	const getStatusColor = (status: string) => {
		switch (status) {
			case "draft":
				return "bg-gray-700 text-cyan-400";
			case "sent":
				return "bg-blue-900/30 text-blue-400";
			case "paid":
				return "bg-green-900/30 text-green-400";
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
							<h1 className="text-3xl font-bold text-cyan-400">Invoices</h1>
							<p className="text-cyan-400/70 mt-2">
								Manage and track formal patient invoices
							</p>
						</div>
						<div className="flex gap-4 mt-4 md:mt-0">
							<div className="relative">
								<Search
									className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400/50"
									size={18}
								/>
								<input
									type="text"
									placeholder="Search invoices..."
									className="pl-10 pr-4 py-2 bg-gray-800 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
							</div>
							<Link
								href="/invoices/new"
								className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-sm font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
							>
								<Plus size={18} />
								New Invoice
							</Link>
						</div>
					</div>

					{/* Stats Cards */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
						<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-4">
							<div className="flex justify-between items-center">
								<div>
									<p className="text-sm text-cyan-400/70">Total Invoices</p>
									<p className="text-2xl font-semibold text-cyan-400">
										{invoices.length}
									</p>
								</div>
								<div className="p-3 rounded-full bg-cyan-900/30 text-cyan-400">
									<FileText size={20} />
								</div>
							</div>
						</div>

						<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-4">
							<div className="flex justify-between items-center">
								<div>
									<p className="text-sm text-cyan-400/70">Amount Due</p>
									<p className="text-2xl font-semibold text-yellow-400">
										R
										{invoices
											.filter((i) => i.status !== "paid")
											.reduce((sum, i) => sum + i.amount, 0)
											.toLocaleString()}
									</p>
								</div>
								<div className="p-3 rounded-full bg-yellow-900/30 text-yellow-400">
									<AlertCircle size={20} />
								</div>
							</div>
						</div>

						<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-4">
							<div className="flex justify-between items-center">
								<div>
									<p className="text-sm text-cyan-400/70">Overdue</p>
									<p className="text-2xl font-semibold text-red-400">
										{invoices.filter((i) => i.status === "overdue").length}
									</p>
								</div>
								<div className="p-3 rounded-full bg-red-900/30 text-red-400">
									<Clock size={20} />
								</div>
							</div>
						</div>

						<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-4">
							<div className="flex justify-between items-center">
								<div>
									<p className="text-sm text-cyan-400/70">Paid</p>
									<p className="text-2xl font-semibold text-green-400">
										R
										{invoices
											.filter((i) => i.status === "paid")
											.reduce((sum, i) => sum + i.amount, 0)
											.toLocaleString()}
									</p>
								</div>
								<div className="p-3 rounded-full bg-green-900/30 text-green-400">
									<Check size={20} />
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
									? "bg-cyan-900/30 border-cyan-500/50 text-cyan-400"
									: "border-cyan-800/30 text-cyan-400/70 hover:bg-cyan-900/20"
							}`}
						>
							All Invoices
						</button>
						<button
							onClick={() => setFilter("draft")}
							className={`px-4 py-2 rounded-md text-sm font-medium border ${
								filter === "draft"
									? "bg-gray-700 border-gray-500/50 text-cyan-400"
									: "border-cyan-800/30 text-cyan-400/70 hover:bg-cyan-900/20"
							}`}
						>
							Drafts
						</button>
						<button
							onClick={() => setFilter("sent")}
							className={`px-4 py-2 rounded-md text-sm font-medium border ${
								filter === "sent"
									? "bg-blue-900/30 border-blue-500/50 text-blue-400"
									: "border-cyan-800/30 text-cyan-400/70 hover:bg-cyan-900/20"
							}`}
						>
							Sent
						</button>
						<button
							onClick={() => setFilter("paid")}
							className={`px-4 py-2 rounded-md text-sm font-medium border ${
								filter === "paid"
									? "bg-green-900/30 border-green-500/50 text-green-400"
									: "border-cyan-800/30 text-cyan-400/70 hover:bg-cyan-900/20"
							}`}
						>
							Paid
						</button>
						<button
							onClick={() => setFilter("overdue")}
							className={`px-4 py-2 rounded-md text-sm font-medium border ${
								filter === "overdue"
									? "bg-red-900/30 border-red-500/50 text-red-400"
									: "border-cyan-800/30 text-cyan-400/70 hover:bg-cyan-900/20"
							}`}
						>
							Overdue
						</button>
					</div>

					{/* Invoices Table */}
					<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg overflow-hidden shadow-lg shadow-cyan-500/10">
						<div className="overflow-x-auto">
							<table className="w-full text-sm text-cyan-50">
								<thead className="bg-gray-800/70 text-cyan-400">
									<tr>
										<th className="px-6 py-4 text-left">Invoice #</th>
										<th className="px-6 py-4 text-left">Patient</th>
										<th className="px-6 py-4 text-left">Date</th>
										<th className="px-6 py-4 text-left">Due Date</th>
										<th className="px-6 py-4 text-left">Amount</th>
										<th className="px-6 py-4 text-left">Status</th>
										<th className="px-6 py-4 text-left">Actions</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-cyan-800/30">
									{filteredInvoices.map((invoice) => (
										<tr
											key={invoice.id}
											className="hover:bg-gray-800/80 transition-colors"
										>
											<td className="px-6 py-4 font-mono text-cyan-400/80">
												{invoice.invoiceNumber}
											</td>
											<td className="px-6 py-4">{invoice.patientName}</td>
											<td className="px-6 py-4">
												<ClientDate dateString={invoice.date} />
											</td>
											<td className="px-6 py-4">
												<ClientDate dateString={invoice.dueDate} />
											</td>
											<td className="px-6 py-4 font-medium">
												R{invoice.amount.toLocaleString()}
											</td>
											<td className="px-6 py-4">
												<div className="flex items-center gap-2">
													<span
														className={`p-1.5 rounded-full ${getStatusColor(
															invoice.status
														)}`}
													>
														{getStatusIcon(invoice.status)}
													</span>
													<span className="capitalize">{invoice.status}</span>
												</div>
											</td>
											<td className="px-6 py-4">
												<div className="flex gap-4">
													<button
														className="text-cyan-400 hover:text-cyan-300 transition-colors"
														title="View"
													>
														<FileText size={18} />
													</button>
													<button
														className="text-cyan-400 hover:text-cyan-300 transition-colors"
														title="Print"
													>
														<Printer size={18} />
													</button>
													<button
														className="text-cyan-400 hover:text-cyan-300 transition-colors"
														title="Download"
													>
														<Download size={18} />
													</button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						{/* Empty State */}
						{filteredInvoices.length === 0 && (
							<div className="p-8 text-center">
								<FileText className="mx-auto text-cyan-400/50" size={48} />
								<h3 className="mt-4 text-lg font-medium text-cyan-400">
									No invoices found
								</h3>
								<p className="mt-2 text-cyan-400/70">
									{searchQuery
										? "Try a different search term"
										: "Create a new invoice to get started"}
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default InvoicePage;
