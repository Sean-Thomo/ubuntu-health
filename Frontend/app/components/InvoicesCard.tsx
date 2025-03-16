import React from "react";

interface Invoice {
	amount: number;
}

interface InvoicesCardProps {
	invoices: Invoice[];
}

const InvoicesCard: React.FC<InvoicesCardProps> = ({ invoices = [] }) => {
	return (
		<div className="space-y-2">
			<p className="text-gray-600">Total Invoices: {invoices.length}</p>
			<p className="text-gray-600">
				Total Revenue: R{invoices.reduce((sum, inv) => sum + inv.amount, 0)}
			</p>
		</div>
	);
};

export default InvoicesCard;
