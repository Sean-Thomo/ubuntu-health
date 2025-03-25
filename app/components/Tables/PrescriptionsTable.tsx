import React from "react";
import Link from "next/link";
import { Trash, Pencil } from "lucide-react";
import { Prescription } from "@/types";

interface PrescriptionsTableProps {
	prescriptions: Prescription[];
}

const PrescriptionsTable: React.FC<PrescriptionsTableProps> = ({
	prescriptions = [],
}) => {
	return (
		<div className="g-gray-800/50 border border-cyan-800/30 rounded-lg overflow-hidden">
			<table className="w-full text-sm ">
				<thead>
					<tr className="bg-gray-800/70">
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
							<td className="px-6 py-4">{prescription.medication}</td>
							<td className="px-6 py-4">{prescription.dosage}</td>
							<td className="px-6 py-4">{prescription.frequency}</td>
							<td className="px-6 py-4">{prescription.startDate}</td>
							<td className="px-6 py-4 flex gap-2">
								<Link href={"#"}>
									<Pencil
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
