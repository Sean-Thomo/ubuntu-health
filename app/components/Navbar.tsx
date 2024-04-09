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
		<header className="px-9 top-0 sticky flex items-center justify-between z-20 h-16">
			<a href="/" className="text-lime-600 text-3xl font-extrabold">
				<p>Ubuntu Health</p>
				{/* <svg
					className="transition ease-in-out text-slate-200 hover:text-lime-600 hover:scale-110 duration-150"
					width={103}
					height={55}
				>
					<use xlinkHref="/appIcons.svg#logo" />
				</svg> */}
			</a>
			<nav ref={navRef} className="font-semibold">
				<a href="/" className="hover:text-lime-600 mx-8">
					Home
				</a>
				<a href="/#about" className="hover:text-lime-600 mx-8">
					About
				</a>
				<a href="/#services" className="hover:text-lime-600 mx-8">
					Services
				</a>
				<a href="/#pricing" className="hover:text-lime-600 mx-8">
					Pricing
				</a>
				<button
					className="m-5 nav-btn nav-close-btn md:hidden"
					onClick={showNavbar}
				>
					<p>X</p>
					{/* <svg className="text-lime-500" width={24} height={24}>
						<use xlinkHref="/appIcons.svg#close-circle" />
					</svg> */}
				</button>
			</nav>
			<button
				className="m-5 nav-btn nav-open-btn md:hidden"
				onClick={showNavbar}
			>
				<p>|||</p>
				{/* <svg className="text-lime-500" width={24} height={24}>
					<use xlinkHref="/appIcons.svg#bars" />
				</svg> */}
			</button>
		</header>
	);
}
