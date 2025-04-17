// components/Logo.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export type LogoProps = {
	orientation?: "horizontal" | "vertical";
	src?: string;
	alt?: string;
	name?: string;
	href?: string;
};

export default function Logo({
	orientation = "horizontal",
	src = "/logo.png",
	alt = "Tuk D ADS Logo",
	name = "Tuk D ADS",
	href = "/",
}: LogoProps) {
	const isVertical = orientation === "vertical";
	const flexClasses = isVertical ? "flex-col" : "flex-row";
	const spacingClasses = isVertical ? "mt-2 text-center" : "ml-2";

	return (
		<Button
			asChild
			variant="ghost"
			className={`p-0 inline-flex items-center ${flexClasses}`}
		>
			<Link
				href={href}
				className={`inline-flex items-center ${flexClasses} p-0`}
			>
				<Image src={src} alt={alt} width={48} height={48} priority />
				<span
					className={`text-xl font-semibold text-gray-900 dark:text-white ${spacingClasses}`}
				>
					{name}
				</span>
			</Link>
		</Button>
	);
}
