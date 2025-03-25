import { Prescription } from "@/types";
import React from "react";

interface PrescriptionsOverviewProps {
	activePrescriptions: any[];
	pastPrescriptions: any[];
}

const PrescriptionsOverview: React.FC<PrescriptionsOverviewProps> = ({
	activePrescriptions,
	pastPrescriptions,
}) => {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-cyan-400 text-lg font-medium mb-4">
					Active Prescriptions
				</h2>
				{activePrescriptions.length > 0 ? (
					<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg overflow-hidden">
						<table className="w-full text-sm">
							<thead>
								<tr className="bg-gray-800/70">
									<th className="text-left p-4">Medication</th>
									<th className="text-left p-4">Dosage</th>
									<th className="text-left p-4">Frequency</th>
									<th className="text-left p-4">Start Date</th>
									<th className="text-left p-4">End Date</th>
								</tr>
							</thead>
							<tbody>
								{activePrescriptions.map((prescription: any) => (
									<tr
										key={prescription.id}
										className="border-t border-cyan-800/20"
									>
										<td className="p-4">{prescription.medication}</td>
										<td className="p-4">{prescription.dosage}</td>
										<td className="p-4">{prescription.frequency}</td>
										<td className="p-4">{prescription.startDate}</td>
										<td className="p-4">{prescription.endDate}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : (
					<p className="text-cyan-400/70">No active prescriptions</p>
				)}
			</div>

			<div>
				<h2 className="text-cyan-400 text-lg font-medium mb-4">
					Past Prescriptions
				</h2>
				{pastPrescriptions.length > 0 ? (
					<div className="bg-gray-800/50 border border-cyan-800/30 rounded-lg overflow-hidden">
						<table className="w-full text-sm">
							<thead>
								<tr className="bg-gray-800/70">
									<th className="text-left p-4">Medication</th>
									<th className="text-left p-4">Dosage</th>
									<th className="text-left p-4">Frequency</th>
									<th className="text-left p-4">Start Date</th>
									<th className="text-left p-4">End Date</th>
								</tr>
							</thead>
							<tbody>
								{pastPrescriptions.map((prescription: any) => (
									<tr
										key={prescription.id}
										className="border-t border-cyan-800/20"
									>
										<td className="p-4">{prescription.medication}</td>
										<td className="p-4">{prescription.dosage}</td>
										<td className="p-4">{prescription.frequency}</td>
										<td className="p-4">{prescription.startDate}</td>
										<td className="p-4">{prescription.endDate}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : (
					<p className="text-cyan-400/70">No past prescriptions</p>
				)}
			</div>
		</div>
	);
};

export default PrescriptionsOverview;
