import { Button } from "@/components/ui/button";
import { ArrowUpRight, FileQuestion } from "lucide-react";
import Image from "next/image";
import OurClientSection from "@/components/sections/our-clients";

const Hero = () => {
	return (
		<div className="min-h-[calc(100vh-4rem)] bg-muted w-full flex flex-col items-center justify-center overflow-hidden border-b border-accent">
			<div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
				<div className="max-w-xl">
					<h1 className="mt-6 hero-title">
						<span className="gradient-text">โฆษณาบนรถตุ๊กตุ๊ก</span>
						<br />
						เข้าถึงคนหลายพันคนทุกวัน!
					</h1>
					<p className="mt-6 hero-description">
						โฆษณาที่คุ้มค่าและมีประสิทธิภาพบนรถตุ๊กตุ๊กทั่วเมือง
					</p>
					<div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
						<Button
							variant="ghost"
							size="lg"
							className="w-full sm:w-auto rounded-full text-base"
						>
							เข้าถึงลูกค้าให้มากขึ้นทันที!
							<ArrowUpRight className="!h-5 !w-5" />
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="w-full sm:w-auto rounded-full text-base shadow-none"
						>
							<FileQuestion className="!h-5 !w-5" /> ทำงานอย่างไร ?
						</Button>
					</div>
				</div>
				<div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square shadow-lg">
					<Image
						src="/images/makro_02.jpg"
						fill
						alt="makro pinklao tuk tuk ads"
						className="object-cover rounded-xl"
					/>
					{/* <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-t from-transparent to-white" /> */}
				</div>
			</div>
			<OurClientSection />
		</div>
	);
};

export default Hero;
