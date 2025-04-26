"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

interface GalleryImageProps {
	src: string;
	alt: string;
	className?: string;
}

export const GalleryImage = React.memo(function GalleryImage({
	src,
	alt,
	className,
}: GalleryImageProps) {
	const [loaded, setLoaded] = useState(false);
	const [open, setOpen] = useState(false);

	const onOpen = useCallback(() => setOpen(true), []);
	const onClose = useCallback(() => setOpen(false), []);

	return (
		<>
			<AspectRatio
				ratio={4 / 5}
				className={cn(className, "overflow-hidden rounded-lg relative")}
			>
				{!loaded && (
					<Skeleton className="absolute inset-0 w-full h-full animate-pulse" />
				)}
				<motion.div
					initial={{ scale: 1 }}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3 }}
					className="relative w-full h-full cursor-pointer"
					onClick={onOpen}
					aria-label={`View full image: ${alt}`}
				>
					<Image
						src={src}
						alt={alt}
						fill
						style={{ objectFit: "cover" }}
						className={loaded ? "opacity-100" : "opacity-0"}
						onLoadingComplete={() => setLoaded(true)}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					/>
				</motion.div>
			</AspectRatio>

			<Dialog key={src} open={open} onOpenChange={onClose}>
				<DialogContent className="bg-transparent p-0 border-none">
					<DialogHeader>
						<DialogTitle className="sr-only">Image preview</DialogTitle>
					</DialogHeader>
					<div className="relative w-full h-[80vh]">
						<Image
							src={src}
							alt={alt}
							fill
							style={{ objectFit: "cover" }}
							className="rounded-lg"
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
						/>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
});
