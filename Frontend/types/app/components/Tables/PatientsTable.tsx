import React from "react";
import Link from "next/link";
import { Trash, SquarePen } from "lucide-react";

interface Patient {
	id: number;
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
	phone: string;
	medicalAidName: string;
}

interface PatientsTableProps {
	patients: Patient[];
}

const PatientsTable: React.FC<PatientsTableProps> = ({ patients = [] }) => {
	return (
		<div className="relative overflow-x-auto sm:rounded-tr-lg sm:rounded-tl-lg">
			<table className="w-full text-sm text-left rtl:text-right">
				<thead className="text-xs bg-gray-300 text-gray-600">
					<tr>
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
						<tr key={patient.id} className="border-b hover:bg-gray-50">
							<td className="p-3">{`${patient.firstName} ${patient.lastName}`}</td>
							<td className="p-3">{patient.gender.toUpperCase()}</td>
							<td className="p-3">{patient.phone}</td>
							<td className="p-3">
								{patient.medicalAidName === "" ? "N/A" : patient.medicalAidName}
							</td>
							<td className="px-6 py-4 flex gap-2">
								<Link href={"#"}>
									<SquarePen
										className="text-blue-300 hover:text-blue-600"
										size={20}
									/>
								</Link>
								<Link href={"#"}>
									<Trash
										xlinkTitle="Delete"
										className="text-red-400 hover:text-red-600"
										size={20}
									/>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PatientsTable;
