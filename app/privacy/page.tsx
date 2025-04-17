import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
	title: "นโยบายความเป็นส่วนตัว | Tuk D Ads",
	description: "นโยบายความเป็นส่วนตัวและการคุ้มครองข้อมูลส่วนบุคคลของ Tuk D Ads",
};

export default function PrivacyPage() {
	return (
		<div className="container max-w-4xl mx-auto py-12 px-4 md:px-6 animate-fade-in">
			<div className="space-y-6">
				<div className="space-y-2 text-center animate-fade-down animate-once">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						นโยบายความเป็นส่วนตัว
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
						<h2 className="text-2xl font-bold">บทนำ</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							บริษัท Tuk D Ads ("เรา") ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของท่าน
							นโยบายความเป็นส่วนตัวนี้อธิบายวิธีการเก็บรวบรวม ใช้
							และเปิดเผยข้อมูลส่วนบุคคลของท่าน ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.
							2562 (PDPA)
						</p>
					</section>

					<section className="space-y-3 animate-fade-up animate-delay-400 animate-once">
						<h2 className="text-2xl font-bold">ข้อมูลที่เราเก็บรวบรวม</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							เราอาจเก็บรวบรวมข้อมูลต่อไปนี้:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
							<li>ข้อมูลส่วนบุคคล: ชื่อ อีเมล เบอร์โทรศัพท์ ที่อยู่</li>
							<li>ข้อมูลการชำระเงิน: ข้อมูลบัญชีธนาคาร ข้อมูลบัตรเครดิต</li>
							<li>ข้อมูลการใช้งาน: ข้อมูลการเข้าชมเว็บไซต์ การติดต่อสื่อสาร</li>
						</ul>
					</section>

					<section className="space-y-3 animate-fade-up animate-delay-500 animate-once">
						<h2 className="text-2xl font-bold">วัตถุประสงค์ในการใช้ข้อมูล</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							เราใช้ข้อมูลของท่านเพื่อ:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
							<li>ให้บริการและปรับปรุงบริการของเรา</li>
							<li>ติดต่อสื่อสารเกี่ยวกับบริการและข้อเสนอ</li>
							<li>ดำเนินการธุรกรรมการชำระเงิน</li>
							<li>ปฏิบัติตามกฎหมายและระเบียบที่เกี่ยวข้อง</li>
						</ul>
					</section>

					<section className="space-y-3 animate-fade-up animate-delay-600 animate-once">
						<h2 className="text-2xl font-bold">การเปิดเผยข้อมูล</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							เราอาจเปิดเผยข้อมูลส่วนบุคคลของท่านให้แก่:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
							<li>ผู้ให้บริการที่เกี่ยวข้องกับการให้บริการของเรา</li>
							<li>หน่วยงานภาครัฐ เมื่อมีการร้องขอตามกฎหมาย</li>
							<li>ในกรณีที่บริษัทมีการควบรวมกิจการหรือถูกซื้อกิจการ</li>
						</ul>
					</section>

					<section className="space-y-3 animate-fade-up animate-delay-700 animate-once">
						<h2 className="text-2xl font-bold">สิทธิของท่าน</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล ท่านมีสิทธิ:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
							<li>ขอเข้าถึงและขอรับสำเนาข้อมูลส่วนบุคคล</li>
							<li>ขอแก้ไขข้อมูลส่วนบุคคลให้ถูกต้อง</li>
							<li>ขอลบหรือทำลายข้อมูลส่วนบุคคล</li>
							<li>ขอให้ระงับการใช้ข้อมูลส่วนบุคคล</li>
							<li>คัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล</li>
							<li>ขอให้โอนย้ายข้อมูลส่วนบุคคล</li>
							<li>ถอนความยินยอมที่ท่านให้ไว้ได้ตลอดเวลา</li>
						</ul>
					</section>

					<section className="space-y-3 animate-fade-up animate-delay-800 animate-once">
						<h2 className="text-2xl font-bold">ติดต่อเรา</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้หรือต้องการใช้สิทธิตาม PDPA
							กรุณาติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลที่:
							<br />
							อีเมล: privacy@tukdads.com
							<br />
							โทรศัพท์: 02-xxx-xxxx
							<br />
							ที่อยู่: Tuk D Ads, xxx อาคาร xxx ชั้น x ถนนxxx แขวงxxx เขตxxx กรุงเทพฯ
							xxxxx
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
