import { NextRequest, NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { getBaseUrl } from "@/app/utils";

export async function POST(request: NextRequest) {
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

		if (userDoc.exists()) {
			const userData = userDoc.data();
			const practiceNumber = userData.practiceNumber;
			console.log("LOGIN: Practice Number", practiceNumber);

			const baseUrl = getBaseUrl(request);
			console.log(`${baseUrl}/${practiceNumber}/dashboard`);

			// return NextResponse.json(
			// 	{ message: `${baseUrl}/${practiceNumber}/dashboard` },
			// 	{ status: 201 }
			// );

			const response = NextResponse.json(
				{ message: `${baseUrl}/${practiceNumber}/dashboard` },
				{ status: 201 }
			);

			response.cookies.set("practiceNumber", practiceNumber, {
				httpOnly: true,
				maxAge: 99999999,
				path: "/",
			});

			return response;
		} else {
			console.error("User document not found.");
			return NextResponse.json({
				message: "Failed to retrieve user data.",
				status: 400,
			});
		}
	} catch (error: any) {
		console.error("Error logging in:", error);
		return NextResponse.json({ message: "Failed to login." }, { status: 400 });
	}
}
