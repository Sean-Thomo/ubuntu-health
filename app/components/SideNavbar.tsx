"use client";
import { useRef } from "react";
import { useFormik } from "formik";
import Image from "next/image";
import styles from "@/styles/Sidebar.module.css";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import { usePractice } from "../context/PracticeContext";

export default function SideNavbar() {
	const navRef = useRef<HTMLDivElement>(null);
	const { practiceNumber } = usePractice();

	const formik = useFormik({
		initialValues: {},
		onSubmit: async () => {
			console.log("Loggin out");

			// try {
			// 	const auth = getAuth();
			// 	signOut(auth)
			// 		.then(() => {
			// 			// Sign-out successful.
			// 			toast.success("Signed Out");
			// 		})
			// 		.catch((error) => {
			// 			toast.error(`Something went wrong, ${error}.`);
			// 		});
			// } catch (error) {}
		},
	});

	const showNavbar = () => {
		if (navRef.current) {
			navRef.current.classList.toggle(styles.responsiveNav);
		}
	};

	return (
		<header className="bg-[#FFF] min-h-screen w-full max-w-40 flex items-center justify-between">
			<nav
				ref={navRef}
				className={`${styles.nav} flex flex-col justify-center font-medium md:space-y-8`}
			>
				<div className="flex items-center p-2 rounded-md max-w-56 hover:bg-primary-600 hover:text-secondary-50">
					<Image
						src="/assets/icons/dashboard.svg"
						alt="Dashboard"
						height={24}
						width={24}
						className="m-1"
					/>
					<Link
						href={`/${practiceNumber}/dashboard`}
						className=""
						onClick={showNavbar}
					>
						Dashboard
					</Link>
				</div>
				<div className="flex items-center p-2 rounded-md max-w-56 hover:bg-primary-600 hover:text-secondary-50">
					<Image
						src="/assets/icons/patients.svg"
						alt="Patients"
						height={24}
						width={24}
						className="m-1"
					/>
					<Link href={`/${practiceNumber}/patients`} onClick={showNavbar}>
						Patients
					</Link>
				</div>
				<div className="flex items-center p-2 rounded-md max-w-56 hover:bg-primary-600 hover:text-secondary-50">
					<Image
						src="/assets/icons/appointment.svg"
						alt="Appointment"
						height={24}
						width={24}
						className="m-1"
					/>
					<Link href={`/${practiceNumber}/appointments`} onClick={showNavbar}>
						Appointments
					</Link>
				</div>
				<div className="flex items-center p-2 rounded-md max-w-56 hover:bg-primary-600 hover:text-secondary-50">
					<Image
						src="/assets/icons/stock.svg"
						alt="Stock"
						height={24}
						width={24}
						className="m-1"
					/>
					<Link href={`/${practiceNumber}/inventory`} onClick={showNavbar}>
						Inventory
					</Link>
				</div>

				<form
					onSubmit={formik.handleSubmit}
					className="hover:bg-primary-600 hover:text-secondary-50 p-2 rounded-md max-w-56"
				>
					<div className="flex justify-start">
						<Image
							src="/assets/icons/logout.svg"
							alt="Logout"
							height={24}
							width={24}
							className="m-1"
						/>
						<button className="mx-4" type="submit">
							Logout
						</button>
					</div>
				</form>

				<button
					className="m-2 absolute right-8 bottom-8 hover:bg-primary-600 rounded-md md:hidden"
					onClick={showNavbar}
				>
					<Image
						src="/assets/icons/arrow.svg"
						alt="Left arrow"
						height={24}
						width={24}
						className="m-1"
					/>
				</button>
			</nav>
			<button
				className="m-1 hover:bg-primary-50 rounded-md md:hidden sm:md-4"
				onClick={showNavbar}
			>
				<Image
					src="/assets/icons/right-arrow.svg"
					alt="Close Nav bar"
					height={24}
					width={24}
					className="m-1"
				/>
			</button>

			<ToastContainer
				theme="dark"
				position="top-right"
				hideProgressBar={false}
			/>
		</header>
	);
}
