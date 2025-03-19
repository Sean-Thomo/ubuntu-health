import React from "react";
import Link from "next/link";

interface Prescription {
	id: number;
	patientId: number;
	medicationName: string;
	dosage: string;
	instructions: string;
	issueDate: string;
}

interface PrescriptionsCardProps {
	prescriptions: Prescription[];
}

const PrescriptionsTableCard: React.FC<PrescriptionsCardProps> = ({
	prescriptions = [],
}) => {
	return (
		<div className="relative overflow-x-auto sm:rounded-tr-lg sm:rounded-tl-lg">
			<table className="w-full text-sm text-left">
				<thead className="text-sx uppercase">
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
					</tr>
				</thead>
				<tbody>
					{prescriptions.map((prescription) => (
						<tr key={prescription.id} className="border-b">
							<td className="px py-4">{prescription.patientId}</td>
							<td className="px py-4">{prescription.medicationName}</td>
							<td className="px py-4">{prescription.dosage}</td>
							<td className="px py-4">{prescription.instructions}</td>
							<td className="px py-4">{prescription.issueDate}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PrescriptionsTableCard;
