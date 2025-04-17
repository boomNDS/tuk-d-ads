import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
	title: "ข้อกำหนดการใช้บริการ | Tuk D Ads",
	description: "ข้อกำหนดและเงื่อนไขในการใช้บริการ Tuk D Ads",
};

export default function TermsPage() {
	return (
		<div className="container max-w-4xl mx-auto py-12 px-4 md:px-6 animate-fade-in">
			<div className="space-y-6">
				<div className="space-y-2 text-center animate-fade-down animate-once">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						ข้อกำหนดการใช้บริการ
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
						<h2 className="text-2xl font-bold">การยอมรับข้อกำหนด</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							เมื่อใช้บริการของ Tuk D Ads ถือว่าท่านตกลงผูกพันตามข้อกำหนดการใช้บริการนี้
							หากไม่เห็นด้วย กรุณางดใช้บริการของเรา
						</p>
					</section>

					<section className="space-y-3 animate-fade-up animate-delay-400 animate-once">
						<h2 className="text-2xl font-bold">บริการของเรา</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							Tuk D Ads ให้บริการติดป้ายโฆษณาหลังรถตุ๊กตุ๊ก โดยเราสงวนสิทธิ์ในการเปลี่ยนแปลง
							หรือยกเลิกบริการโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
						</p>
					</section>

					<section className="space-y-3 animate-fade-up animate-delay-500 animate-once">
						<h2 className="text-2xl font-bold">เนื้อหาโฆษณา</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							เนื้อหาโฆษณาต้องเป็นไปตามกฎหมายไทย ไม่มีเนื้อหาผิดกฎหมาย หมิ่นประมาท
							หรือทำให้เข้าใจผิด เราสงวนสิทธิ์ในการปฏิเสธโฆษณาที่ไม่เหมาะสม
						</p>
					</section>

					<section className="space-y-3 animate-fade-up animate-delay-600 animate-once">
						<h2 className="text-2xl font-bold">การชำระเงิน</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							ต้องชำระเงินล่วงหน้าก่อนติดตั้งโฆษณา ค่าบริการไม่สามารถขอคืนได้
							เรารับชำระผ่านการโอนเงิน บัตรเครดิต/เดบิต ตามที่ระบุบนเว็บไซต์
						</p>
					</section>

					<section className="space-y-3 animate-fade-up animate-delay-700 animate-once">
						<h2 className="text-2xl font-bold">ข้อมูลส่วนบุคคล</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							เราเก็บข้อมูลส่วนบุคคลตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
							ท่านมีสิทธิเข้าถึง แก้ไข ลบ และจัดการข้อมูลส่วนบุคคลของท่านตามที่กฎหมายกำหนด
						</p>
					</section>

					<section className="space-y-3 animate-fade-up animate-delay-800 animate-once">
						<h2 className="text-2xl font-bold">ติดต่อเรา</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							หากมีคำถามเกี่ยวกับข้อกำหนดการใช้บริการ กรุณาติดต่อ contact@tukdads.com
							หรือผ่านแบบฟอร์มติดต่อบนเว็บไซต์ของเรา
						</p>
					</section>
				</div>

				<div className="flex justify-center pt-8 animate-jump-in animate-delay-900 animate-once">
					<Button asChild>
						<Link href="/">กลับสู่หน้าหลัก</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
