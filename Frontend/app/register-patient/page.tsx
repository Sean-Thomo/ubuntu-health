"use client";
import { useState } from "react";
import PatientForm from "../components/PatientForm";

export default function Form() {
	return (
		<div className="flex flex-col items-center justify-center p-10">
			<h1 className="font-semibold text-3xl pb-2">Patient Registration</h1>
			<h1 className="text-lg pb-2">Please fill in the follwing form</h1>
			<PatientForm />
		</div>
	);
}
