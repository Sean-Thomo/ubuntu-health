"use client";
import React, { useState } from "react";
import { Pill, Calendar, Pencil, Trash2 } from "lucide-react";
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
				<div className="bg-white border border-gray-200 rounded-xl p-8 text-center mt-8 shadow-sm">
					<Pill className="mx-auto text-gray-400" size={48} />
					<h2 className="mt-4 text-lg font-bold text-gray-800">
						No prescriptions found
					</h2>
					<p className="mt-2 text-gray-600">Create a new prescription.</p>
				</div>
			) : (
				/* Prescriptions Table */
				<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
					<div className="overflow-x-auto">
						<table className="w-full text-sm text-left text-gray-700">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-6 py-3 font-medium text-gray-700">
										Patient ID
									</th>
									<th className="px-6 py-3 font-medium text-gray-700">
										Medication
									</th>
									<th className="px-6 py-3 font-medium text-gray-700">
										Dosage
									</th>
									<th className="px-6 py-3 font-medium text-gray-700">
										Instructions
									</th>
									<th className="px-6 py-3 font-medium text-gray-700">
										Issue Date
									</th>
									<th className="px-6 py-3 font-medium text-gray-700">
										Action
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								{prescriptions.map((prescription) => (
									<tr
										key={prescription.prescriptionId}
										className="hover:bg-gray-50 transition-colors"
									>
										<td className="px-6 py-4 font-mono text-gray-900">
											{prescription.patientId}
										</td>
										<td className="px-6 py-4">
											<div className="flex items-center gap-2">
												<Pill className="text-blue-600" size={16} />
												<span className="text-gray-900">
													{prescription.medications.map((medication, index) => (
														<span key={index}>
															{medication.name}
															{index < prescription.medications.length - 1 &&
																", "}
														</span>
													))}
												</span>
											</div>
										</td>
										<td className="px-6 py-4">
											<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
												{prescription.dosage}
											</span>
										</td>
										<td className="px-6 py-4 max-w-xs">
											<p className="text-gray-500 text-sm line-clamp-2">
												{prescription.frequency}
											</p>
										</td>
										<td className="px-6 py-4">
											<div className="flex items-center gap-2 text-gray-500">
												<Calendar size={14} />
												<span>
													{new Date(
														prescription.issueDate
													).toLocaleDateString()}
												</span>
											</div>
										</td>
										<td className="px-6 py-4">
											<div className="flex gap-4">
												<button className="text-blue-600 hover:text-blue-800 transition-colors">
													<Pencil size={18} />
												</button>
												<button className="text-red-600 hover:text-red-800 transition-colors">
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
