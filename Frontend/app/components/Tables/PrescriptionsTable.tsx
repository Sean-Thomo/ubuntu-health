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
