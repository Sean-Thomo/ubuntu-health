import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Ubuntu Health",
	description: `Ubuntu Health is an intuitive Electronic Health Records (EHR) platform designed to simplify 
         patient care and practice management for family doctors and small clinics. It offers features
         such as patient management, appointment scheduling, e-prescriptions, billing, and secure 
         communication. We aim to optimize workflow efficiency and enhance patient satisfaction. 
         Join the waiting list for exclusive updates and early access to this innovative healthcare 
         solution.`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-secondary-900 text-secondary-50">{children}</body>
		</html>
	);
}
