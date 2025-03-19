import React from "react";
import Link from "next/link";
import { Trash, SquarePen } from "lucide-react";

interface Prescription {
	id: number;
	patientId: number;
	medicationName: string;
	dosage: string;
	instructions: string;
	issueDate: string;
}

interface PrescriptionsTableProps {
	prescriptions: Prescription[];
}

const PrescriptionsTable: React.FC<PrescriptionsTableProps> = ({
	prescriptions = [],
}) => {
	return (
		<div className="relative overflow-x-auto sm:rounded-tr-lg sm:rounded-tl-lg">
			<table className="w-full text-sm text-left rtl:text-right">
				<thead className="text-xs bg-gray-300 text-gray-600">
					<tr>
						<th scope="col" className="px-6 py-3">
							Patient ID
						</th>
						<th scope="col" className="px-6 py-3">
							Medication
						</th>
						<th scope="col" className="px-6 py-3">
							Dosage
						</th>
						<th scope="col" className="px-6 py-3">
							Instructions
						</th>
						<th scope="col" className="px-6 py-3">
							Issue Date
						</th>
						<th scope="col" className="px-6 py-3">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{prescriptions.map((prescription) => (
						<tr key={prescription.id} className="border-b hover:bg-gray-100">
							<td className="px-6 py-4">{prescription.patientId}</td>
							<td className="px-6 py-4">{prescription.medicationName}</td>
							<td className="px-6 py-4">{prescription.dosage}</td>
							<td className="px-6 py-4">{prescription.instructions}</td>
							<td className="px-6 py-4">{prescription.issueDate}</td>
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

export default PrescriptionsTable;
