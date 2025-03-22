"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SquarePen, Trash } from "lucide-react";

interface Patient {
	id: string;
	firstName: string;
	lastName: string;
	gender: string;
	phone: string;
	medicalAidName: string;
}

interface PatientsTableProps {
	patients: Patient[];
}

const PatientsTable: React.FC<PatientsTableProps> = ({ patients = [] }) => {
	const router = useRouter();
	const handleRowClick = (patientId: string) => {
		router.push(`/patients/${patientId}`);
	};

	return (
		<div className="g-gray-800/50 border border-cyan-800/30 rounded-lg overflow-hidden">
			<table className="w-full text-sm ">
				<thead>
					<tr className="bg-gray-800/70">
						<th scope="col" className="px-6 py-3">
							Patient Name
						</th>
						<th scope="col" className="px-6 py-3">
							Sex
						</th>
						<th scope="col" className="px-6 py-3">
							Phone Number
						</th>
						<th scope="col" className="px-6 py-3">
							Medical Aid
						</th>
						<th scope="col" className="px-6 py-3">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{patients.map((patient) => (
						<tr
							key={patient.id}
							className="border-b hover:bg-gray-50 cursor-pointer"
							onClick={(e) => {
								if (!(e.target as HTMLElement).closest("a")) {
									handleRowClick(patient.id);
								}
							}}
						>
							<td className="p-3">{`${patient.firstName} ${patient.lastName}`}</td>
							<td className="p-3">{patient.gender.toUpperCase()}</td>
							<td className="p-3">{patient.phone}</td>
							<td className="p-3">
								{patient.medicalAidName === "" ? "N/A" : patient.medicalAidName}
							</td>
							<td className="px-6 py-4 flex gap-2">
								<Link
									href={`/patients/${patient.id}/edit`}
									onClick={(e) => e.stopPropagation()}
								>
									<SquarePen
										className="text-blue-300 hover:text-blue-600"
										size={20}
									/>
								</Link>
								<button
									onClick={(e) => {
										e.stopPropagation();
									}}
								>
									<Trash
										xlinkTitle="Delete"
										className="text-red-400 hover:text-red-600"
										size={20}
									/>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PatientsTable;
