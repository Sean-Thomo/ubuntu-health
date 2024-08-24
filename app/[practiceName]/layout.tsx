"use client";
import { usePathname } from "next/navigation";
import { usePractice } from "../context/PracticeContext";
import { ReactNode } from "react";

interface Props {
	children?: ReactNode;
}

export default function PracticeLayout({ children }: Props) {
	const pathname = usePathname();
	const { setPracticeNumber } = usePractice();

	const practiceNumber = pathname.split("/")[1];
	setPracticeNumber(practiceNumber);

	return <>{children}</>;
}
