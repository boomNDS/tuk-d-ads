import { Card, CardContent } from "@/components/ui/card";

const steps = [
	{
		number: 1,
		title: "ติดต่เรา",
		description: "ปรึกษาเบื้องต้นและขอใบเสนอราคา",
	},
	{
		number: 2,
		title: "อนุมัติการออกแบบ",
		description: "ให้ทีมงานของเราออกแบบ (จ่ายเงินเพิ่ม) หรือส่งการออกแบบของคุณเอง",
	},
	{ number: 3, title: "การผลิต", description: "การพิมพ์และการเตรียมโฆษณา" },
	{
		number: 4,
		title: "การติดตั้ง",
		description: "การติดตั้งโฆษณาบนรถตุ๊กตุ๊ก, รถสองแถว และหมวกวินมอเตอร์ไซค์",
	},
];

const Workflows = () => {
	return (
		<Card className="max-w-4xl mx-auto border-blue-500">
			<CardContent className="p-6 bg-white">
				<h2 className="text-3xl font-bold mb-6 text-center">ขั้นตอนการทำงาน</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{steps.map((step) => (
						<div key={step.number} className="flex space-x-4 items-start">
							<div className="text-2xl font-extrabold text-red-500">
								{step.number}
							</div>
							<div>
								<h4 className="font-semibold">{step.title}</h4>
								<p className="text-sm text-foreground/70">{step.description}</p>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default Workflows;
