import React from "react";

function Services() {
	return (
		<div id="services">
			<div className="pt-20 flex flex-wrap -mx-4">
				<div className="w-full px-4">
					<div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[720px]">
						<h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark">
							What We Offer
						</h2>
					</div>
				</div>
			</div>

			<div
				className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3
            lg:text-left gap-6"
			>
				<div
					className="rounded-lg border px-5 py-4 group
                    hover:bg-blue-500"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold group-hover:text-white">
						Patient Management{" "}
					</h2>
					<p className="text-sm text-gray-500 group-hover:text-white">
						Comprehensive tools for storing and managing patient demographics,
						medical history, and treatment plans.
					</p>
				</div>

				<div
					className="rounded-lg border px-5 py-4 group
                    hover:bg-blue-500"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold group-hover:text-white">
						Appointment Scheduling
					</h2>
					<p className="text-sm text-gray-500 group-hover:text-white">
						Flexible scheduling options with reminders and notifications for
						practitioners and patients.
					</p>
				</div>

				<div
					className="rounded-lg border px-5 py-4 group
                    hover:bg-blue-500"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold group-hover:text-white">
						E-Prescriptions
					</h2>
					<p className="text-sm text-gray-500 group-hover:text-white">
						Generate electronic prescriptions with ease, reducing errors and
						improving medication management.
					</p>
				</div>

				<div
					className="rounded-lg border px-5 py-4 group
                    hover:bg-blue-500"
					rel="noopener noreferrer"
				>
					<h2 className="mb-3 text-2xl font-semibold group-hover:text-white">
						Billing and Invoicing
					</h2>
					<p className="text-sm text-gray-500 group-hover:text-white">
						Automate billing processes and generate invoices seamlessly
					</p>
				</div>
			</div>
		</div>
	);
}

export default Services;
