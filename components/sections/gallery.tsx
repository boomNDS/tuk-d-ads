"use client";
import { GalleryImage } from "@/components/commons/gallery-image";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { useGalleryData } from "@/hooks/use-gallery-data";
import { useMediaQuery } from "usehooks-ts";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "@/components/ui/carousel";

export default function GallerySection() {
	const isMd = useMediaQuery("(min-width: 768px)", {
		defaultValue: true,
		initializeWithValue: false,
	});

	const perSlide = isMd ? 10 : 6;
	const { pages } = useGalleryData(perSlide);
	const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

	return (
		<section className="w-full px-4 py-12">
			<div className="mx-auto max-w-4xl text-center mb-6">
				<h2 className="text-4xl md:text-5xl font-bold">ผลงานการติดตั้ง</h2>
			</div>

			<Carousel
				plugins={[plugin.current]}
				opts={{ align: "center", loop: true, dragFree: true }}
				className="w-full max-w-[80vw] mx-auto"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent className="-ml-4">
					{pages.map((chunk, idx) => (
						<CarouselItem key={idx} className="pl-4 flex justify-center">
							<div
								className={cn(
									"grid gap-4 w-full max-w-9/12",
									"grid-cols-3 grid-rows-2",
									"md:grid-cols-5 md:grid-rows-2",
								)}
							>
								{chunk.map((img) => (
									<GalleryImage key={img.src} src={img.src} alt={img.alt} />
								))}
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious aria-label="Previous slide" />
				<CarouselNext aria-label="Next slide" />
			</Carousel>
		</section>
	);
}
