"use client";
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
		<div className="relative overflow-x-auto sm:rounded-tr-lg sm:rounded-tl-lg">
			<table className="w-full text-sm text-left rtl:text-right bg-gray-50 text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
					</tr>
				</thead>
				<tbody>
					{patients.map((patient) => (
						<tr
							key={patient.id}
							className="bg-white border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-800 dark:border-gray-700"
						>
							<td className="p-3">{`${patient.firstName} ${patient.lastName}`}</td>
							<td className="p-3">{patient.gender.toUpperCase()}</td>
							<td className="p-3">{patient.phone}</td>
							<td className="p-3">{patient.medicalAidName}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PatientsTable;
