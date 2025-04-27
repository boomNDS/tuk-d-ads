import { YouTubeEmbed } from "@next/third-parties/google";
import { CustomMotionCount } from "@/components/custom-motion-count";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatIsSection() {
	const benefits = [
		"บริการครบวงจร: ออกแบบ ปรับแต่ง และผลิตป้ายคุณภาพสูง",
		"ติดตั้งป้ายอย่างมืออาชีพโดยทีมงานผู้เชี่ยวชาญ",
		"โปรโมทผ่านอินฟลูเอนเซอร์โดยไม่มีค่าใช้จ่ายเพิ่มเติม",
		"บริการติดป้ายโฆษณาบนรถสองแถวและหมวกวินมอเตอร์ไซค์",
	];
	return (
		<section className="container mx-auto px-4 mt-[5rem] mb-10">
			<div className="flex flex-col md:flex-row gap-6 items-center">
				<YouTubeEmbed
					videoid="D7sLTBz8Jtc"
					width={600}
					params="autoplay=0&mute=0&loop=1&playlist=D7sLTBz8Jtc&controls=0&showinfo=0&rel=0"
				/>

				{/* Text Section */}
				<div
					className={cn(
						"w-full md:w-1/2 text-foreground text-center md:text-left ml-[2rem]",
						"motion-safe:animate-in motion-safe:slide-in-from-right duration-700",
					)}
				>
					<h1 className="font-bold mt-6 leading-[5rem]">
						<span className="gradient-text pr-2">โปรโมทแบรนด์คุณ</span>
						กับรถตุ๊กตุ๊ก
					</h1>
					<ul className="space-y-2 mt-5">
						{benefits.map((benefit) => (
							<li
								key={benefit}
								className="flex items-start font-medium text-lg gap-2"
							>
								<CircleCheck className="h-4 w-4 mt-1 text-green-600" />
								{benefit}
							</li>
						))}
					</ul>

					<div className="mt-8 grid grid-cols-2 gap-6 text-center">
						<div
							className={cn(
								"motion-safe:animate-in motion-safe:fade-in slide-in-from-left duration-700",
							)}
						>
							<CustomMotionCount
								to={300}
								duration={2}
								suffix="+"
								className="tabular-nums text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-500"
							/>
							<p className="mt-2 font-medium text-muted-foreground text-sm sm:text-base">
								ติดป้ายกับเรา
							</p>
						</div>
						<div className="motion-safe:animate-in motion-safe:fade-in slide-in-from-right duration-700">
							<CustomMotionCount
								to={2000}
								duration={2}
								suffix="+"
								className="tabular-nums text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-500"
							/>
							<p className="mt-2 font-medium text-muted-foreground text-sm sm:text-base">
								จำนวนรถตุ๊ก ๆ
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[3rem] flex items-center justify-center ">
				<p className="font-medium text-muted-foreground text-center">
					*พร้อมเริ่มโปรโมทหรือยัง?
				</p>
				<Button className="ml-2 hover:scale-105 ease-in">จองบริการวันนี</Button>
			</div>
		</section>
	);
}
