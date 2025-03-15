"use client";
import React, { useEffect, useState } from "react";

export default function PatientsCard() {
	const [patients, setPatients] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPatients = async () => {
			try {
				const response = await fetch("http://localhost:5290/api/Patients");

				if (!response.ok) {
					throw new Error(`Failed to fetch patients: ${response.status}`);
				}

				const data = await response.json();
				setPatients(data);
				setIsLoading(false);
			} catch (err) {
				console.error(`Error fetching patients: ${err}`);
				setIsLoading(false);
			}
		};

		fetchPatients();
	}, []);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center">
				<p className="text-xl text-gray-600">Loading Data...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex items-center justify-center">
				<p className="text-xl text-red-600">Error loading patients</p>
			</div>
		);
	}

	const patientsThisWeek = {
		// TODO: Write function to filter patients created this week
	};

	return (
		<div className="space-y-2">
			<p className="text-gray-600">Total Patients: {patients.length}</p>
			<p className="text-gray-600">New This Week: </p>
		</div>
	);
}
