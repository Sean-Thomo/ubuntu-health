import { NextResponse } from "next/server";
import { addDoc, collection } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";

const signupCollection = collection(db, "Tenants");

export async function POST(request: Request) {
	const auth = getAuth();
	try {
		const values = await request.json();

		// Create user with email and password
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			values.email,
			values.password
		);
		const user = userCredential.user;
		const { password, ...userData } = values;

		console.log(userData);

		// Save user data in Firestore
		await addDoc(signupCollection, {
			...userData,
			signedUpAt: new Date(),
		});

		return NextResponse.json(
			{ message: "User created successfully." },
			{ status: 201 }
		);
	} catch (error: any) {
		console.error("Error signing up:", error);
		return NextResponse.json(
			{ message: "Failed to sign up." },
			{ status: 400 }
		);
	}
}
