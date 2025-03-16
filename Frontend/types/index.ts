export interface Patient {
	id: number;
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
	phone: string;
	medicalAidName: string;
}

export interface Appointment {
	id: number;
	patientFirstName: string;
	patientLastName: string;
	appointmentDate: string;
	appointmentTime: string;
	appointmentType: string;
	status: string;
}

export interface Invoice {
	id: number;
	issueDate: string;
	totalAmount: number;
	status: string;
	notes: string;
}
