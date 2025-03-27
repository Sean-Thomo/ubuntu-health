"use client";
import React, { useState } from "react";
import PrescriptionsTableCard from "../components/Cards/PrescriptionsTableCard";
import { Search, Plus } from "lucide-react";
import Layout from "../components/Layout";
import PrescriptionsTable from "../components/Tables/PrescriptionsTable";

const Page = () => {
	const [activeModal, setActiveModal] = useState("");
	const handleCloseModal = () => setActiveModal("");
	return (
		<Layout>
			<div className="min-h-screen   p-6">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
						<div>
							<h1 className="text-3xl font-bold  ">Prescriptions Registry</h1>
							<p className="  mt-2">
								Manage all patient prescriptions and medications
							</p>
						</div>
						<div className="flex gap-4 mt-4 md:mt-0">
							<div className="flex items-center relative">
								<Search
									className="absolute left-3 top-1/2 -translate-y-1/2  "
									size={18}
								/>
								<input
									type="text"
									placeholder="Search prescriptions..."
									className="pl-10 pr-4 py-2   border   rounded-md   focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
								/>
							</div>
							<button
								onClick={() => setActiveModal("schedulePrescription")}
								className="w-44 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500  py-2 rounded-md 
                                hover:shadow-cyan-500/30 shadow-lg transition-all font-medium"
							>
								<Plus size={18} />
								New Prescription
							</button>
						</div>
					</div>

					<PrescriptionsTable />
				</div>
			</div>
		</Layout>
	);
};

export default Page;
