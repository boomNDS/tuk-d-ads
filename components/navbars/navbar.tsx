"use client";
import { useState, useEffect, useRef } from "react";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import LineButton from "@/components/line-button";
import Logo from "@/components/logo";

const Navbar = () => {
	const [visible, setVisible] = useState(true);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.pageYOffset;

			// Always show at the very top
			if (currentScrollY <= 0) {
				setVisible(true);
			}
			// Scrolling down → hide
			else if (currentScrollY > lastScrollY.current) {
				setVisible(false);
			}
			// Scrolling up → show
			else {
				setVisible(true);
			}

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`
         fixed inset-x-4 top-6 h-16 z-50
         max-w-screen-xl mx-auto rounded-full
         bg-background border dark:border-slate-700/70
         transition-all duration-300 ease-in-out
         transform ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
       `}
		>
			<div className="h-full flex items-center justify-between px-4">
				<Logo />

				{/* Desktop Menu */}
				{/* <NavMenu className="hidden md:block" /> */}

				<div className="flex items-center gap-3">
					<LineButton />

					{/* Mobile Menu */}
					{/* <div className="md:hidden">
            <NavigationSheet />
          </div> */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
