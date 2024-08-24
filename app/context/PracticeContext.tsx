// context/PracticeContext.tsx
"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface PracticeContextType {
	practiceNumber: string | null;
	setPracticeNumber: React.Dispatch<React.SetStateAction<string | null>>;
}

const PracticeContext = createContext<PracticeContextType | undefined>(
	undefined
);

interface Props {
	children?: ReactNode;
}

export const PracticeProvider: React.FC<Props> = ({ children }) => {
	const [practiceNumber, setPracticeNumber] = useState<string | null>(null);

	return (
		<PracticeContext.Provider value={{ practiceNumber, setPracticeNumber }}>
			{children}
		</PracticeContext.Provider>
	);
};

// Create a custom hook to use the PracticeContext
export const usePractice = () => {
	const context = useContext(PracticeContext);
	if (context === undefined) {
		throw new Error("usePractice must be used within a PracticeProvider");
	}
	return context;
};
