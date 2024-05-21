"use client";
import React from "react";
import Navbar from "../components/Navbar";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../api/firebase";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function Page() {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	const SignInSchema = Yup.object({
		email: Yup.string().email("Invalid Email.").required("Required"),
		password: Yup.string()
			.min(8, "Too short")
			.max(32, "Too long")
			.required("Required"),
	});

	const [loadingGoogle, setLoadingGoogle] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSignIn = async () => {
		setLoadingGoogle(true);
		try {
			const result = await signInWithPopup(auth, provider)
				.then((result) => {
					const credential = GoogleAuthProvider.credentialFromResult(result);
					const token = credential.accessToken;
					const user = result.user;
					console.log(user);
				})
				.catch((error) => {
					toast.error(`Something went wrong ${error.message}`);
					const email = error.customData.email;
					const credential = GoogleAuthProvider.credentialFromError(error);
					console.log(error);
				});
		} catch (error) {
			console.log(`Error: ${error}`);
		}
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid Email.").required("Required"),
			password: Yup.string()
				.min(8, "Too short")
				.max(32, "Too long")
				.required("Required"),
		}),
		onSubmit: async (values, { setSubmitting }) => {
			setLoading(true);
			try {
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					values.email,
					values.password
				);
				const user = userCredential.user;
				toast.success(`Welcome ${user}`);
				console.log(`form submit ${user.displayName}`);

				// User signed in successfully, redirect or do something
			} catch (e) {
				toast.error(`Something went wrong, ${e}.`);
				console.log(e);
			} finally {
				setLoading(false);
				setSubmitting(false);
			}
		},
	});

	return (
		<div>
			<Navbar />
			<div>
				<form onSubmit={formik.handleSubmit} className="rounded-lg pb-20 px-20">
					<div
						id="sign-up"
						className="flex flex-col items-center justify-center md:flex-row md:pt-20"
					>
						<div className="px-4 md:w-2/5">
							<div className="text-center mx-auto lg:mb-10 max-w-[720px]">
								<h2
									className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark
                                    mb-4 py-6"
								>
									Sign up For The Basic Plan
								</h2>
								<p className="text-base text-body-color">
									Let&lsquo;s get you started with your plan.
								</p>
							</div>
						</div>
						<div className="py-4 flex flex-col items-center justify-center md:w-3/5">
							<button
								type="submit"
								onClick={handleSignIn}
								disabled={loading}
								className="flex flex-col items-center justify-centertext-black 
                                font-normal text-sm rounded-2xl text-primary-50 bg-primary-600 hover:bg-primary-700
                                focus:outline-none focus:ring-4 focus:ring-blue-300 px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700
                                dark:focus:ring-blue-800"
							>
								{loadingGoogle ? `Signing Up` : `Sign-Up with Google`}
							</button>
							{/* Email */}
							<div className="mt-6 mb-6">
								<label htmlFor="email" className="font-semibold text-md pb-2">
									Email
								</label>
								<div className="mt-2 pb-4 w-[18rem] md:w-[20rem] md:flex flex-col items-center justify-center">
									<input
										type="email"
										name="email"
										id="email"
										value={formik.values.email}
										onChange={formik.handleChange}
										placeholder="john.doe@email.com"
										className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500
                                          focus:border-primary-500 block flex-1 min-w-0 w-full text-sm border-gray-300
                                            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                            dark:focus:ring-blue-500 dark:focus:border-primary-500"
									/>
								</div>
							</div>
							{/* Password */}
							<div className="mt-6">
								<label
									htmlFor="password"
									className="font-semibold text-md pb-2"
								>
									Password
								</label>
								<div
									className="mt-2 pb-4 w-[18rem] md:w-[20rem] md:flex flex-col items-center
                                        justify-center"
								>
									<input
										type="password"
										name="password"
										id="password"
										value={formik.values.password}
										onChange={formik.handleChange}
										placeholder="**************"
										className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500
                                          focus:border-primary-500 block flex-1 min-w-0 w-full text-sm border-gray-300
                                            p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                            dark:focus:ring-blue-500 dark:focus:border-primary-500"
									/>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<button
									type="submit"
									className="text-primary-50 bg-primary-600 hover:bg-primary-700
                                        focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl
                                        text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                                        dark:focus:ring-blue-800 flex flex-col items-center justify-center"
								>
									Sign Up
								</button>
							</div>
						</div>
					</div>
					<ToastContainer
						theme="light"
						position="top-right"
						hideProgressBar={false}
					/>
				</form>
			</div>
		</div>
	);
}
