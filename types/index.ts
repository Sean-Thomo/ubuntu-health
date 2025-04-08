export interface Patient {
	id: string;
	tenantId: string;
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
	tenantId: string;
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
	tenantId: string;
	issueDate: string;
	totalAmount: number;
	status: keyof typeof INVOICE_STATUS;
	notes?: string;
}

export interface Visit {
	id: string;
	tenantId: string;
	date: string;
	diagnosis: string;
	treatment: string;
	notes: string;
	prescriptions: Prescription[];
}

export interface Bill {
	id: string;
	tenantId: string;
	date: string;
	amount: number;
	description: string;
	status: keyof typeof BILL_STATUS;
}

export const APPOINTMENT_TYPES = {
	initialConsultation: "initial consultation",
	followUp: "follow-up",
	annualPhysical: "annual physical",
	urgentCare: "urgent care",
	specialistReferral: "specialist referral",
	procedure: "procedure",
	labWork: "lab work",
	vaccination: "vaccination",
	preventiveCare: "preventive care",
	chronicDisease: "chronic disease management",
	mentalHealth: "mental health",
	telehealth: "telehealth",
	preOperative: "pre-operative",
	postOperative: "post-operative",
	physicalTherapy: "physical therapy",
	other: "other",
};

export const STATUS_LABELS = {
	scheduled: "scheduled",
	confirmed: "confirmed",
	checkedIn: "checked in",
	inProgress: "in Progress",
	completed: "completed",
	cancelled: "cancelled",
	noShow: "no show",
	rescheduled: "rescheduled",
};

export const STATUS_COLORS = {
	scheduled: "bg-blue-100 text-blue-800",
	confirmed: "bg-green-100 text-green-800",
	checkedIn: "bg-purple-100 text-purple-800",
	inProgress: "bg-yellow-100 text-yellow-800",
	completed: "bg-gray-300 text-gray-800",
	cancelled: "bg-red-100 text-red-800",
	noShow: "bg-orange-100 text-orange-800",
	rescheduled: "bg-indigo-100 text-indigo-800",
};

export interface Medication {
	id: string;
	tenantId: string;
	prescriptionId: string;
	name: string;
	dosage: string;
	frequency: string;
	type: keyof typeof MEDICATION_TYPES;
}

export interface Prescription {
	prescriptionId: string;
	tenantId: string;
	active: unknown;
	patientId: string;
	practitionerId: string;
	dosage: string;
	issueDate: string;
	endDate: string;
	frequency: string;
	refills: number;
	status: keyof typeof PRESCRIPTION_STATUS;
	medications: Medication[];
	instructions?: string;
	createdAt?: string;
	updatedAt?: string;
}

export const MEDICATION_TYPES = {
	tablet: "tablet",
	capsule: "capsule",
	syrup: "syrup",
	injection: "injection",
	ointment: "ointment",
	drops: "drops",
	inhaler: "inhaler",
	patch: "transdermal patch",
	suppository: "suppository",
	other: "other",
} as const;

export const PRESCRIPTION_STATUS = {
	active: "active",
	pending: "pending",
	completed: "completed",
	cancelled: "cancelled",
	expired: "expired",
} as const;

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
	tenantId: string;
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
	tenantId: string;
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
	draft: "Draft",
	pending: "Pending",
	paid: "Paid",
	overdue: "Overdue",
	cancelled: "Cancelled",
	partiallyPaid: "Partially Paid",
} as const;
