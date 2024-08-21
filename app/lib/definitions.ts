import * as Yup from "yup";

export const SignupFormSchema = Yup.object({
	firstName: Yup.string()
		.min(2, { message: "Name must be at least 2 characters long." })
		.required("First name is required.")
		.trim(),
	surName: Yup.string()
		.min(2, { message: "Surname must be at least 2 characters long." })
		.required("Surname is required.")
		.trim(),
	email: Yup.string()
		.email({ message: "Please enter a valid email." })
		.required("Email is required.")
		.trim(),
	practiceName: Yup.string().required("Practice name is required.").trim(),
	practiceNumber: Yup.string()
		.required("Practice number is required.")
		.matches(/^[0-9]*$/, { message: "Practice number must be numeric." })
		.trim(),
	street: Yup.string().required("Street address is required.").trim(),
	city: Yup.string().required("City is required.").trim(),
	province: Yup.string().required("Province is required.").trim(),
	postalCode: Yup.string()
		.required("Postal code is required.")
		.matches(/^[A-Za-z0-9\s]*$/, {
			message: "Postal code must be alphanumeric.",
		})
		.trim(),
	country: Yup.string().required("Country is required.").trim(),
	password: Yup.string()
		.min(8, { message: "Password must be at least 8 characters long." })
		.matches(/[a-zA-Z]/, {
			message: "Password must contain at least one letter.",
		})
		.matches(/[0-9]/, { message: "Password must contain at least one number." })
		.matches(/[^a-zA-Z0-9]/, {
			message: "Password must contain at least one special character.",
		})
		.required("Password is required.")
		.trim(),
	phoneNumber: Yup.string()
		.required("Phone number is required.")
		.matches(/^[0-9]*$/, { message: "Phone number must be numeric." })
		.trim(),
});

export type FormState = {
	errors?: {
		firstName?: string[];
		surName?: string[];
		email?: string[];
		practiceName?: string[];
		practiceNumber?: string[];
		street?: string[];
		city?: string[];
		province?: string[];
		postalCode?: string[];
		country?: string[];
		password?: string[];
		phoneNumber?: string[];
	};
	message?: string;
};
