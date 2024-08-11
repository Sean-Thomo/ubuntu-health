"use client";
import { useRef } from "react";
import { useFormik } from "formik";
import Image from "next/image";

export default function SideNavbar() {
	const navRef = useRef<HTMLDivElement>(null);
	// const auth = getAuth();

	const formik = useFormik({
		initialValues: {},
		onSubmit: async () => {
			console.log("Signing Out");

			// signOut(auth)
			// 	.then(() => {
			// 		// Sign-out successful.
			// 		toast.success("Signed Out");
			// 	})
			// 	.catch((error) => {
			// 		toast.error(`Something went wrong, ${error}.`);
			// 	});
		},
	});

	const showNavbar = () => {
		console.log("Show Navbar");

		if (navRef.current) {
			navRef.current.classList.toggle("show-sidenav");
		}
	};
	return (
		<header className="min-h-screen">
			<nav
				ref={navRef}
				className="flex flex-col font-semibold space-y-8 sidenav"
			>
				<div className="flex items-center hover:bg-primary-600 p-2 rounded-md">
					<Image
						src="/assets/icons/dashboard.svg"
						alt="Dashboard"
						height={24}
						width={24}
						className="m-1"
					/>
					<a href="/" className="hover:text-secondary-50" onClick={showNavbar}>
						Dashboard
					</a>
				</div>
				<div className="flex items-center hover:bg-primary-600 p-2 rounded-md">
					<Image
						src="/assets/icons/appointment.svg"
						alt="Appointment"
						height={24}
						width={24}
						className="m-1"
					/>
					<a href="/" className="hover:text-secondary-50" onClick={showNavbar}>
						Appointments
					</a>
				</div>
				<div className="flex items-center hover:bg-primary-600 p-2 rounded-md">
					<Image
						src="/assets/icons/patients.svg"
						alt="Patients"
						height={24}
						width={24}
						className="m-1"
					/>
					<a href="/" className="hover:text-secondary-50" onClick={showNavbar}>
						Patients
					</a>
				</div>
				<div className="flex items-center hover:bg-primary-600 p-2 rounded-md">
					<Image
						src="/assets/icons/stock.svg"
						alt="Stock"
						height={24}
						width={24}
						className="m-1"
					/>
					<a href="/" className="hover:text-secondary-50" onClick={showNavbar}>
						Stock
					</a>
				</div>

				<form
					onSubmit={formik.handleSubmit}
					className=" hover:bg-primary-600 p-2 rounded-md"
				>
					<div className="flex justify-start">
						<Image
							src="/assets/icons/logout.svg"
							alt="Logout"
							height={24}
							width={24}
							className="m-1"
						/>
						<button className="mx-4">Logout</button>
					</div>
				</form>

				<button className="m-2 nav-open-btn" onClick={showNavbar}>
					<Image
						src="/assets/icons/arrow.svg"
						alt="Left arrow"
						height={24}
						width={24}
						className="m-1"
					/>
				</button>
			</nav>
		</header>
	);
}
