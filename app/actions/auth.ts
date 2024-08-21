import { SignupFormSchema, FormState } from "@/app/lib/definitions";
import * as Yup from "yup";

export async function signup(state: FormState, formData: FormData) {
	const dataToValidate = {
		firstName: formData.get("firstName"),
		surName: formData.get("surName"),
		email: formData.get("email"),
		practiceName: formData.get("practiceName"),
		practiceNumber: formData.get("practiceNumber"),
		street: formData.get("street"),
		city: formData.get("city"),
		province: formData.get("province"),
		postalCode: formData.get("postalCode"),
		country: formData.get("country"),
		password: formData.get("password"),
		phoneNumber: formData.get("phoneNumber"),
	};

	try {
		await SignupFormSchema.validate(dataToValidate, { abortEarly: false });

		// If validation passes, call the provider or db to create a user...
		// Your user creation logic goes here
	} catch (error) {
		if (error instanceof Yup.ValidationError) {
			return {
				errors: error.errors,
			};
		}
		return {
			errors: { general: ["An unexpected error occurred."] },
		};
	}
}
