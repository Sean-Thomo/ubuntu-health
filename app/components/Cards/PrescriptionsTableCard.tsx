"use client";
import React from "react";
import Link from "next/link";
import { Search, Plus, Pill, Calendar, Pencil, Trash2 } from "lucide-react";
import { Prescription } from "@/types";

interface PrescriptionsPageProps {
	prescriptions: Prescription[];
}

const PrescriptionsTableCard: React.FC<PrescriptionsPageProps> = ({
	prescriptions = [],
}) => {
	return (
		<div>
			{prescriptions.length === 0 ? (
				<div className="  border border--800/30 rounded-lg p-8 text-center mt-8">
					<Pill className="mx-auto " size={48} />
					<h3 className="mt-4 text-lg font-medium ">No prescriptions found</h3>
					<p className="mt-2 ">Create a new prescription to get started</p>
					<Link
						href="/prescriptions/new"
						className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from--500 to-blue-500 rounded-md text-sm font-medium shadow-lg shadow--500/20 hover:shadow--500/40 transition-all"
					>
						<Plus size={18} />
						New Prescription
					</Link>
				</div>
			) : (
				/* Prescriptions Table */
				<div className="  border border--800/30 rounded-lg overflow-hidden shadow-lg shadow--500/10">
					<div className="overflow-x-auto">
						<table className="w-full text-sm text--50">
							<thead className=" /70 ">
								<tr>
									<th className="px-6 py-4 text-left">Patient ID</th>
									<th className="px-6 py-4 text-left">Medication</th>
									<th className="px-6 py-4 text-left">Dosage</th>
									<th className="px-6 py-4 text-left">Instructions</th>
									<th className="px-6 py-4 text-left">Issue Date</th>
									<th className="px-6 py-4 text-left">Action</th>
								</tr>
							</thead>
							<tbody className="divide-y divide--800/30">
								{prescriptions.map((prescription) => (
									<tr
										key={prescription.id}
										className="hover: /80 transition-colors"
									>
										<td className="px-6 py-4">
											<span className="font-mono /80">
												{prescription.patientId}
											</span>
										</td>
										<td className="px-6 py-4">
											<div className="flex items-center gap-2">
												<Pill className="" size={16} />
												<span>{prescription.medication}</span>
											</div>
										</td>
										<td className="px-6 py-4">
											<span className="bg--900/30  px-2 py-1 rounded text-xs">
												{prescription.dosage}
											</span>
										</td>
										<td className="px-6 py-4 max-w-xs">
											<p className="/80 text-sm line-clamp-2">
												{prescription.frequency}
											</p>
										</td>
										<td className="px-6 py-4">
											<div className="flex items-center gap-2 /80">
												<Calendar size={14} />
												<span>
													{new Date(
														prescription.startDate
													).toLocaleDateString()}
												</span>
											</div>
										</td>
										<td className="px-6 py-4">
											<div className="flex gap-4">
												<button className=" hover:text--300 transition-colors">
													<Pencil size={18} />
												</button>
												<button className="text-red-400 hover:text-red-300 transition-colors">
													<Trash2 size={18} />
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	);
};

export default PrescriptionsTableCard;
