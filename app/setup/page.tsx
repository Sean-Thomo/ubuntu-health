"use client";
import React from "react";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function page() {
	const formik = useFormik({
		initialValues: {
			practiceName: "",
			practiceEmail: "",
			practiceType: "",
			practiceNumber: "",
			practiceAddress: "",
			practiceStreetNumber: "",
			practiceCity: "",
			practiceProvince: "",
			practicePhoneNumber: "",
			adminName: "",
			adminSurname: "",
			adminEmail: "",
			adminIdNumber: "",
			adminPhoneNumber: "",
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
				<div className="text-center mx-auto mb-[60px] lg:mb-20 ">
					<h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 py-6">
						Let&lsquo;s get you started.
					</h2>
					<p className="text-base text-body-color">
						We&lsquo;ll need some information to get you started.
					</p>
					<div>
						<form
							onSubmit={formik.handleSubmit}
							className="rounded-lg pb-20 px-20"
						>
							<div id="setup" className="pt-20 md:flex">
								{/* Admin Details */}
								<div className="py-4 flex flex-col items-center md:w-1/2">
									<div className="text-start mx-auto lg:mb-10 max-w-[720px]">
										<h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 py-6">
											Admin Details
										</h2>

										{/* Admin Name */}
										<div className="mt-6 mb-6">
											<label
												htmlFor="adminName"
												className="font-semibold text-md pb-2"
											>
												Admin Name
											</label>
											<div className="mt-2 pb-4 w-[18rem] flex-col items-center justify-center md:w-[20rem] md:flex">
												<input
													type="text"
													name="adminName"
													id="adminName"
													value={formik.values.adminName}
													onChange={formik.handleChange}
													placeholder="John"
													className="rounded-lg bg-gray-50 border text-gray-900 min-w-0 w-full text-sm border-gray-300
                                                    p-2.5 focus:ring-blue-500 block flex-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                                    dark:focus:ring-blue-500 dark:focus:border-primary-500"
												/>
											</div>
										</div>
										{/* Admin Surname */}
										<div className="mt-6 mb-6">
											<label
												htmlFor="adminSurname"
												className="font-semibold text-md pb-2"
											>
												Admin Surname
											</label>
											<div className="mt-2 pb-4 w-[18rem] flex-col items-center justify-center md:w-[20rem] md:flex">
												<input
													type="text"
													name="adminSurname"
													id="adminSurname"
													value={formik.values.adminSurname}
													onChange={formik.handleChange}
													placeholder="Doe"
													className="rounded-lg bg-gray-50 border text-gray-900 min-w-0 w-full text-sm border-gray-300
                                                    p-2.5 focus:ring-blue-500 block flex-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                                    dark:focus:ring-blue-500 dark:focus:border-primary-500"
												/>
											</div>
										</div>
										{/* Admin Email */}
										<div className="mt-6 mb-6">
											<label
												htmlFor="adminEmail"
												className="font-semibold text-md pb-2"
											>
												Admin Email
											</label>
											<div className="mt-2 pb-4 w-[18rem] flex-col items-center justify-center md:w-[20rem] md:flex">
												<input
													type="email"
													name="adminEmail"
													id="adminEmail"
													value={formik.values.adminEmail}
													onChange={formik.handleChange}
													placeholder="john.doe@email.com"
													className="rounded-lg bg-gray-50 border text-gray-900 min-w-0 w-full text-sm border-gray-300
                                                    p-2.5 focus:ring-blue-500 block flex-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                                    dark:focus:ring-blue-500 dark:focus:border-primary-500"
												/>
											</div>
										</div>
										{/* Admin ID Number */}
										<div className="mt-6 mb-6">
											<label
												htmlFor="adminIdNumber"
												className="font-semibold text-md pb-2"
											>
												Admin ID Number
											</label>
											<div className="mt-2 pb-4 w-[18rem] flex-col items-center justify-center md:w-[20rem] md:flex">
												<input
													type="text"
													name="adminIdNumber"
													id="adminIdNumber"
													value={formik.values.adminIdNumber}
													onChange={formik.handleChange}
													placeholder="0000001111222"
													className="rounded-lg bg-gray-50 border text-gray-900 min-w-0 w-full text-sm border-gray-300
                                                    p-2.5 focus:ring-blue-500 block flex-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                                    dark:focus:ring-blue-500 dark:focus:border-primary-500"
												/>
											</div>
										</div>
										{/* Admin Phone Number */}
										<div className="mt-6 mb-6">
											<label
												htmlFor="adminPhoneNumber"
												className="font-semibold text-md pb-2"
											>
												Admin Phone Number
											</label>
											<div className="mt-2 pb-4 w-[18rem] flex-col items-center justify-center md:w-[20rem] md:flex">
												<input
													type="text"
													name="adminPhoneNumber"
													id="adminPhoneNumber"
													value={formik.values.adminPhoneNumber}
													onChange={formik.handleChange}
													placeholder="0123456789"
													className="rounded-lg bg-gray-50 border text-gray-900 min-w-0 w-full text-sm border-gray-300
                                                    p-2.5 focus:ring-blue-500 block flex-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                                    dark:focus:ring-blue-500 dark:focus:border-primary-500"
												/>
											</div>
										</div>
									</div>
								</div>
								{/* Practice Details */}
								<div className="py-4 flex flex-col items-center md:w-1/2">
									<div className="text-start mx-auto lg:mb-10 max-w-[720px]">
										<h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 py-6">
											Practice Details
										</h2>
										{/* Practice Name */}
										<div className="mt-6 mb-6">
											<label
												htmlFor="practiceName"
												className="font-semibold text-md pb-2"
											>
												Practice Name
											</label>
											<div className="mt-2 pb-4 w-[18rem] flex-col items-center justify-center md:w-[20rem] md:flex">
												<input
													type="text"
													name="practiceName"
													id="practiceName"
													value={formik.values.practiceName}
													onChange={formik.handleChange}
													placeholder="john.doe@email.com"
													className="rounded-lg bg-gray-50 border text-gray-900 min-w-0 w-full text-sm border-gray-300
                                                    p-2.5 focus:ring-blue-500 block flex-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                                    dark:focus:ring-blue-500 dark:focus:border-primary-500"
												/>
											</div>
										</div>
										{/* Practice Email */}
										<div className="mt-6 mb-6">
											<label
												htmlFor="practiceEmail"
												className="font-semibold text-md pb-2"
											>
												Practice Email
											</label>
											<div className="mt-2 pb-4 w-[18rem] flex-col items-center justify-center md:w-[20rem] md:flex">
												<input
													type="text"
													name="practiceEmail"
													id="practiceEmail"
													value={formik.values.practiceEmail}
													onChange={formik.handleChange}
													placeholder="john.doe@email.com"
													className="rounded-lg bg-gray-50 border text-gray-900 min-w-0 w-full text-sm border-gray-300
                                                    p-2.5 focus:ring-blue-500 block flex-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                                    dark:focus:ring-blue-500 dark:focus:border-primary-500"
												/>
											</div>
										</div>
										{/* Practice Type */}
										<div className="mt-6 mb-6">
											<label
												htmlFor="practiceType"
												className="font-semibold text-md pb-2"
											>
												Practice Type
											</label>
											<div className="mt-2 pb-4 w-[18rem] flex-col items-center justify-center md:w-[20rem] md:flex">
												<input
													type="text"
													name="practiceType"
													id="practiceType"
													value={formik.values.practiceType}
													onChange={formik.handleChange}
													placeholder="Practice Type"
													className="rounded-lg bg-gray-50 border text-gray-900 min-w-0 w-full text-sm border-gray-300
                                                    p-2.5 focus:ring-blue-500 block flex-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
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
											<div className="mt-2 pb-4 w-[18rem] flex-col items-center justify-center md:w-[20rem] md:flex">
												<input
													type="text"
													name="practiceNumber"
													id="practiceNumber"
													value={formik.values.practiceNumber}
													onChange={formik.handleChange}
													placeholder="Practice Number"
													className="rounded-lg bg-gray-50 border text-gray-900 min-w-0 w-full text-sm border-gray-300
                                                    p-2.5 focus:ring-blue-500 block flex-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
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
											<div className="mt-2 pb-4 w-[18rem] flex-col items-center justify-center md:w-[20rem] md:flex">
												<input
													type="text"
													name="practiceAddress"
													id="practiceAddress"
													value={formik.values.practiceAddress}
													onChange={formik.handleChange}
													placeholder="Practice Address"
													className="rounded-lg bg-gray-50 border text-gray-900 min-w-0 w-full text-sm border-gray-300
                                                    p-2.5 focus:ring-blue-500 block flex-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
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
											<div className="mt-2 pb-4 w-[18rem] flex-col items-center justify-center md:w-[20rem] md:flex">
												<input
													type="text"
													name="practiceStreetNumber"
													id="practiceStreetNumber"
													value={formik.values.practiceStreetNumber}
													onChange={formik.handleChange}
													placeholder="Practice Street Number"
													className="rounded-lg bg-gray-50 border text-gray-900 min-w-0 w-full text-sm border-gray-300
                                                    p-2.5 focus:ring-blue-500 block flex-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
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
											<div className="mt-2 pb-4 w-[18rem] flex-col items-center justify-center md:w-[20rem] md:flex">
												<input
													type="text"
													name="practiceCity"
													id="practiceCity"
													value={formik.values.practiceCity}
													onChange={formik.handleChange}
													placeholder="Practice Street Number"
													className="rounded-lg bg-gray-50 border text-gray-900 min-w-0 w-full text-sm border-gray-300
                                                    p-2.5 focus:ring-blue-500 block flex-1 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                                    dark:focus:ring-blue-500 dark:focus:border-primary-500"
												/>
											</div>
										</div>
										<div className="flex items-center justify-center">
											<button
												type="submit"
												className="flex flex-col items-center justify-center text-center font-medium rounded-2xl
                                                text-lg px-5 py-2.5 text-primary-50 bg-primary-600 hover:bg-primary-700
                                                focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                                                dark:focus:ring-blue-800 "
											>
												Submit
											</button>
										</div>
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
