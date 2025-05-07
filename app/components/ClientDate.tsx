"use client";
import { useEffect, useState } from "react";

interface ClientDateProps {
	dateString: string;
}

const ClientDate = ({ dateString }: ClientDateProps) => {
	const [formattedDate, setFormattedDate] = useState("");

	useEffect(() => {
		// This will only run on the client side
		const date = new Date(dateString);
		setFormattedDate(date.toLocaleDateString());
	}, [dateString]);

	return <span>{formattedDate}</span>;
};

export default ClientDate;
