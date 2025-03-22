export interface Patient {
	id: string;
	firstName: string;
	lastName: string;
	gender: string;
	dob: string;
	email: string;
	phone: string;
	street: string;
	streetTwo: string;
	bloodType: string;
	city: string;
	province: string;
	postalCode: string;
	medicalAidName?: string;
	medicalHistory: string[];
	allergies: string[];
	activeConditions: string[];
	createdAt?: string;
	updatedAt?: string;
}

export interface Appointment {
	id: string;
	patientFirstName: string;
	patientLastName: string;
	appointmentDate: string;
	appointmentTime: string;
	doctor: string;
	appointmentType: keyof typeof APPOINTMENT_TYPES;
	status: keyof typeof STATUS_LABELS;
}

export interface Invoice {
	id: string;
	issueDate: string;
	totalAmount: number;
	status: string;
	notes: string;
}

export interface Prescription {
	id: string;
	patientId: string;
	medication: string;
	dosage: string;
	frequency: string;
	startDate: string;
	endDate: string;
	active: boolean;
}

export interface Visit {
	id: string;
	date: string;
	diagnosis: string;
	treatment: string;
	notes: string;
	prescriptions: Prescription[];
}

export interface Bill {
	id: string;
	date: string;
	amount: number;
	description: string;
	status: string;
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
