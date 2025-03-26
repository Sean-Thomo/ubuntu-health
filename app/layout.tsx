import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["devanagari"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Ubuntu Health",
	description: `Ubuntu Health is an intuitive Electronic Health Records (EHR) platform designed to simplify 
         patient care and practice management for family doctors and small clinics. It offers features
         such as patient management, appointment scheduling, e-prescriptions, billing, and secure 
         communication. We aim to optimize workflow efficiency and enhance patient satisfaction. 
         Join the waiting list for exclusive updates and early access to this innovative healthcare 
         solution.`,
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
