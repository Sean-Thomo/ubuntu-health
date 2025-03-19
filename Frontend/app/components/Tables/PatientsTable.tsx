import React from "react";

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
