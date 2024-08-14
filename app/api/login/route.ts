import { NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export async function POST(request: Request) {
	const auth = getAuth();
	const values = await request.json();

	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			values.email,
			values.password
		);
		const user = userCredential.user;
		const userDocRef = doc(db, "Tenants", user.uid);
		const userDoc = await getDoc(userDocRef);
	} catch (error: any) {
		console.error("Error logging in:", error);
		return NextResponse.json({ message: "Failed to login." }, { status: 400 });
	}
}
