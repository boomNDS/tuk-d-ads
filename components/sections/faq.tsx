import {
	Accordion,
	AccordionContent,
	AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faqItems = [
	{
		question: "ลูกค้าจะจองมากกว่า 50 คันได้อย่างไร?",
		answer:
			"สำหรับลูกค้าที่ต้องการติดโฆษณามากกว่า 50 คัน กรุณาคลิก “Contact for Enterprise” หรือติดต่อเราผ่านแบบฟอร์มเพื่อขอใบเสนอราคาเฉพาะและส่วนลดพิเศษ.",
	},
	{
		question: "ฉันสามารถเปลี่ยนแปลงแคมเปญกลางเดือนได้หรือไม่?",
		answer:
			"ได้ คุณสามารถปรับจำนวนรถตุ๊ก-ตุ๊กหรือโซนได้โดยแจ้งล่วงหน้า 7 วัน ราคาจะถูกปรับคำนวณตามสัดส่วนวันที่เหลือ.",
	},
	{
		question: "โซนไหนให้การเข้าถึงสูงสุด?",
		answer:
			"โซน A (กลางกรุงเทพฯ) ให้การมองเห็นสูงสุด รองลงมาคือโซน B (ชานเมือง) ดูแผนที่โซนสำหรับรายละเอียดเพิ่มเติม.",
	},
	{
		question: "บริการรวมอะไรบ้าง?",
		answer:
			"ในแต่ละแพลนรวมการออกแบบ ปริ้นท์ ติดตั้ง รายงานผลการติดตั้งรายสัปดาห์ (ภาพถ่าย & คลิป) และการโปรโมทบน Facebook & TikTok.",
	},
	{
		question: "ฉันจะส่ง Artwork อย่างไร?",
		answer:
			"คุณสามารถอัปโหลด Artwork ของคุณในขั้นตอนชำระเงิน หากต้องการความช่วยเหลือด้านการออกแบบ ทีมงานของเราจะสร้างตัวอย่างและส่งให้ภายใน 2 วันทำการ.",
	},
	{
		question: "พื้นที่ที่ต้องการติดตั้งคิดอย่างไร?",
		answer:
			"พื้นที่ติดตั้งพื้นที่เดียวฟรี กรณีติดตั้งมากกว่า 1 พื้นที่ จะมีค่าบริการเดินทางเพิ่มเติม กรุณาติดต่อเพื่อประเมินค่าบริการตามระยะทาง.",
	},
	{
		question: "ขนาดป้ายและไฟล์ออกแบบต้องเป็นแบบใด?",
		answer:
			"ป้ายมีขนาดมาตรฐาน 80×40 ซม. สำหรับรถตุ๊กตุ๊ก ไฟล์ออกแบบควรกำหนดโหมดสีเป็น CMYK เพื่อความแม่นยำในการพิมพ์ รองรับไฟล์ .jpeg, .png, .ai, .psd, .pdf.",
	},
];

const FAQSection = () => {
	return (
		<div className="min-h-screen flex items-center justify-center px-6 py-12">
			<div className="w-full max-w-2xl">
				<h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight">
					คำถามที่พบบ่อย
				</h2>
				<p className="mt-1.5 text-lg text-muted-foreground">
					คำตอบอย่างรวดเร็วสำหรับคำถามทั่วไปเกี่ยวกับผลิตภัณฑ์และบริการของเรา
				</p>

				<Accordion
					type="single"
					collapsible
					className="mt-8 space-y-4"
					defaultValue="question-0"
				>
					{faqItems.map(({ question, answer }, index) => (
						<AccordionItem
							key={question}
							value={`question-${index}`}
							className="bg-accent py-1 px-4 rounded-xl border-none"
						>
							<AccordionPrimitive.Header className="flex">
								<AccordionPrimitive.Trigger
									className={cn(
										"flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
										"text-start text-lg",
									)}
								>
									{question}
									<PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
								</AccordionPrimitive.Trigger>
							</AccordionPrimitive.Header>
							<AccordionContent>{answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default FAQSection;
