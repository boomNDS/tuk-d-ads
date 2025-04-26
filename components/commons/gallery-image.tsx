"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface GalleryImageProps {
	src: string;
	alt: string;
	className?: string;
}

export const GalleryImage = ({ src, alt, className }: GalleryImageProps) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<AspectRatio
			ratio={4 / 5}
			className={cn(className, "overflow-hidden rounded-lg relative")}
		>
			{!loaded && (
				<Skeleton className="absolute inset-0 w-full h-full animate-pulse" />
			)}

			<Image
				src={src}
				alt={alt}
				fill
				objectFit="cover"
				className={cn(
					"absolute inset-0",
					loaded ? "opacity-100 transition-opacity duration-500" : "opacity-0",
				)}
				onLoadingComplete={() => setLoaded(true)}
				sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
			/>
		</AspectRatio>
	);
};
