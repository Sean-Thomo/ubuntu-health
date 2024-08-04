import React from "react";

export default function Landing() {
	return (
		<div className="md:h-[85vh] flex items-center justify-center top-10">
			<div className="max-w-6xl text-center grid gap-8">
				<h1
					className="text-slate-700 font-extrabold text-3xl md:text-5xl
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
						href="/basic"
						className="text-primary-50 bg-primary-600 hover:bg-primary-700
                    focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl
                    text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                    dark:focus:ring-blue-800"
					>
						Get Started
					</a>
				</div>
			</div>
		</div>
	);
}
