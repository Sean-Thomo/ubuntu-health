export interface Patient {
	id: number;
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
	phone: string;
	medicalAidName: string;
	createdAt: string;
	updatedAt: string;
}

export interface Appointment {
	id: number;
	patientFirstName: string;
	patientLastName: string;
	appointmentDate: string;
	appointmentTime: string;
	appointmentType: keyof typeof APPOINTMENT_TYPES;
	status: keyof typeof STATUS_LABELS;
}

export interface Invoice {
	id: number;
	issueDate: string;
	totalAmount: number;
	status: string;
	notes: string;
}

export interface Prescription {
	id: number;
	patientId: number;
	medicationName: string;
	dosage: string;
	instructions: string;
	issueDate: string;
}

const APPOINTMENT_TYPES = {
	initialConsultation: "Initial Consultation",
	followUp: "Follow-up",
	annualPhysical: "Annual Physical",
	urgentCare: "Urgent Care",
	specialistReferral: "Specialist Referral",
	procedure: "Procedure",
	labWork: "Lab Work",
	vaccination: "Vaccination",
	preventiveCare: "Preventive Care",
	chronicDisease: "Chronic Disease Management",
	mentalHealth: "Mental Health",
	telehealth: "Telehealth",
	preOperative: "Pre-operative",
	postOperative: "Post-operative",
	physicalTherapy: "Physical Therapy",
	other: "Other",
};

const STATUS_LABELS = {
	scheduled: "Scheduled",
	confirmed: "Confirmed",
	checkedIn: "Checked In",
	inProgress: "In Progress",
	completed: "Completed",
	cancelled: "Cancelled",
	noShow: "No Show",
	rescheduled: "Rescheduled",
};
