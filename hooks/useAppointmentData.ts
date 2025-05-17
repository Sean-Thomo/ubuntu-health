import { useMemo } from "react";
import { Invoice } from "@/types";
import useApiData from "./useApiData";

export default function useInvoiceData(patientId: number) {
	const {
		data: invoices,
		isLoading: invoicesLoading,
		error: invoicesError,
	} = useApiData<Invoice>("Invoices");

	// filter by patientId
	const filteredInvoices = useMemo(() => {
		if (!invoices) return [];
		return invoices.filter((inv) => inv.patientId === patientId);
	}, [invoices, patientId]);

	return { filteredInvoices, invoicesLoading, invoicesError };
}
