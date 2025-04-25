"use client";

import LineButton from "@/components/line-button";
import Logo from "@/components/logo";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
	const [visible, setVisible] = useState(true);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const y = window.pageYOffset;
			setVisible(y <= 0 || y < lastScrollY.current);
			lastScrollY.current = y;
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				"fixed inset-x-4 top-6 h-16 z-50 max-w-screen-xl mx-auto rounded-full px-4",
				"bg-background border dark:border-slate-700/70 shadow-lg",
				"transition-all duration-300 ease-in-out transform",
				"motion-safe:animate-in motion-safe:slide-in-from-top",
				visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
			)}
		>
			<div className="h-full max-w-screen-xl mx-auto flex items-center justify-between px-4">
				<div className="flex items-center gap-3">
					<Logo />
					<p className="hidden md:block">บริการติดป้ายโฆษณารถตุ๊ก ๆ</p>
				</div>
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
