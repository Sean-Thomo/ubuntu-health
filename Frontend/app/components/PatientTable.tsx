import React, { useState } from "react";

interface Patient {
	id: string;
	patientName: string;
	age: string;
	sex: string;
	phoneNumber: string;
	medicalAid: string;
}

const PatientTable: React.FC = () => {
	const [patients] = useState<Patient[]>([
		{
			id: "1",
			patientName: "Thabo Mbeki",
			age: "42",
			sex: "Male",
			phoneNumber: "+27821234567",
			medicalAid: "Discovery Health",
		},
		{
			id: "2",
			patientName: "Naledi Botha",
			age: "35",
			sex: "Female",
			phoneNumber: "+27827654321",
			medicalAid: "Momentum Health",
		},
		{
			id: "3",
			patientName: "Sipho Dlamini",
			age: "67",
			sex: "Male",
			phoneNumber: "+27824567890",
			medicalAid: "Bonitas",
		},
		{
			id: "4",
			patientName: "Lerato van der Merwe",
			age: "29",
			sex: "Female",
			phoneNumber: "+27823123456",
			medicalAid: "Fedhealth",
		},
		{
			id: "5",
			patientName: "Kagiso Nkosi",
			age: "53",
			sex: "Male",
			phoneNumber: "+27829876543",
			medicalAid: "Medihelp",
		},
		{
			id: "6",
			patientName: "Zinhle Khumalo",
			age: "31",
			sex: "Female",
			phoneNumber: "+27826789012",
			medicalAid: "Discovery Health",
		},
		{
			id: "7",
			patientName: "Tumi van Wyk",
			age: "24",
			sex: "Male",
			phoneNumber: "+27825432109",
			medicalAid: "None",
		},
		{
			id: "8",
			patientName: "Nomvula Petersen",
			age: "58",
			sex: "Female",
			phoneNumber: "+27828765432",
			medicalAid: "Bestmed",
		},
		{
			id: "9",
			patientName: "Mandla Jacobs",
			age: "45",
			sex: "Male",
			phoneNumber: "+27821987654",
			medicalAid: "Momentum Health",
		},
		{
			id: "10",
			patientName: "Palesa le Roux",
			age: "33",
			sex: "Female",
			phoneNumber: "+27823678901",
			medicalAid: "Bonitas",
		},
	]);

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
							<th className="p-3 text-left">Age</th>
							<th className="p-3 text-left">Sex</th>
							<th className="p-3 text-left">Phone Number</th>
							<th className="p-3 text-left">Medical Aid</th>
						</tr>
					</thead>
					<tbody>
						{patients.map((patient) => (
							<tr key={patient.id} className="border-b">
								<td className="p-3">{patient.patientName}</td>
								<td className="p-3">{patient.age}</td>
								<td className="p-3">{patient.sex}</td>
								<td className="p-3">{patient.phoneNumber}</td>
								<td className="p-3">{patient.medicalAid}</td>
								{/* <td className="p-3">{patient.sex}</td> */}
								{/* <td className="p-3">
								<span
									className={`
            px-2 py-1 rounded text-xs
            ${
							patient.status === "Scheduled"
								? "bg-yellow-100 text-yellow-800"
								: patient.status === "In Progress"
								? "bg-blue-100 text-blue-800"
								: "bg-green-100 text-green-800"
						}
          `}
								>
									{appoipatientntment.status}
								</span>
							</td> */}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PatientTable;
