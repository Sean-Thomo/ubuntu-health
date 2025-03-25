"use client";
import React from "react";
import Link from "next/link";
import { Search, Plus } from "lucide-react";
import { Patient } from "@/types";
import Layout from "../components/Layout";
import PatientsTable from "../components/Tables/PatientsTable";

interface PatientsPageProps {
	patients?: Patient[];
}

const PatientsPage: React.FC<PatientsPageProps> = ({ patients = [] }) => {
	return (
		<Layout>
			<div className="min-h-screen bg-gray-900 text-cyan-50 p-6">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
						<div>
							<h1 className="text-3xl font-bold text-cyan-400">
								Patient Registry
							</h1>
							<p className="text-cyan-400/70 mt-2">
								Manage all patient records and information
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
									placeholder="Search patients..."
									className="pl-10 pr-4 py-2 bg-gray-800 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>
							<Link
								href="/patients/new"
								className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-sm font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
							>
								<Plus size={18} />
								New Patient
							</Link>
						</div>
					</div>

					{/* Patients Table */}
					<PatientsTable patients={patients} />

					{/* Pagination */}
					<div className="flex justify-between items-center mt-6 text-sm text-cyan-400/70">
						<div>
							Showing 1-{patients.length} of {patients.length} patients
						</div>
						<div className="flex gap-2">
							<button className="px-3 py-1 rounded border border-cyan-800/30 hover:bg-cyan-900/30">
								Previous
							</button>
							<button className="px-3 py-1 rounded border border-cyan-800/30 hover:bg-cyan-900/30">
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default PatientsPage;
