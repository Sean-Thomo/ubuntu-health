import Link from "next/link";
import React from "react";

export default function Pricing() {
	return (
		<div>
			<div
				id="pricing"
				className="pt-20 lg:pt-[120px] relative overflow-hidden"
			>
				<div className="container">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full px-4">
							<div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[720px]">
								<h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
									Our Pricing Plan
								</h2>
								<p className="text-base text-body-color">
									Unlock the full potential of our EHR SAAS platform with
									flexible pricing plans tailored to your practice&lsquo;s
									needs. Choose the plan that fits you best and start optimizing
									your patient care journey today.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap justify-center -mx-4">
						<div className="w-full md:w-1/2 lg:w-1/3 px-4">
							<div className="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 ">
								<span className="text-primary font-semibold text-lg block mb-4">
									Basic
								</span>
								<h2 className="font-bold text-dark mb-5 text-[42px]">
									R499
									<span className="text-base text-body-color font-medium">
										/ Month
									</span>
								</h2>
								<p className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2]">
									Features
								</p>
								<div className="mb-7">
									<ul>
										<li className="text-base text-body-color leading-loose mb-1 list-disc">
											Patient Management
										</li>
									</ul>
								</div>
								<Link
									href="/basic"
									className="text-primary-50 bg-primary-600 hover:bg-primary-700
                                    focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
                                    text-lg px-3 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                                    dark:focus:ring-blue-800"
								>
									Sign Up
								</Link>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 px-4">
							<div className="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 ">
								<span className="text-primary font-semibold text-lg block mb-4">
									Standard
								</span>
								<h2 className="font-bold text-dark mb-5 text-[42px]">
									R999
									<span className="text-base text-body-color font-medium">
										/ Month
									</span>
								</h2>
								<p className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2] ">
									Features
								</p>
								<div className="mb-7">
									<ul>
										<li className="text-base text-body-color leading-loose mb-1 list-disc">
											Patient Management
										</li>
										<li className="text-base text-body-color leading-loose mb-1 list-disc">
											Appointment Scheduling
										</li>
										<li className="text-base text-body-color leading-loose mb-1 list-disc">
											E-Prescriptions
										</li>
										<li className="text-base text-body-color leading-loose mb-1 list-disc">
											Billing and Invoicing
										</li>
									</ul>
								</div>
								<Link
									href="/standard"
									className="text-primary-50 bg-primary-600 hover:bg-primary-700
                                    focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
                                    text-lg px-3 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                                    dark:focus:ring-blue-800"
								>
									Sign Up
								</Link>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 px-4">
							<div className="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10">
								<span className="text-primary font-semibold text-lg block mb-4">
									Premium
								</span>
								<h2 className="font-bold text-dark mb-5 text-[42px]">
									R1249
									<span className="text-base text-body-color font-medium">
										/ Month
									</span>
								</h2>
								<p className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2]">
									Features
								</p>
								<div className="mb-7">
									<ul>
										<li className="text-base text-body-color leading-loose mb-1 list-disc">
											Patient Management
										</li>
										<li className="text-base text-body-color leading-loose mb-1 list-disc">
											Appointment Scheduling
										</li>
										<li className="text-base text-body-color leading-loose mb-1 list-disc">
											E-Prescriptions
										</li>
										<li className="text-base text-body-color leading-loose mb-1 list-disc">
											Billing and Invoicing
										</li>
										<li className="text-base text-body-color leading-loose mb-1 list-disc">
											Secure Communication
										</li>
									</ul>
								</div>
								<Link
									href="/premium"
									className="text-primary-50 bg-primary-600 hover:bg-primary-700
                                    focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
                                    text-lg px-3 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                                    dark:focus:ring-blue-800"
								>
									Sign Up
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
