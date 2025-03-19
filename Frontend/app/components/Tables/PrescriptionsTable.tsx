import React from "react";
import Link from "next/link";
import { div } from "framer-motion/client";

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
		<div className="relative overflow-x-auto">
			<table className="w-full text-sm text-left">
				<thead className="text-sx uppercase"></thead>
			</table>
		</div>
	);
};

export default PrescriptionsTableCard;
