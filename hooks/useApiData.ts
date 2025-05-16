"use client";
import { useState, useEffect } from "react";

export default function useApiData<T>(endpoint: string) {
	const [data, setData] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem("token");

			try {
				const response = await fetch(`http://localhost:5290/api/${endpoint}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				if (!response.ok) {
					throw new Error(`API error: ${response.text}`);
				}

				const result = await response.json();
				setData(result);
				setIsLoading(false);
			} catch (err) {
				console.error(`Error fetching ${endpoint}:`, err);
				setError(err instanceof Error ? err.message : "Unknown error");
				setIsLoading(false);
			}
		};

		fetchData();
	}, [endpoint]);

	return { data, isLoading, error };
}
