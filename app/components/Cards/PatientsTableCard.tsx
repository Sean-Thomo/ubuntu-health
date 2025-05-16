import React, { useState } from "react";
import { Pencil, Trash2, User } from "lucide-react";
import { Patient } from "@/types/index";
import { toast } from "react-toastify";
import EditPatientModal from "../Modals/EditPatientModal";

interface PatientsTableProps {
	patients: Patient[];
	onDelete?: (id: string) => void;
	onEdit?: (id: string) => void;
}

const PatientsTableCard = ({
	patients,
	onDelete,
	onEdit,
}: PatientsTableProps) => {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [editingPatient, setEditingPatient] = useState<Patient | null>(null);

	const token = localStorage.getItem("token");
	const handleDelete = async (id: string) => {
		try {
			const response = await fetch(`http://localhost:5290/api/Patients/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			if (!response.ok) {
				toast.error("Failed to delete patient");
				throw new Error("Failed to delete patient");
			}

			if (onDelete) {
				onDelete(id);
			}

			toast.success("Patient deleted successfully");
		} catch (error) {
			toast.error("Error deleting patient");
			console.error("Error deleting patient:", error);
		}
	};

	const handleEditClick = (patient: Patient) => {
		setEditingPatient(patient);
		setIsEditModalOpen(true);
	};

	const handleSave = async (updatedPatient: Patient) => {
		try {
			const patientUpdateDto = {
				FirstName: updatedPatient.firstName,
				LastName: updatedPatient.lastName,
				IdNumber: updatedPatient.idNumber,
				Sex: updatedPatient.sex,
				Email: updatedPatient.email,
				Phone: updatedPatient.phone,
				Street: updatedPatient.street,
				StreetTwo: updatedPatient.streetTwo,
				City: updatedPatient.city,
				Province: updatedPatient.province,
				PostalCode: updatedPatient.postalCode,
				Allergies: updatedPatient.allergies,
				CurrentMedication: updatedPatient.currentMedication,
				EmergencyContactFirstName: updatedPatient.emergencyContactFirstName,
				EmergencyContactLastName: updatedPatient.emergencyContactLastName,
				EmergencyContactPhone: updatedPatient.emergencyContactPhone,
				EmergencyContactRelationship: updatedPatient.emergencyRelationship,
				MedicalAidName: updatedPatient.medicalAidName,
				MembershipNumber: updatedPatient.membershipNumber,
			};

			const response = await fetch(
				`http://localhost:5290/api/Patients/${updatedPatient.id}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify(patientUpdateDto),
				}
			);

			if (!response.ok) {
				console.error("Failed to update patient", response.text);

				toast.error("Failed to update patient");
				throw new Error("Failed to update patient");
			}

			if (onEdit) onEdit(updatedPatient.id);

			setIsEditModalOpen(false);
			toast.success("Patient updated successfully");
		} catch (e) {
			console.error("Error updating patient:", e);
			throw new Error(e instanceof Error ? e.message : String(e));
		}
	};

	// const router = useRouter();
	// const handleRowClick = (id: string) => {
	// 	router.push(`/patients/${token}/${id}`);
	// };

	return (
		<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
			<div className="overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-700">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 font-medium text-gray-700">Patient</th>
							<th className="px-6 py-3 font-medium text-gray-700">Contact</th>
							<th className="px-6 py-3 font-medium text-gray-700">
								Medical Info
							</th>
							<th className="px-6 py-3 font-medium text-gray-700">Status</th>
							<th className="px-6 py-3 font-medium text-gray-700">Actions</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200">
						{patients.map((patient) => (
							<tr
								// onClick={() => handleRowClick(patient.id)}
								key={patient.id}
								className="hover:bg-gray-50 transition-colors cursor-pointer"
							>
								<td className="px-6 py-4">
									<div className="flex items-center gap-4">
										<div
											className="flex items-center justify-center w-10 h-10 rounded-full
                    bg-blue-50 text-blue-600"
										>
											<User size={18} />
										</div>
										<div>
											<div className="font-medium text-gray-900">
												{patient.firstName} {patient.lastName}
											</div>
											<div className="text-xs text-gray-500">
												ID: {patient.id}
											</div>
										</div>
									</div>
								</td>
								<td className="px-6 py-4">
									<div className="space-y-1">
										<div className="text-gray-900">
											{patient.phone || "Not provided"}
										</div>
										<div className="text-gray-500 text-sm">
											{patient.email || "Not provided"}
										</div>
									</div>
								</td>
								<td className="px-6 py-4">
									<div className="space-y-1">
										<div className="flex items-center gap-2">
											<span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
												{patient.bloodType || "N/A"}
											</span>
											{(patient.activeConditions?.length || 0) > 0 && (
												<span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800">
													{patient.activeConditions?.length} active
												</span>
											)}
										</div>
										<div className="text-xs text-gray-500">
											{patient.allergies?.length || 0} allergies
										</div>
									</div>
								</td>
								<td className="px-6 py-4">
									<div className="flex items-center gap-2">
										{patient.medicalAidName ? (
											<span
												className="text-xs px-2 py-1 rounded-full bg-green-100
                      text-green-800"
											>
												Medical Aid: {patient.medicalAidName}
											</span>
										) : (
											<span
												className="text-xs px-2 py-1 rounded-full bg-yellow-100
                      text-yellow-800"
											>
												Private Pay
											</span>
										)}
									</div>
								</td>
								<td className="px-6 py-4">
									<div className="flex gap-4">
										<button
											onClick={() => handleEditClick(patient)}
											className="text-blue-600 hover:text-blue-800 transition-colors"
											title="Edit Patient"
										>
											<Pencil size={18} />
										</button>
										<button
											onClick={() => handleDelete(patient.id)}
											className="text-red-600 hover:text-red-800 transition-colors"
											title="Delete Patient"
										>
											<Trash2 size={18} />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{isEditModalOpen && editingPatient && (
				<EditPatientModal
					patient={editingPatient}
					onSave={handleSave}
					onClose={() => setIsEditModalOpen(false)}
				/>
			)}

			{/* Pagination */}
			<div className="flex justify-between items-center mt-6 text-sm text-gray-600">
				<div>
					Showing 1-{patients.length} of {patients.length} patients
				</div>
				<div className="flex gap-2">
					<button
						className="px-3 py-1 rounded border border-gray-300 bg-white
          hover:bg-gray-50 transition-colors"
					>
						Previous
					</button>
					<button
						className="px-3 py-1 rounded border border-gray-300 bg-white
          hover:bg-gray-50 transition-colors"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default PatientsTableCard;
