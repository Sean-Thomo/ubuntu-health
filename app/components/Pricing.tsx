import Link from "next/link";
import React from "react";
import { CircleCheck } from "lucide-react";

const Pricing = () => {
	return (
		<section id="pricing" className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-800 mb-4">
						Our Pricing Plan
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Unlock the full potential of our EHR SAAS platform with flexible
						pricing plans tailored to your practice&lsquo;s needs.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{/* Basic Plan */}
					<div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
						<h2 className="text-xl font-semibold text-gray-800 mb-2">Basic</h2>
						<p className="text-3xl font-bold text-blue-600 mb-4">
							R499
							<span className="text-base font-normal text-gray-500">
								/ Month
							</span>
						</p>
						<ul className="space-y-3 mb-6 text-black">
							<li className="flex items-center">
								<CircleCheck className="text-blue-500 h-4 w-4 mr-2" />
								<span>Patient Management</span>
							</li>
						</ul>
						<Link
							href="/signup"
							className="block w-full py-2 border border-blue-600 text-blue-600 text-center
              rounded-md hover:bg-blue-50"
						>
							Sign Up
						</Link>
					</div>

					{/* Standard Plan */}
					<div
						className="border-2 border-blue-600 rounded-lg p-6 hover:shadow-md
          transition-shadow relative"
					>
						<div
							className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3
            py-1 rounded-bl rounded-tr"
						>
							POPULAR
						</div>
						<h2 className="text-xl font-semibold text-gray-800 mb-2">
							Standard
						</h2>
						<p className="text-3xl font-bold text-blue-600 mb-4">
							R999
							<span className="text-base font-normal text-gray-500">
								/ Month
							</span>
						</p>
						<ul className="space-y-3 mb-6 text-black">
							<li className="flex items-center">
								<CircleCheck className="text-blue-500 h-4 w-4 mr-2" />
								<span>Patient Management</span>
							</li>
							<li className="flex items-center">
								<CircleCheck className="text-blue-500 h-4 w-4 mr-2" />
								<span>Appointment Scheduling</span>
							</li>
							<li className="flex items-center">
								<CircleCheck className="text-blue-500 h-4 w-4 mr-2" />
								<span>E-Prescriptions</span>
							</li>
						</ul>
						<Link
							href="/signup"
							className="block w-full py-2 bg-blue-600 text-white text-center rounded-md
              hover:bg-blue-700"
						>
							Sign Up
						</Link>
					</div>

					{/* Premium Plan */}
					<div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
						<h2 className="text-xl font-semibold text-gray-800 mb-2">
							Premium
						</h2>
						<p className="text-3xl font-bold text-blue-600 mb-4">
							R1499
							<span className="text-base font-normal text-gray-500">
								/ Month
							</span>
						</p>
						<ul className="space-y-3 mb-6 text-black">
							<li className="flex items-center">
								<CircleCheck className="text-blue-500 h-4 w-4 mr-2" />
								<span>Patient Management</span>
							</li>
							<li className="flex items-center">
								<CircleCheck className="text-blue-500 h-4 w-4 mr-2" />
								<span>Appointment Scheduling</span>
							</li>
							<li className="flex items-center">
								<CircleCheck className="text-blue-500 h-4 w-4 mr-2" />
								<span>E-Prescriptions</span>
							</li>
							<li className="flex items-center">
								<CircleCheck className="text-blue-500 h-4 w-4 mr-2" />
								<span>Billing and Invoicing</span>
							</li>
							<li className="flex items-center">
								<CircleCheck className="text-blue-500 h-4 w-4 mr-2" />
								<span>Secure Communication</span>
							</li>
						</ul>
						<Link
							href="/signup"
							className="block w-full py-2 border border-blue-600 text-blue-600 text-center
              rounded-md hover:bg-blue-50"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
