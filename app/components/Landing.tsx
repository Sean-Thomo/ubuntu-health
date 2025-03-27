import Link from "next/link";
import React from "react";

const Landing = () => {
	return (
		<div className="md:h-[85vh]  flex items-center justify-center top-10">
			<div className="max-w-6xl text-center grid gap-8">
				<h1
					className=" font-extrabold text-3xl md:text-5xl
                            lg:text-6xl tracking-tight text-center"
				>
					Streamline Patient Care and Practice Efficiency with{" "}
					<span className="text-blue-600">Ubuntu Health</span>
				</h1>
				<p className="text-base text-body-color my-6">
					Experience the simplicity of managing patient records, scheduling
					appointments, and enhancing communication, all in one secure platform.
					Our EHR web app is designed to streamline your practice workflow,
					ensuring compliance and providing peace of mind.
				</p>
				<div className="flex justify-center">
					<Link
						href="#waitlist"
						className="px-6 py-2 bg-gradient-to-r w-48
                        from-cyan-500 to-blue-500 rounded-md
                        text-sm font-medium shadow-lg shadow-cyan-500/20
                        hover:shadow-cyan-500/40 transition-all"
					>
						Join The Waiting List
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Landing;
