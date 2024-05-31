import Navbar from "../components/Navbar";
import React from "react";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function page() {
	const formik = useFormik({
		initialValues: {
			practiceName: "",
			practiceType: "",
			practiceNumber: "",
			practiceAddress: "",
			practiceStreetNumber: "",
			practiceCity: "",
			practiceProvince: "",
			practicePhoneNumber: "",
			practiceEmail: "",
			adminName: "",
			adminSurname: "",
			adminPhoneNumber: "",
			adminEmail: "",
			adminIdNumber: "",
		},
		validationSchema: Yup.object({
			practiceEmail: Yup.string().email("Invalid Email.").required("Required"),
			adminEmail: Yup.string().email("Invalid Email.").required("Required"),
			practicePhoneNumber: Yup.string()
				.matches(/^\d{10}$/, "Invalid phone number")
				.required("Phone number is required"),
			adminPhoneNumber: Yup.string()
				.matches(/^\d{10}$/, "Invalid phone number")
				.required("Phone number is required"),
			adminIdNumber: Yup.string()
				.matches(/^\d{13}$/, "Invalid ID number")
				.required("ID number is required"),
		}),
		onSubmit: async (values, { setSubmitting }) => {},
	});

	return (
		<div className="pt-20 flex flex-wrap">
			<div className="w-full">
				<div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[720px]">
					<h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 py-6">
						Let&lsquo;s get you started.
					</h2>
					<div>
						<form
							onSubmit={formik.handleSubmit}
							className="rounded-lg pb-20 px-20"
						>
							<div
								id="setup"
								className="flex flex-col items-center justify-center md:flex-row md:pt-20"
							>
								<div className="px-4 md:w-2/5">
									<div className="text-center mx-auto lg:mb-10 max-w-[720px]">
										<h2
											className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark
                                    mb-4 py-6"
										>
											Admin Details
										</h2>
										<p className="text-base text-body-color">
											Let&lsquo;s get you started with your plan.
										</p>
									</div>
								</div>
								<div className="py-4 flex flex-col items-center justify-center md:w-3/5">
									<h2
										className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark
                                    mb-4 py-6"
									>
										Practice Details
									</h2>
									{/* Practice Name */}
									<div className="mt-6 mb-6">
										<label
											htmlFor="practice-name"
											className="font-semibold text-md pb-2"
										>
											Practice Name
										</label>
										<div className="mt-2 pb-4 w-[18rem] md:w-[20rem] md:flex flex-col items-center justify-center">
											<input
												type="email"
												name="email"
												id="email"
												value={formik.values.practiceName}
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
									<div className="mt-6 mb-6">
										<label
											htmlFor="practiceType"
											className="font-semibold text-md pb-2"
										>
											Practice Type
										</label>
										<div className="mt-2 pb-4 w-[18rem] md:w-[20rem] md:flex flex-col items-center justify-center">
											<input
												type="text"
												name="practiceType"
												id="practiceType"
												value={formik.values.practiceType}
												onChange={formik.handleChange}
												placeholder="Practice Type"
												className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500
                                    focus:border-primary-500 block flex-1 min-w-0 w-full text-sm border-gray-300
                                    p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                    dark:focus:ring-blue-500 dark:focus:border-primary-500"
											/>
										</div>
									</div>

									<div className="mt-6 mb-6">
										<label
											htmlFor="practiceNumber"
											className="font-semibold text-md pb-2"
										>
											Practice Number
										</label>
										<div className="mt-2 pb-4 w-[18rem] md:w-[20rem] md:flex flex-col items-center justify-center">
											<input
												type="text"
												name="practiceNumber"
												id="practiceNumber"
												value={formik.values.practiceNumber}
												onChange={formik.handleChange}
												placeholder="Practice Number"
												className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500
                                    focus:border-primary-500 block flex-1 min-w-0 w-full text-sm border-gray-300
                                    p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                    dark:focus:ring-blue-500 dark:focus:border-primary-500"
											/>
										</div>
									</div>

									<div className="mt-6 mb-6">
										<label
											htmlFor="practiceAddress"
											className="font-semibold text-md pb-2"
										>
											Practice Address
										</label>
										<div className="mt-2 pb-4 w-[18rem] md:w-[20rem] md:flex flex-col items-center justify-center">
											<input
												type="text"
												name="practiceAddress"
												id="practiceAddress"
												value={formik.values.practiceAddress}
												onChange={formik.handleChange}
												placeholder="Practice Address"
												className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500
                                    focus:border-primary-500 block flex-1 min-w-0 w-full text-sm border-gray-300
                                    p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                    dark:focus:ring-blue-500 dark:focus:border-primary-500"
											/>
										</div>
									</div>

									<div className="mt-6 mb-6">
										<label
											htmlFor="practiceStreetNumber"
											className="font-semibold text-md pb-2"
										>
											Practice Street Number
										</label>
										<div className="mt-2 pb-4 w-[18rem] md:w-[20rem] md:flex flex-col items-center justify-center">
											<input
												type="text"
												name="practiceStreetNumber"
												id="practiceStreetNumber"
												value={formik.values.practiceStreetNumber}
												onChange={formik.handleChange}
												placeholder="Practice Street Number"
												className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500
                                    focus:border-primary-500 block flex-1 min-w-0 w-full text-sm border-gray-300
                                    p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                    dark:focus:ring-blue-500 dark:focus:border-primary-500"
											/>
										</div>
									</div>

									<div className="mt-6 mb-6">
										<label
											htmlFor="practiceCity"
											className="font-semibold text-md pb-2"
										>
											Practice City
										</label>
										<div className="mt-2 pb-4 w-[18rem] md:w-[20rem] md:flex flex-col items-center justify-center">
											<input
												type="text"
												name="practiceCity"
												id="practiceCity"
												value={formik.values.practiceCity}
												onChange={formik.handleChange}
												placeholder="Practice Street Number"
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
			</div>
		</div>
	);
}
