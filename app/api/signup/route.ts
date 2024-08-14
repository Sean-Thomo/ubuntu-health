import { NextResponse } from "next/server";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";

async function createCollections(userCredential: string) {
	const collectionsToCreate = ["Appointments", "Patients", "Inventory"];

	for (const collectionName of collectionsToCreate) {
		const collectionRef = collection(
			db,
			`Tenants/${userCredential}/${collectionName}`
		);
		await addDoc(collectionRef, {
			createdAt: new Date(),
			userCredential: userCredential,
		});
		console.log(`Collection '${collectionName}' created for userCredential`);
	}
}

export async function POST(request: Request) {
	const signupCollection = collection(db, "Tenants");
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

		// Save user data in Firestore
		const docRef = doc(signupCollection, user.uid);
		await setDoc(docRef, {
			...userData,
			signedUpAt: new Date(),
		});

		console.log("Document ID: ", user.uid);

		// Create additional collections for the tenant
		await createCollections(user.uid);

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
