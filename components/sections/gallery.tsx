"use client";

import { GalleryImage } from "@/components/commons/gallery-image";
import { useMemo } from "react";
import * as React from "react";
import { cn } from "@/lib/utils";

// Define image item shape
interface ImageItem {
	src: string;
	priority: number;
	alt: string;
}

const GallerySection = () => {
	// 10 items per slide: 5 columns x 2 rows
	const perSlide = 10;

	const imagesData: ImageItem[] = useMemo(
		() => [
			{
				src: "/images/gallery/01.webp",
				priority: 2,
				alt: "ติดตั้งโซล่าเซลล์ หลังคา",
			},
			{
				src: "/images/gallery/02.webp",
				priority: 1.5,
				alt: "โซล่าเซลล์ภาคอุตสาหกรรม",
			},
			{
				src: "/images/gallery/03.webp",
				priority: 1,
				alt: "โซล่าเซลล์บ้านพักอาศัย",
			},
			{
				src: "/images/gallery/04.webp",
				priority: 0.8,
				alt: "โซล่าเซลล์เพื่อการเกษตร",
			},
			{
				src: "/images/gallery/05.webp",
				priority: 1.2,
				alt: "ติดตั้งโซล่าเซลล์เชิงพาณิชย์",
			},
			{
				src: "/images/gallery/06.webp",
				priority: 1,
				alt: "ระบบโซล่าเซลล์ออฟกริด",
			},
			{
				src: "/images/gallery/07.webp",
				priority: 0.5,
				alt: "พลังงานสะอาดโซลาร์รูฟ",
			},
			{
				src: "/images/gallery/08.webp",
				priority: 1.8,
				alt: "โซล่าเซลล์สำหรับโรงงาน",
			},
			{ src: "/images/gallery/09.webp", priority: 1, alt: "ภาพที่ 9" },
			{ src: "/images/gallery/10.webp", priority: 1, alt: "ภาพที่ 10" },
			{ src: "/images/gallery/11.webp", priority: 1, alt: "ภาพที่ 11" },
			{ src: "/images/gallery/12.webp", priority: 1, alt: "ภาพที่ 12" },
			{ src: "/images/gallery/13.webp", priority: 1, alt: "ภาพที่ 13" },
			{ src: "/images/gallery/14.webp", priority: 1, alt: "ภาพที่ 14" },
			{ src: "/images/gallery/15.webp", priority: 1, alt: "ภาพที่ 15" },
			{ src: "/images/gallery/16.webp", priority: 1, alt: "ภาพที่ 16" },
			{ src: "/images/gallery/17.webp", priority: 1, alt: "ภาพที่ 17" },
			{ src: "/images/gallery/18.webp", priority: 1, alt: "ภาพที่ 18" },
			{ src: "/images/gallery/19.webp", priority: 1, alt: "ภาพที่ 19" },
			{ src: "/images/gallery/20.webp", priority: 1, alt: "ภาพที่ 20" },
			{ src: "/images/gallery/21.webp", priority: 1, alt: "ภาพที่ 21" },
			{ src: "/images/gallery/22.webp", priority: 1, alt: "ภาพที่ 22" },
			{ src: "/images/gallery/23.webp", priority: 1, alt: "ภาพที่ 23" },
			{ src: "/images/gallery/24.webp", priority: 1, alt: "ภาพที่ 24" },
			{ src: "/images/gallery/25.webp", priority: 1, alt: "ภาพที่ 25" },
			{ src: "/images/gallery/26.webp", priority: 1, alt: "ภาพที่ 26" },
			{ src: "/images/gallery/27.webp", priority: 1, alt: "ภาพที่ 27" },
			{ src: "/images/gallery/28.webp", priority: 1, alt: "ภาพที่ 28" },
			{ src: "/images/gallery/29.webp", priority: 1, alt: "ภาพที่ 29" },
			{ src: "/images/gallery/30.webp", priority: 1, alt: "ภาพที่ 30" },
			{ src: "/images/gallery/31.webp", priority: 1, alt: "ภาพที่ 31" },
			{ src: "/images/gallery/32.webp", priority: 1, alt: "ภาพที่ 32" },
			{ src: "/images/gallery/33.webp", priority: 1, alt: "ภาพที่ 33" },
			{ src: "/images/gallery/34.webp", priority: 1, alt: "ภาพที่ 34" },
			{ src: "/images/gallery/35.webp", priority: 1, alt: "ภาพที่ 35" },
			{ src: "/images/gallery/36.webp", priority: 1, alt: "ภาพที่ 36" },
			{ src: "/images/gallery/37.webp", priority: 1, alt: "ภาพที่ 37" },
			{ src: "/images/gallery/38.webp", priority: 1, alt: "ภาพที่ 38" },
			{ src: "/images/gallery/39.webp", priority: 1, alt: "ภาพที่ 39" },
			{ src: "/images/gallery/40.webp", priority: 1, alt: "ภาพที่ 40" },
		],
		[],
	);

	const shuffled = useMemo(() => {
		const arr = [...imagesData];
		const out: ImageItem[] = [];
		while (arr.length) {
			const total = arr.reduce((sum, i) => sum + i.priority, 0);
			let r = Math.random() * total;
			const idx = arr.findIndex((i) => {
				r -= i.priority;
				return r <= 0;
			});
			out.push(arr.splice(idx, 1)[0]);
		}
		return out;
	}, [imagesData]);

	const slides = useMemo(
		() =>
			Array.from({ length: Math.ceil(shuffled.length / perSlide) }, (_, i) =>
				shuffled.slice(i * perSlide, i * perSlide + perSlide),
			),
		[shuffled],
	);

	return (
		<section className="w-full px-4 py-12">
			<div className="mx-auto max-w-4xl text-center mb-6">
				<h2 className="text-4xl md:text-5xl font-bold">ผลงานการติดตั้ง</h2>
			</div>
			<div
				className={cn(
					"mx-auto w-full max-w-9/12",
					"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4",
				)}
			>
				{/* {Array.from({ length: 10 }, (_, idx) => (
          <GalleryImage
            key={idx}
            src={imagesData[0].src || "/placeholder.svg"}
            alt={imagesData[0].alt || "Placeholder"}
          />
        ))} */}
				{slides[0].map((slide, idx) => (
					<GalleryImage
						key={idx}
						src={slide.src || "/placeholder.svg"}
						alt={slide.alt || "Placeholder"}
					/>
				))}
			</div>
		</section>
	);
};

export default GallerySection;
