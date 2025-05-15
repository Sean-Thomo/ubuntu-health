import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, User } from "lucide-react";
import { Patient } from "@/types/index";

interface PatientsTableProps {
	patients: Patient[];
}

const PatientsTableCard = ({ patients }: PatientsTableProps) => {
	const router = useRouter();
	const handleRowClick = (id: string) => {
		router.push(`/patients/${id}`);
	};

	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
			<div className="overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-700">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 font-medium text-gray-700">Patient</th>
							<th className="px-6 py-3 font-medium text-gray-700">Contact</th>
							<th className="px-6 py-3 font-medium text-gray-700">
								Medical Info
							</th>
							<th className="px-6 py-3 font-medium text-gray-700">Status</th>
							<th className="px-6 py-3 font-medium text-gray-700">Actions</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200">
						{patients.map((patient) => (
							<tr
								onClick={() => handleRowClick(patient.id)}
								key={patient.id}
								className="hover:bg-gray-50 transition-colors cursor-pointer"
							>
								<td className="px-6 py-4">
									<div className="flex items-center gap-4">
										<div
											className="flex items-center justify-center w-10 h-10 rounded-full
                    bg-blue-50 text-blue-600"
										>
											<User size={18} />
										</div>
										<div>
											<div className="font-medium text-gray-900">
												{patient.firstName} {patient.lastName}
											</div>
											<div className="text-xs text-gray-500">
												ID: {patient.id}
											</div>
										</div>
									</div>
								</td>
								<td className="px-6 py-4">
									<div className="space-y-1">
										<div className="text-gray-900">
											{patient.phone || "Not provided"}
										</div>
										<div className="text-gray-500 text-sm">
											{patient.email || "Not provided"}
										</div>
									</div>
								</td>
								<td className="px-6 py-4">
									<div className="space-y-1">
										<div className="flex items-center gap-2">
											<span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
												{patient.bloodType || "N/A"}
											</span>
											{(patient.activeConditions?.length || 0) > 0 && (
												<span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800">
													{patient.activeConditions?.length} active
												</span>
											)}
										</div>
										<div className="text-xs text-gray-500">
											{patient.allergies?.length || 0} allergies
										</div>
									</div>
								</td>
								<td className="px-6 py-4">
									<div className="flex items-center gap-2">
										{patient.medicalAidName ? (
											<span
												className="text-xs px-2 py-1 rounded-full bg-green-100
                      text-green-800"
											>
												Medical Aid: {patient.medicalAidName}
											</span>
										) : (
											<span
												className="text-xs px-2 py-1 rounded-full bg-yellow-100
                      text-yellow-800"
											>
												Private Pay
											</span>
										)}
									</div>
								</td>
								<td className="px-6 py-4">
									<div className="flex gap-4">
										<Link
											href={`/patients/${patient.id}`}
											className="text-blue-600 hover:text-blue-800 transition-colors"
											title="View Patient"
											onClick={(e) => e.stopPropagation()}
										>
											<Pencil size={18} />
										</Link>
										<button
											className="text-red-600 hover:text-red-800 transition-colors"
											title="Delete Patient"
											onClick={(e) => e.stopPropagation()}
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

			{/* Pagination */}
			<div className="flex justify-between items-center mt-6 text-sm text-gray-600">
				<div>
					Showing 1-{patients.length} of {patients.length} patients
				</div>
				<div className="flex gap-2">
					<button
						className="px-3 py-1 rounded border border-gray-300 bg-white
          hover:bg-gray-50 transition-colors"
					>
						Previous
					</button>
					<button
						className="px-3 py-1 rounded border border-gray-300 bg-white
          hover:bg-gray-50 transition-colors"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default PatientsTableCard;
