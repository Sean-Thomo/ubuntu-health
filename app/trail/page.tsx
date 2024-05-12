import React from "react";
import Navbar from "../components/Navbar";

export default function Page() {
	return (
		<>
			<Navbar />
			<div className="mt-20">
				<div className="flex flex-wrap">
					<div className="w-full">
						<div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[720px]">
							<h2
								className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark
                                mb-4 py-6"
							>
								Start Your Free Trail
							</h2>
							<p className="text-base text-body-color">
								Get access to our basic plan via the free trial. No commitment
								cancel or upgrade any time.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
