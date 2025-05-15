import { Visit } from "@/types";
import React from "react";

interface VisitOverviewProps {
	visits: Visit[];
}

const VisitsOverview = ({ visits }: VisitOverviewProps) => {
	return (
		<div className="space-y-4">
			<h2 className="text-lg font-medium">Visit History</h2>
			{visits.map((visit) => (
				<div
					key={visit.id}
					className="  border   rounded-lg p-6 backdrop-blur-sm"
				>
					<div className="flex justify-between mb-4">
						<div>
							<p className="text-xs ">VISIT ID: {visit.id}</p>
							<h3 className="text-lg font-medium">{visit.diagnosis}</h3>
						</div>
						<span className="text-sm">{visit.date}</span>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						<div>
							<p className="text-xs ">Treatment</p>
							<p>{visit.treatment}</p>
						</div>
						<div>
							<p className="text-xs ">Notes</p>
							<p>{visit.notes}</p>
						</div>
					</div>

					{visit.prescriptions.length > 0 && (
						<div className="mt-4">
							<p className="text-xs  mb-2">Prescriptions</p>
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
