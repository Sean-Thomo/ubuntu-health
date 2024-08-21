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
		const { password, practiceNumber, ...userData } = values;

		// Save user data in Firestore
		const docRef = doc(signupCollection, user.uid);
		await setDoc(docRef, {
			...userData,
			signedUpAt: new Date(),
		});

		// Create additional collections for the tenant
		await createCollections(user.uid);

		const response = NextResponse.json(
			{
				message: "User created successfully.",
			},
			{ status: 201 }
		);

		console.log("SIGNUP: Practice Number", practiceNumber);

		response.cookies.set("practiceNumber", practiceNumber, {
			httpOnly: true,
			maxAge: 99999999,
			path: "/",
		});

		return response;
	} catch (error: any) {
		console.error("Error signing up:", error);
		return NextResponse.json(
			{ message: "Failed to sign up." },
			{ status: 400 }
		);
	}
}
