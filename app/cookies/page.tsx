import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "นโยบายคุกกี้ | Tuk D Ads",
	description: "นโยบายการใช้คุกกี้ของเว็บไซต์ Tuk D Ads",
};

export default function CookiesPage() {
	return (
		<div className="container max-w-4xl mx-auto py-12 px-4 md:px-6 animate-fade-in mt-[80px]">
			<div className="space-y-6">
				<div className="space-y-2 text-center animate-fade-down animate-once">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						นโยบายคุกกี้
					</h1>
					<p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
						อัปเดตล่าสุด:{" "}
						{new Date().toLocaleDateString("th-TH", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
				</div>

				<Separator className="animate-fade-in animate-delay-200 animate-once" />

				<div className="space-y-8">
					<section className="space-y-3 animate-fade-up animate-delay-300 animate-once">
						<h2 className="text-2xl font-bold">คุกกี้คืออะไร</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							คุกกี้ คือไฟล์ข้อมูลขนาดเล็กที่จัดเก็บในอุปกรณ์ของท่านเมื่อท่านเข้าชมเว็บไซต์
							คุกกี้ช่วยให้เว็บไซต์จดจำการตั้งค่าและการใช้งานของท่าน เพื่อมอบประสบการณ์ที่ดีขึ้น
						</p>
					</section>

					<section className="space-y-3 animate-fade-up animate-delay-400 animate-once">
						<h2 className="text-2xl font-bold">คุกกี้ที่เราใช้</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							เว็บไซต์ของเราใช้คุกกี้หลายประเภท ได้แก่:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
							<li>
								<strong>คุกกี้ที่จำเป็น:</strong> จำเป็นสำหรับการทำงานพื้นฐานของเว็บไซต์
							</li>
							<li>
								<strong>คุกกี้ด้านประสิทธิภาพ:</strong>{" "}
								ช่วยวิเคราะห์วิธีการใช้งานเว็บไซต์ของท่าน
							</li>
							<li>
								<strong>คุกกี้ด้านฟังก์ชัน:</strong> ช่วยจดจำการตั้งค่าของท่าน
							</li>
							<li>
								<strong>คุกกี้โฆษณา:</strong> ใช้ในการนำเสนอโฆษณาที่เกี่ยวข้อง
							</li>
						</ul>
					</section>

					<section className="space-y-3 animate-fade-up animate-delay-500 animate-once">
						<h2 className="text-2xl font-bold">การจัดการคุกกี้</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							ท่านสามารถเลือกปิดการใช้งานคุกกี้ได้ในการตั้งค่าเบราว์เซอร์ของท่าน อย่างไรก็ตาม
							การปิดคุกกี้อาจส่งผลต่อประสิทธิภาพการทำงานของเว็บไซต์
							วิธีการปิดคุกกี้จะแตกต่างกันไปตามเบราว์เซอร์ที่ท่านใช้
							โปรดตรวจสอบเมนูช่วยเหลือของเบราว์เซอร์
						</p>
					</section>

					<section className="space-y-3 animate-fade-up animate-delay-600 animate-once">
						<h2 className="text-2xl font-bold">บุคคลที่สาม</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							เราอาจใช้บริการของบุคคลที่สามที่อาจตั้งค่าคุกกี้บนอุปกรณ์ของท่าน เช่น Google
							Analytics, Facebook Pixel
							เพื่อวิเคราะห์การใช้งานเว็บไซต์และปรับปรุงบริการของเรา
							บุคคลที่สามเหล่านี้มีนโยบายความเป็นส่วนตัวของตนเอง
						</p>
					</section>

					{/* <section className="space-y-3 animate-fade-up animate-delay-700 animate-once">
						<h2 className="text-2xl font-bold">ติดต่อเรา</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							หากมีคำถามเกี่ยวกับนโยบายคุกกี้ของเรา กรุณาติดต่อ contact@tukdads.com
							หรือผ่านแบบฟอร์มติดต่อบนเว็บไซต์ของเรา
						</p>
					</section>*/}
				</div>

				<div className="flex justify-center pt-8 animate-jump-in animate-delay-800 animate-once">
					<Button asChild>
						<Link href="/">กลับสู่หน้าหลัก</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
