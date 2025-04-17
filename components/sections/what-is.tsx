"use client";

import { YouTubeEmbed } from "@next/third-parties/google";
import { Card, CardContent } from "@/components/ui/card";

export default function WhatIsSection() {
	return (
		<section className="container mx-auto my-10 px-4">
			<div className="flex flex-col md:flex-row gap-6 items-center">
				{/* Video Container */}
				<YouTubeEmbed
					videoid="D7sLTBz8Jtc"
					width={600}
					params="autoplay=0&mute=0&loop=1&playlist=D7sLTBz8Jtc&controls=0&showinfo=0&rel=0"
				/>

				{/* Text Section */}
				<div className="w-full md:w-1/2 text-foreground">
					<h1 className="font-bold mt-6">
						<span className="gradient-text pr-2">TUK D ADS</span>
						ทำอะไร ?
					</h1>
					<p className="mt-4 text-base leading-relaxed">
						“TUK D ADS" บริการติดป้ายโฆษณาบนรถตุ๊ก ๆ ในกรุงเทพฯ และนนทบุรี
						ด้วยจำนวนลูกค้าที่ติดป้ายกับเรามากมายในระยะเวลากว่า 3 ปี
						เราพร้อมให้บริการที่ครบวงจรด้วยคุณภาพสูงและราคาที่เข้าถึงได้ ไม่ว่าจะเป็นการออกแบบ,
						ผลิต, ติดตั้ง หรือแม้กระทั่งการโปรโมทผ่าน influencer ก็มีให้คุณแบบฟรีๆ! นอกจากนี้
						เรายังมีบริการติดป้ายโฆษณาบนรถสองแถว และหมวกวินมอเตอร์ไซค์อีกด้วย
					</p>

					{/* Stats */}
					<div className="mt-8 grid grid-cols-2 gap-6 text-center text-xl font-bold">
						<div>
							<p className="text-4xl text-orange-500">300+</p>
							<p>ติดป้ายกับเรา</p>
						</div>
						<div>
							<p className="text-4xl text-orange-500">2000+</p>
							<p>จำนวนรถตุ๊ก ๆ</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
