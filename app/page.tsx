import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<>
			{/* Navbar */}
			<Navbar />
			<main className="flex min-h-screen flex-col items-center justify-center px-24">
				{/* Landing Section */}
				<div className="h-[85vh] flex items-center justify-center">
					<div className="max-w-6xl text-center grid gap-8">
						<h1
							className="text-slate-700 font-extrabold text-4xl sm:text-5xl
                            lg:text-6xl tracking-tight text-center dark:text-white"
						>
							Streamline Patient Care and Practice Efficiency with{" "}
							<span className="text-primary-600">Ubuntu Health</span>
						</h1>
						<p className="text-base text-body-color my-6">
							Experience the simplicity of managing patient records, scheduling
							appointments, and enhancing communication, all in one secure
							platform. Our EHR web app is designed to streamline your practice
							workflow, ensuring compliance and providing peace of mind.
						</p>
						<div className="flex justify-center items-center">
							<a
								className="text-primary-50 bg-primary-600 hover:bg-primary-700
                    focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full
                    text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                    dark:focus:ring-blue-800"
							>
								Join The Waiting List
							</a>
						</div>
					</div>
				</div>

				{/* Mission Statement */}
				<div id="about" className="flex flex-wrap -mx-4">
					<div className="w-full px-4">
						<div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
							<h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 py-6">
								Our Mission
							</h2>
							<p className="text-base text-body-color">
								Our mission is to empower family doctors, general practitioners,
								and small clinics with intuitive and secure EHR software,
								enabling them to deliver exceptional healthcare services while
								maximizing productivity and patient satisfaction.
							</p>
						</div>
					</div>
				</div>

				{/* Services */}
				<div id="services" className="flex flex-wrap -mx-4">
					<div className="w-full px-4">
						<div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
							<h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark">
								What We Offer
							</h2>
						</div>
					</div>
				</div>

				<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-6">
					<a
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Patient Management{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							Comprehensive tools for storing and managing patient demographics,
							medical history, and treatment plans.
						</p>
					</a>

					<a
						href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Appointment Scheduling{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							Flexible scheduling options with reminders and notifications for
							practitioners and patients.
						</p>
					</a>

					<a
						href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							E-Prescriptions{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							Generate electronic prescriptions with ease, reducing errors and
							improving medication management.
						</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Billing and Invoicing{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
							Automate billing processes and generate invoices seamlessly
						</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Communication{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
							Communicate securely with patients through encrypted messaging
						</p>
					</a>
				</div>

				{/* About Us */}

				{/* Pricing */}
				<link
					rel="stylesheet"
					href="https://cdn.tailgrids.com/tailgrids-fallback.css"
				/>
				<section
					id="pricing"
					className="bg-white pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden "
				>
					<div className="container">
						<div className="flex flex-wrap -mx-4">
							<div className="w-full px-4">
								<div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
									<h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
										Our Pricing Plan
									</h2>
									<p className="text-base text-body-color">
										There are many variations of passages of Lorem Ipsum
										available but the majority have suffered alteration in some
										form.
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
										ZAR499
										<span className="text-base text-body-color font-medium">
											/ Month
										</span>
									</h2>
									<p className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2]">
										Features
									</p>
									<div className="mb-7">
										<p className="text-base text-body-color leading-loose mb-1">
											Patient Management
										</p>
										<p className="text-base text-body-color leading-loose mb-1">
											Appointment Scheduling
										</p>
									</div>
									<a
										href="javascript:void(0)"
										className="w-full block text-base font-semibold text-primary bg-transparent border border-[#D4DEFF] rounded-md text-center p-4 hover:text-white hover:bg-primary hover:border-primary transition "
									>
										Choose Basic
									</a>
									<div>
										<span className="absolute right-0 top-7 z-[-1]">
											<svg
												width={77}
												height={172}
												viewBox="0 0 77 172"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle
													cx={86}
													cy={86}
													r={86}
													fill="url(#paint0_linear)"
												/>
												<defs>
													<linearGradient
														id="paint0_linear"
														x1={86}
														y1={0}
														x2={86}
														y2={172}
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#3056D3" stopOpacity="0.09" />
														<stop
															offset={1}
															stopColor="#C4C4C4"
															stopOpacity={0}
														/>
													</linearGradient>
												</defs>
											</svg>
										</span>
										<span className="absolute right-4 top-4 z-[-1]">
											<svg
												width={41}
												height={89}
												viewBox="0 0 41 89"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle
													cx="38.9138"
													cy="87.4849"
													r="1.42021"
													transform="rotate(180 38.9138 87.4849)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="74.9871"
													r="1.42021"
													transform="rotate(180 38.9138 74.9871)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="62.4892"
													r="1.42021"
													transform="rotate(180 38.9138 62.4892)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="38.3457"
													r="1.42021"
													transform="rotate(180 38.9138 38.3457)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="13.634"
													r="1.42021"
													transform="rotate(180 38.9138 13.634)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="50.2754"
													r="1.42021"
													transform="rotate(180 38.9138 50.2754)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="26.1319"
													r="1.42021"
													transform="rotate(180 38.9138 26.1319)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="1.42021"
													r="1.42021"
													transform="rotate(180 38.9138 1.42021)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="87.4849"
													r="1.42021"
													transform="rotate(180 26.4157 87.4849)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="74.9871"
													r="1.42021"
													transform="rotate(180 26.4157 74.9871)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="62.4892"
													r="1.42021"
													transform="rotate(180 26.4157 62.4892)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="38.3457"
													r="1.42021"
													transform="rotate(180 26.4157 38.3457)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="13.634"
													r="1.42021"
													transform="rotate(180 26.4157 13.634)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="50.2754"
													r="1.42021"
													transform="rotate(180 26.4157 50.2754)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="26.1319"
													r="1.42021"
													transform="rotate(180 26.4157 26.1319)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="1.4202"
													r="1.42021"
													transform="rotate(180 26.4157 1.4202)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="87.4849"
													r="1.42021"
													transform="rotate(180 13.9177 87.4849)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="74.9871"
													r="1.42021"
													transform="rotate(180 13.9177 74.9871)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="62.4892"
													r="1.42021"
													transform="rotate(180 13.9177 62.4892)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="38.3457"
													r="1.42021"
													transform="rotate(180 13.9177 38.3457)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="13.634"
													r="1.42021"
													transform="rotate(180 13.9177 13.634)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="50.2754"
													r="1.42021"
													transform="rotate(180 13.9177 50.2754)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="26.1319"
													r="1.42021"
													transform="rotate(180 13.9177 26.1319)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="1.42019"
													r="1.42021"
													transform="rotate(180 13.9177 1.42019)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="87.4849"
													r="1.42021"
													transform="rotate(180 1.41963 87.4849)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="74.9871"
													r="1.42021"
													transform="rotate(180 1.41963 74.9871)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="62.4892"
													r="1.42021"
													transform="rotate(180 1.41963 62.4892)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="38.3457"
													r="1.42021"
													transform="rotate(180 1.41963 38.3457)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="13.634"
													r="1.42021"
													transform="rotate(180 1.41963 13.634)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="50.2754"
													r="1.42021"
													transform="rotate(180 1.41963 50.2754)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="26.1319"
													r="1.42021"
													transform="rotate(180 1.41963 26.1319)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="1.4202"
													r="1.42021"
													transform="rotate(180 1.41963 1.4202)"
													fill="#3056D3"
												/>
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:w-1/3 px-4">
								<div className="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 ">
									<span className="text-primary font-semibold text-lg block mb-4">
										Standard
									</span>
									<h2 className="font-bold text-dark mb-5 text-[42px]">
										ZAR999
										<span className="text-base text-body-color font-medium">
											/ Month
										</span>
									</h2>
									<p className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2] ">
										Features
									</p>
									<div className="mb-7">
										<p className="text-base text-body-color leading-loose mb-1">
											Patient Management
										</p>
										<p className="text-base text-body-color leading-loose mb-1">
											Appointment Scheduling
										</p>
										<p className="text-base text-body-color leading-loose mb-1">
											E-Prescriptions
										</p>
										<p className="text-base text-body-color leading-loose mb-1">
											Billing and Invoicing
										</p>
									</div>
									<a
										href="javascript:void(0)"
										className="w-full block text-base font-semibold text-white bg-primary border border-primary rounded-md text-center p-4 hover:bg-opacity-90 transition "
									>
										Choose Standard
									</a>
									<div>
										<span className="absolute right-0 top-7 z-[-1]">
											<svg
												width={77}
												height={172}
												viewBox="0 0 77 172"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle
													cx={86}
													cy={86}
													r={86}
													fill="url(#paint0_linear)"
												/>
												<defs>
													<linearGradient
														id="paint0_linear"
														x1={86}
														y1={0}
														x2={86}
														y2={172}
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#3056D3" stopOpacity="0.09" />
														<stop
															offset={1}
															stopColor="#C4C4C4"
															stopOpacity={0}
														/>
													</linearGradient>
												</defs>
											</svg>
										</span>
										<span className="absolute right-4 top-4 z-[-1]">
											<svg
												width={41}
												height={89}
												viewBox="0 0 41 89"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle
													cx="38.9138"
													cy="87.4849"
													r="1.42021"
													transform="rotate(180 38.9138 87.4849)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="74.9871"
													r="1.42021"
													transform="rotate(180 38.9138 74.9871)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="62.4892"
													r="1.42021"
													transform="rotate(180 38.9138 62.4892)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="38.3457"
													r="1.42021"
													transform="rotate(180 38.9138 38.3457)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="13.634"
													r="1.42021"
													transform="rotate(180 38.9138 13.634)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="50.2754"
													r="1.42021"
													transform="rotate(180 38.9138 50.2754)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="26.1319"
													r="1.42021"
													transform="rotate(180 38.9138 26.1319)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="1.42021"
													r="1.42021"
													transform="rotate(180 38.9138 1.42021)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="87.4849"
													r="1.42021"
													transform="rotate(180 26.4157 87.4849)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="74.9871"
													r="1.42021"
													transform="rotate(180 26.4157 74.9871)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="62.4892"
													r="1.42021"
													transform="rotate(180 26.4157 62.4892)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="38.3457"
													r="1.42021"
													transform="rotate(180 26.4157 38.3457)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="13.634"
													r="1.42021"
													transform="rotate(180 26.4157 13.634)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="50.2754"
													r="1.42021"
													transform="rotate(180 26.4157 50.2754)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="26.1319"
													r="1.42021"
													transform="rotate(180 26.4157 26.1319)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="1.4202"
													r="1.42021"
													transform="rotate(180 26.4157 1.4202)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="87.4849"
													r="1.42021"
													transform="rotate(180 13.9177 87.4849)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="74.9871"
													r="1.42021"
													transform="rotate(180 13.9177 74.9871)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="62.4892"
													r="1.42021"
													transform="rotate(180 13.9177 62.4892)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="38.3457"
													r="1.42021"
													transform="rotate(180 13.9177 38.3457)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="13.634"
													r="1.42021"
													transform="rotate(180 13.9177 13.634)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="50.2754"
													r="1.42021"
													transform="rotate(180 13.9177 50.2754)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="26.1319"
													r="1.42021"
													transform="rotate(180 13.9177 26.1319)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="1.42019"
													r="1.42021"
													transform="rotate(180 13.9177 1.42019)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="87.4849"
													r="1.42021"
													transform="rotate(180 1.41963 87.4849)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="74.9871"
													r="1.42021"
													transform="rotate(180 1.41963 74.9871)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="62.4892"
													r="1.42021"
													transform="rotate(180 1.41963 62.4892)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="38.3457"
													r="1.42021"
													transform="rotate(180 1.41963 38.3457)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="13.634"
													r="1.42021"
													transform="rotate(180 1.41963 13.634)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="50.2754"
													r="1.42021"
													transform="rotate(180 1.41963 50.2754)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="26.1319"
													r="1.42021"
													transform="rotate(180 1.41963 26.1319)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="1.4202"
													r="1.42021"
													transform="rotate(180 1.41963 1.4202)"
													fill="#3056D3"
												/>
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:w-1/3 px-4">
								<div className="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10">
									<span className="text-primary font-semibold text-lg block mb-4">
										Premium
									</span>
									<h2 className="font-bold text-dark mb-5 text-[42px]">
										ZAR1499
										<span className="text-base text-body-color font-medium">
											/ Month
										</span>
									</h2>
									<p className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2]">
										Features
									</p>
									<div className="mb-7">
										<p className="text-base text-body-color leading-loose mb-1">
											Patient Management
										</p>
										<p className="text-base text-body-color leading-loose mb-1">
											Appointment Scheduling
										</p>
										<p className="text-base text-body-color leading-loose mb-1">
											E-Prescriptions
										</p>
										<p className="text-base text-body-color leading-loose mb-1">
											Billing and Invoicing
										</p>
										<p className="text-base text-body-color leading-loose mb-1">
											Lab Integration
										</p>
										<p className="text-base text-body-color leading-loose mb-1">
											Secure Communication
										</p>
									</div>
									<a
										href="javascript:void(0)"
										className="w-full block text-base font-semibold text-primary bg-transparent border border-[#D4DEFF] rounded-md text-center p-4 hover:text-white hover:bg-primary hover:border-primary transition"
									>
										Choose Premium
									</a>
									<div>
										<span className="absolute right-0 top-7 z-[-1]">
											<svg
												width={77}
												height={172}
												viewBox="0 0 77 172"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle
													cx={86}
													cy={86}
													r={86}
													fill="url(#paint0_linear)"
												/>
												<defs>
													<linearGradient
														id="paint0_linear"
														x1={86}
														y1={0}
														x2={86}
														y2={172}
														gradientUnits="userSpaceOnUse"
													>
														<stop stopColor="#3056D3" stopOpacity="0.09" />
														<stop
															offset={1}
															stopColor="#C4C4C4"
															stopOpacity={0}
														/>
													</linearGradient>
												</defs>
											</svg>
										</span>
										<span className="absolute right-4 top-4 z-[-1]">
											<svg
												width={41}
												height={89}
												viewBox="0 0 41 89"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<circle
													cx="38.9138"
													cy="87.4849"
													r="1.42021"
													transform="rotate(180 38.9138 87.4849)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="74.9871"
													r="1.42021"
													transform="rotate(180 38.9138 74.9871)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="62.4892"
													r="1.42021"
													transform="rotate(180 38.9138 62.4892)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="38.3457"
													r="1.42021"
													transform="rotate(180 38.9138 38.3457)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="13.634"
													r="1.42021"
													transform="rotate(180 38.9138 13.634)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="50.2754"
													r="1.42021"
													transform="rotate(180 38.9138 50.2754)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="26.1319"
													r="1.42021"
													transform="rotate(180 38.9138 26.1319)"
													fill="#3056D3"
												/>
												<circle
													cx="38.9138"
													cy="1.42021"
													r="1.42021"
													transform="rotate(180 38.9138 1.42021)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="87.4849"
													r="1.42021"
													transform="rotate(180 26.4157 87.4849)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="74.9871"
													r="1.42021"
													transform="rotate(180 26.4157 74.9871)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="62.4892"
													r="1.42021"
													transform="rotate(180 26.4157 62.4892)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="38.3457"
													r="1.42021"
													transform="rotate(180 26.4157 38.3457)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="13.634"
													r="1.42021"
													transform="rotate(180 26.4157 13.634)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="50.2754"
													r="1.42021"
													transform="rotate(180 26.4157 50.2754)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="26.1319"
													r="1.42021"
													transform="rotate(180 26.4157 26.1319)"
													fill="#3056D3"
												/>
												<circle
													cx="26.4157"
													cy="1.4202"
													r="1.42021"
													transform="rotate(180 26.4157 1.4202)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="87.4849"
													r="1.42021"
													transform="rotate(180 13.9177 87.4849)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="74.9871"
													r="1.42021"
													transform="rotate(180 13.9177 74.9871)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="62.4892"
													r="1.42021"
													transform="rotate(180 13.9177 62.4892)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="38.3457"
													r="1.42021"
													transform="rotate(180 13.9177 38.3457)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="13.634"
													r="1.42021"
													transform="rotate(180 13.9177 13.634)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="50.2754"
													r="1.42021"
													transform="rotate(180 13.9177 50.2754)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="26.1319"
													r="1.42021"
													transform="rotate(180 13.9177 26.1319)"
													fill="#3056D3"
												/>
												<circle
													cx="13.9177"
													cy="1.42019"
													r="1.42021"
													transform="rotate(180 13.9177 1.42019)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="87.4849"
													r="1.42021"
													transform="rotate(180 1.41963 87.4849)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="74.9871"
													r="1.42021"
													transform="rotate(180 1.41963 74.9871)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="62.4892"
													r="1.42021"
													transform="rotate(180 1.41963 62.4892)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="38.3457"
													r="1.42021"
													transform="rotate(180 1.41963 38.3457)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="13.634"
													r="1.42021"
													transform="rotate(180 1.41963 13.634)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="50.2754"
													r="1.42021"
													transform="rotate(180 1.41963 50.2754)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="26.1319"
													r="1.42021"
													transform="rotate(180 1.41963 26.1319)"
													fill="#3056D3"
												/>
												<circle
													cx="1.41963"
													cy="1.4202"
													r="1.42021"
													transform="rotate(180 1.41963 1.4202)"
													fill="#3056D3"
												/>
											</svg>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
