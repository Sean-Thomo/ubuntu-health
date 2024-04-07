import React from "react";

function Landing() {
	return (
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
					appointments, and enhancing communication, all in one secure platform.
					Our EHR web app is designed to streamline your practice workflow,
					ensuring compliance and providing peace of mind.
				</p>
				<div className="flex justify-center items-center">
					<a
						href="#waitlist"
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
	);
}

export default Landing;
