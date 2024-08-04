"use client";
import { useRef } from "react";

export default function Navbar() {
	const navRef = useRef<HTMLDivElement>(null);

	const showNavbar = () => {
		if (navRef.current) {
			navRef.current.classList.toggle("responsive-nav");
		}
	};

	return (
		<header className="bg-secondary-900 w-full px-4 top-0 sticky flex items-center justify-between z-20 h-16 mb-16 md:mb-0 md:px-10">
			<a href="/" className="text-lime-600 text-xl font-extrabold md:text-3xl">
				Ubuntu Health
			</a>
			<nav ref={navRef} className="font-semibold">
				<a href="/" className="hover:text-lime-600 mx-8" onClick={showNavbar}>
					Home
				</a>
				<a
					href="/#about"
					className="hover:text-lime-600 mx-8"
					onClick={showNavbar}
				>
					About
				</a>
				<a
					href="/#services"
					className="hover:text-lime-600 mx-8"
					onClick={showNavbar}
				>
					Services
				</a>
				<a
					href="/#pricing"
					className="hover:text-lime-600 mx-8"
					onClick={showNavbar}
				>
					Pricing
				</a>
				<button
					className="m-2 nav-btn nav-close-btn md:hidden"
					onClick={showNavbar}
				>
					<svg className="text-lime-500" width={24} height={24}>
						<use xlinkHref="/appIcons.svg#close" />
					</svg>
				</button>
			</nav>
			<button
				className="m-2 nav-btn nav-open-btn md:hidden"
				onClick={showNavbar}
			>
				<svg className="text-lime-500" width={24} height={24}>
					<use xlinkHref="/appIcons.svg#hamburger" />
				</svg>
			</button>
		</header>
	);
}
