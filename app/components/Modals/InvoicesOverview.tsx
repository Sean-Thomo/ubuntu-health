import { Invoice } from "@/types";
import React from "react";

interface InvoicesOverviewProps {
	invoices: Invoice;
}

const InvoicesOverview = ({ invoices }: InvoicesOverviewProps) => {
	return (
		<div className="flex">
			<p>Invoices Overview</p>
			<div>{/* <pre>{JSON.stringify(invoices, null, 2)}</pre> */}</div>
		</div>
	);
};

export default InvoicesOverview;
