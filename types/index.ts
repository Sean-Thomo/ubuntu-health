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
	status: keyof typeof INVOICE_STATUS;
	notes?: string;
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
	status: keyof typeof BILL_STATUS;
}

export const APPOINTMENT_TYPES = {
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

export const STATUS_LABELS = {
	scheduled: "Scheduled",
	confirmed: "Confirmed",
	checkedIn: "Checked In",
	inProgress: "In Progress",
	completed: "Completed",
	cancelled: "Cancelled",
	noShow: "No Show",
	rescheduled: "Rescheduled",
};

export const STATUS_COLORS = {
	scheduled: "bg-yellow-900/30 text-yellow-400",
	confirmed: "bg-blue-900/30 text-blue-400",
	checkedIn: "bg-purple-900/30 text-purple-400",
	inProgress: "bg-green-900/30 text-green-400",
	completed: "bg-teal-900/30 text-teal-400",
	cancelled: "bg-red-900/30 text-red-400",
	noShow: "bg-gray-700 text-cyan-400",
	rescheduled: "bg-orange-900/30 text-orange-400",
};

export interface Medication {
	name: string;
	dosage: string;
	frequency: string;
	type: keyof typeof MEDICATION_TYPES;
}

export interface Prescription {
	id: string;
	patientId: string;
	doctorId: string;
	issueDate: string;
	expiryDate: string;
	status: keyof typeof PRESCRIPTION_STATUS;
	medications: Medication[];
	notes?: string;
	createdAt?: string;
	updatedAt?: string;
}

export const MEDICATION_TYPES = {
	TABLET: "Tablet",
	CAPSULE: "Capsule",
	SYRUP: "Syrup",
	INJECTION: "Injection",
	OINTMENT: "Ointment",
	DROPS: "Drops",
	INHALER: "Inhaler",
	PATCH: "Transdermal Patch",
	SUPPOSITORY: "Suppository",
	OTHER: "Other",
} as const;

export const PRESCRIPTION_STATUS = {
	ACTIVE: "Active",
	PENDING: "Pending",
	COMPLETED: "Completed",
	CANCELLED: "Cancelled",
	EXPIRED: "Expired",
} as const;

// Optional: Type for the form values
export interface PrescriptionFormValues {
	patientId: string;
	doctorId: string;
	issueDate: string;
	expiryDate: string;
	status: keyof typeof PRESCRIPTION_STATUS;
	medications: Omit<Medication, "id">[];
	notes?: string;
}

export interface Bill {
	id: string;
	patientId: string;
	billNumber: string;
	date: string;
	amount: number;
	status: keyof typeof BILL_STATUS;
	service: string;
	description: string;
	createdAt?: string;
	updatedAt?: string;
}

export const BILL_STATUS = {
	pending: "Pending",
	paid: "Paid",
	overdue: "Overdue",
	cancelled: "Cancelled",
	refunded: "Refunded",
} as const;

export interface InvoiceItem {
	description: string;
	quantity: number;
	unitPrice: number;
}

export interface Invoice {
	id: string;
	patientId: string;
	invoiceNumber: string;
	issueDate: string;
	dueDate: string;
	status: keyof typeof INVOICE_STATUS;
	items: InvoiceItem[];
	totalAmount: number;
	notes?: string;
	createdAt?: string;
	updatedAt?: string;
}

export const INVOICE_STATUS = {
	DRAFT: "Draft",
	PENDING: "Pending",
	PAID: "Paid",
	OVERDUE: "Overdue",
	CANCELLED: "Cancelled",
	PARTIALLY_PAID: "Partially Paid",
} as const;
