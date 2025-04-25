import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Hero = () => {
	return (
		<section
			className={cn(
				"min-h-screen flex items-center justify-center overflow-hidden",
				"pt-[7rem] pb-16",
				"motion-safe:animate-in motion-safe:fade-in duration-700",
				"relative",
			)}
		>
			<div
				className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100 to-transparent
                    clip-[polygon(0_0,100%_0,75%_100%,0%_100%)] -z-10"
			/>
			<div
				className={cn(
					"max-w-screen-xl w-full mx-auto",
					"grid lg:grid-cols-2 gap-12",
					"px-6 py-12 lg:py-0",
				)}
			>
				<div className="my-auto">
					<h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight gradient-text">
						โฆษณารถตุ๊กตุ๊ก
						<br />
						เข้าถึงผู้คนหลายพันคนทุกวัน
					</h1>
					<h2 className="mt-4 max-w-[40ch] text-2xl font-semibold">
						โปรโมทแบรนด์ของคุณทั่วกรุงเทพฯ ด้วยงบที่คุณควบคุมได้
					</h2>
					<p className="mt-6 max-w-[60ch] text-lg">
						เพิ่มยอดรับรู้แบรนด์และยอดขาย ไม่ต้องใช้บัตรเครดิต ลองฟรีวันนี้!
					</p>
					<div className="mt-12 flex items-center gap-6">
						<Button size="lg" className="rounded-full text-base">
							จองเลย — เริ่มโปรโมททันที
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="rounded-full text-base shadow-none"
						>
							ดูวิธีการทำงาน ?
						</Button>
					</div>
				</div>

				<AspectRatio ratio={1} className="rounded-xl overflow-hidden shadow-lg">
					<Image
						src="/images/makro_02.webp"
						alt="Tuk-tuk advertisement example"
						fill
						className="object-cover"
						priority
					/>
				</AspectRatio>
			</div>
		</section>
	);
};

export default Hero;
