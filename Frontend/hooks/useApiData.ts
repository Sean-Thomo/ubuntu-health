"use client";
import { useState, useEffect } from "react";

export function useApiData<T>(endpoint: string) {
	const [data, setData] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:5290/api/${endpoint}`);
				if (!response.ok) {
					throw new Error(`API error: ${response.status}`);
				}

				const result = await response.json();
				setData(result);
				setIsLoading(false);
			} catch (error) {
				console.error(`Error fetching ${endpoint}:`, error);
				setError(error instanceof Error ? error.message : "Unknown error");
				setIsLoading(false);
			}
		};

		fetchData();
	}, [endpoint]);

	return { data, isLoading, error };
}
