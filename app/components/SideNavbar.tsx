"use client";
import { useRef } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

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
		if (navRef.current) {
			navRef.current.classList.toggle("responsive-sidenav");
		}
	};
	return (
		<header className="bg-primary-600 h-full max-w-52">
			<nav ref={navRef} className="font-semibold flex flex-col">
				<a href="/" className="mx-8" onClick={showNavbar}>
					Dashboard
				</a>
				<a href="/#about" className="mx-8" onClick={showNavbar}>
					Appointments
				</a>
				<a href="/#services" className="mx-8" onClick={showNavbar}>
					Patients
				</a>
				<a href="/#pricing" className="mx-8" onClick={showNavbar}>
					Stock
				</a>

				<form onSubmit={formik.handleSubmit}>
					<button>Logout</button>
				</form>
				<button
					className="m-2 nav-btn nav-close-btn md:hidden"
					onClick={showNavbar}
				>
					<svg className="text-lime-500" width={24} height={24}>
						<use xlinkHref="/appIcons.svg#close" />
					</svg>
				</button>
			</nav>
		</header>
	);
}
