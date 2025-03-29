"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				navRef.current &&
				!navRef.current.contains(event.target as Node) &&
				window.innerWidth < 768
			) {
				handleMenuClose();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Close menu on window resize
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleMenuClose = () => {
		setIsMenuOpen(false);
	};

	const navItems = [
		{ href: "/", label: "Home" },
		{ href: "/#about", label: "About" },
		{ href: "/#services", label: "Services" },
		{ href: "/#pricing", label: "Pricing" },
	];

	return (
		<div className="flex items-center justify-center">
			<header
				className="max-w-[90vw] bg-white fixed top-0 w-full px-4 md:px-10 flex items-center 
            justify-between z-50 h-16 shadow-sm transition-all duration-300 ease-in-out mb-6 md:mb-0"
			>
				<Link
					href="/"
					className="
                    text-blue-600 text-xl font-extrabold 
                    md:text-3xl 
                    transition-colors 
                    hover:text-blue-700
                "
					aria-label="Ubuntu Health Home"
				>
					Ubuntu Health
				</Link>

				<button
					className="md:hidden z-50"
					onClick={handleMenuToggle}
					aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
					aria-expanded={isMenuOpen}
				>
					{isMenuOpen ? (
						<X className="text-blue-600" size={24} />
					) : (
						<Menu className="text-blue-600" size={24} />
					)}
				</button>

				<nav
					ref={navRef}
					className={`
                    fixed top-0 left-0 w-full bg-white h-screen flex flex-col items-center justify-center 
                    space-y-6 z-40 transition-all duration-500 ease-in-out md:static md:h-auto md:w-auto 
                    md:flex-row md:translate-y-0 md:opacity-100 md:pointer-events-auto
                    ${
											isMenuOpen
												? "translate-y-0 opacity-100"
												: "-translate-y-full opacity-0 pointer-events-none"
										}`}
				>
					<div
						className="
                    flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-4
                "
					>
						{navItems.map((item, index) => (
							<Link
								key={item.href}
								href={item.href}
								className="
                                text-2xl 
                                md:text-sm
                                px-4 py-2
                                rounded-md
                                text-gray-800
                                hover:bg-blue-600
                                hover:text-white
                                transition-colors 
                                duration-500
                                transform 
                                hover:scale-105
                            "
								onClick={handleMenuClose}
							>
								{item.label}
							</Link>
						))}
					</div>
				</nav>

				{isMenuOpen && (
					<div
						className="
                        fixed 
                        inset-0 
                        bg-black 
                        bg-opacity-50 
                        z-30 
                        md:hidden
                    "
						onClick={handleMenuClose}
					/>
				)}
			</header>
		</div>
	);
};

export default Navbar;
