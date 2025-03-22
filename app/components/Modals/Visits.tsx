import { Visit } from "@/types";
import React from "react";

interface VisitOverviewProps {
	visits: Visit[];
}

const VisitsOverview: React.FC<VisitOverviewProps> = ({ visits }) => {
	return (
		<div className="space-y-4">
			<h2 className="text-cyan-400 text-lg font-medium">Visit History</h2>
			{visits.map((visit) => (
				<div
					key={visit.id}
					className="bg-gray-800/50 border border-cyan-800/30 rounded-lg p-6 backdrop-blur-sm"
				>
					<div className="flex justify-between items-start mb-4">
						<div>
							<p className="text-xs text-cyan-400/70">VISIT ID: {visit.id}</p>
							<h3 className="text-lg font-medium">{visit.diagnosis}</h3>
						</div>
						<span className="text-sm text-cyan-400">{visit.date}</span>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						<div>
							<p className="text-xs text-cyan-400/70">Treatment</p>
							<p>{visit.treatment}</p>
						</div>
						<div>
							<p className="text-xs text-cyan-400/70">Notes</p>
							<p>{visit.notes}</p>
						</div>
					</div>

					{visit.prescriptions.length > 0 && (
						<div className="mt-4">
							<p className="text-xs text-cyan-400/70 mb-2">Prescriptions</p>
							<div className="space-y-2">
								{visit.prescriptions.map((prescription: any) => (
									<div
										key={prescription.id}
										className="flex items-center gap-2 text-sm"
									>
										<span
											className={`w-2 h-2 rounded-full ${
												prescription.active ? "bg-green-400" : "bg-gray-400"
											}`}
										></span>
										<span>
											{prescription.medication} {prescription.dosage},{" "}
											{prescription.frequency}
										</span>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default VisitsOverview;
