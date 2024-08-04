import React from "react";
import Navbar from "../components/Navbar";
import PatientForm from "../components/forms/PatientForm";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
	return (
		<>
			<div className="flex h-screen max-h-screen">
				{/* TODO: OTP Verification */}

				<section className="container ny-auto">
					<div className="sub-container max-w-[496px]">
						<PatientForm />
						<div className="text-center">
							<div className="text-14-regular mt-20 flex justify-between">
								<p className="justify-items-end text-dark-600 xl:text-left">
									© 2024 Ubuntu Health
								</p>
							</div>
						</div>
					</div>
				</section>

				<Image
					src="/assets/images/onboarding-img.png"
					height={1000}
					width={1000}
					alt="Doctor"
					className="side-image max-w-[50%]"
				/>
			</div>
		</>
	);
}
