import React, { useState, useEffect } from "react";

interface Patient {
	id: number;
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
	phone: string;
	medicalAidName: string;
}

const PatientsTable: React.FC = () => {
	const [patients, setPatients] = useState<Patient[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPatients = async () => {
			try {
				const response = await fetch("http://localhost:5290/api/Patients");

				if (!response.ok) {
					throw new Error("Failed to fetch patients");
				}

				const data = await response.json();
				setPatients(data);
				setIsLoading(false);
			} catch (err) {
				console.error(`Error fetching patients: ${err}`);
				setIsLoading(false);
			}
		};

		fetchPatients();
	}, []);

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<p className="text-xl text-gray-600">Loading patients...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<p className="text-xl text-red-600">Error: {error}</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-gray-800">Patients</h1>

			<div className="mt-8 rounded-lg">
				<h2 className="text-xl font-semibold text-gray-700 mb-4">
					Patients List
				</h2>
				<table className="w-full rounded-t-lg">
					<thead className="bg-gray-200 ">
						<tr>
							<th className="p-3 text-left">Name</th>
							<th className="p-3 text-left">Sex</th>
							<th className="p-3 text-left">Phone Number</th>
							<th className="p-3 text-left">Medical Aid</th>
						</tr>
					</thead>
					<tbody>
						{patients.map((patient) => (
							<tr key={patient.id} className="border-b">
								<td className="p-3">{`${patient.firstName} ${patient.lastName}`}</td>
								<td className="p-3">{patient.gender.toUpperCase()}</td>
								<td className="p-3">{patient.phone}</td>
								<td className="p-3">{patient.medicalAidName}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PatientsTable;
