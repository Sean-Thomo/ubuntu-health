import Link from "next/link";
import React from "react";

const Landing = () => {
	return (
		<div className="flex items-center justify-center min-h-[85vh]">
			<div className="max-w-6xl text-center grid gap-8">
				<h1
					className=" font-extrabold text-3xl md:text-5xl
                            lg:text-6xl tracking-tight text-center"
				>
					Streamline Patient Care and Practice Efficiency with{" "}
					<span className="text-blue-600">Ubuntu Health</span>
				</h1>
				<p className=" my-6">
					Experience the simplicity of managing patient records, scheduling
					appointments, and enhancing communication, all in one secure platform.
					Our EHR web app is designed to streamline your practice workflow,
					ensuring compliance and providing peace of mind.
				</p>
				<div className="flex justify-center">
					<Link
						href="#waitlist"
						className="px-6 py-2 w-48 rounded-md bg-blue-600 text-white
                        text-sm font-medium shadow-lg hover:shadow-cyan-500/20
                        hover:bg-blue-700 transition-all"
					>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Landing;
