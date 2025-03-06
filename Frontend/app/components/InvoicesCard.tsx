import React, { useEffect, useState } from "react";

export default function InvoicesCard() {
	const [invoices, setInvoices] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchInvoices = async () => {
			try {
				const response = await fetch("http://localhost:5290/api/Invoices");

				if (!response.ok) {
					throw new Error(`Failed to fetch invoices: ${response.status}`);
				}

				const data = await response.json();
				setInvoices(data);
				setIsLoading(false);
			} catch (err) {
				console.error(`Error fetching data: ${err}.`);
				setIsLoading(false);
			}
		};

		fetchInvoices();
	}, []);

	if (isLoading) {
		return <div className="p-4">Loading invoice data...</div>;
	}

	if (error) {
		return <div className="p-4 text-red-600">Error loading invoices</div>;
	}

	return (
		<div className="space-y-2">
			<p className="text-gray-600">Total Invoices: {invoices.length}</p>
			<p className="text-gray-600">
				{/* Total Revenue: R{invoices.reduce((sum, inv) => sum + inv.amount, 0)} */}
				Total Revenue: R
			</p>
		</div>
	);
}
