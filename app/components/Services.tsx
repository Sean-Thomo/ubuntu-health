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
				className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 md:grid-cols-2 lg:grid-cols-3
            lg:text-left gap-6"
			>
				<div
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors
                    hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>Patient Management </h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Comprehensive tools for storing and managing patient demographics,
						medical history, and treatment plans.
					</p>
				</div>

				<div
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors
                    hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Appointment Scheduling
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Flexible scheduling options with reminders and notifications for
						practitioners and patients.
					</p>
				</div>

				<div
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors
                    hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>Stock Management</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Manage your stock accurately with oue state of the app feature that
						can reserve medication for a future appointment.
					</p>
				</div>

				<div
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors
                    hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>E-Prescriptions</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Generate electronic prescriptions with ease, reducing errors and
						improving medication management.
					</p>
				</div>

				<div
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors
                    hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Billing and Invoicing
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
						Automate billing processes and generate invoices seamlessly
					</p>
				</div>

				<div
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>Communication</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
						Communicate securely with patients through encrypted messaging
					</p>
				</div>
			</div>
		</div>
	);
}

export default Services;
