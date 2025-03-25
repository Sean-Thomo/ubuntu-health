"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, User } from "lucide-react";
import { Patient } from "@/types/index";

interface PatientsTableProps {
	patients: Patient[];
}

const PatientsTable: React.FC<PatientsTableProps> = ({ patients = [] }) => {
	const router = useRouter();
	const handleRowClick = (patientId: string) => {
		router.push(`/patients/${patientId}`);
	};

	return (
		<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg overflow-hidden shadow-lg shadow-cyan-500/10">
			<div className="overflow-x-auto">
				<table className="w-full text-sm text-cyan-50">
					<thead className="bg-gray-800/70 text-cyan-400">
						<tr>
							<th className="px-6 py-4 text-left">Patient</th>
							<th className="px-6 py-4 text-left">Contact</th>
							<th className="px-6 py-4 text-left">Medical Info</th>
							<th className="px-6 py-4 text-left">Status</th>
							<th className="px-6 py-4 text-left">Actions</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-cyan-800/30">
						{patients.map((patient) => (
							<tr
								key={patient.id}
								className="hover:bg-gray-800/80 transition-colors"
							>
								<td className="px-6 py-4">
									<div className="flex items-center gap-4">
										<div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-900/30 text-cyan-400">
											<User size={18} />
										</div>
										<div>
											<div className="font-medium">
												{patient.firstName} {patient.lastName}
											</div>
											<div className="text-xs text-cyan-400/70">
												ID: {patient.id}
											</div>
										</div>
									</div>
								</td>
								<td className="px-6 py-4">
									<div className="space-y-1">
										<div>{patient.phone || "Not provided"}</div>
										<div className="text-cyan-400/70 text-sm">
											{patient.email || "Not provided"}
										</div>
									</div>
								</td>
								<td className="px-6 py-4">
									<div className="space-y-1">
										<div className="flex items-center gap-2">
											<span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-cyan-400">
												{patient.bloodType || "N/A"}
											</span>
											{(patient.activeConditions?.length || 0) > 0 && (
												<span className="text-xs px-2 py-1 rounded-full bg-red-900/30 text-red-400">
													{patient.activeConditions?.length} active
												</span>
											)}
										</div>
										<div className="text-xs text-cyan-400/70">
											{patient.allergies?.length || 0} allergies
										</div>
									</div>
								</td>
								<td className="px-6 py-4">
									<div className="flex items-center gap-2">
										{patient.medicalAidName ? (
											<span className="text-xs px-2 py-1 rounded-full bg-green-900/30 text-green-400">
												Medical Aid: {patient.medicalAidName}
											</span>
										) : (
											<span className="text-xs px-2 py-1 rounded-full bg-yellow-900/30 text-yellow-400">
												Private Pay
											</span>
										)}
									</div>
								</td>
								<td className="px-6 py-4">
									<div className="flex gap-4">
										<Link
											href={`/patients/${patient.id}`}
											className="text-cyan-400 hover:text-cyan-300 transition-colors"
											title="View Patient"
										>
											<Pencil size={18} />
										</Link>
										<button
											className="text-red-400 hover:text-red-300 transition-colors"
											title="Delete Patient"
										>
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
	);
};

export default PatientsTable;
