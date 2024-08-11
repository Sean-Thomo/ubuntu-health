"use client";
import { useRef } from "react";
import Image from "next/image";

export default function Navbar() {
	const navRef = useRef<HTMLDivElement>(null);

	const showNavbar = () => {
		if (navRef.current) {
			navRef.current.classList.toggle("responsive-nav");
		}
	};

	return (
		<header className="bg-secondary-900 w-full px-4 top-0 sticky flex items-center justify-between z-20 h-16 mb-16 md:mb-0 md:px-10">
			<a
				href="/"
				className="text-lime-600 text-xl font-extrabold sm:text-xl md:font-bold"
			>
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
					<Image
						src="/assets/icons/close-circle.svg"
						alt="Close"
						height={24}
						width={24}
						className="m-1"
					/>
				</button>
			</nav>
			<button
				className="m-2 nav-btn nav-open-btn md:hidden"
				onClick={showNavbar}
			>
				<Image
					src="/assets/icons/bars.svg"
					alt="Bars"
					height={24}
					width={24}
					className="m-1"
				/>
			</button>
		</header>
	);
}
