import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
	{
		id: 1,
		name: "Patung Supayoon",
		designation: "นักวิชาการคอมพิวเตอร์",
		company: "โรงพยาบาลสบเมย",
		testimonial: "ราคาย่อมเยา คุ้มค่ากับราคาที่จ่าย เจ้าของใจดี ออกแบบสวย ติดตั้งไว",
		avatar: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		id: 2,
		name: "Anankasun Amonluk",
		designation: "Service Engineer",
		company: "Yip In Tsoi",
		testimonial: "ราคาไม่แพง ได้ป้ายตามที่สั่ง ร้านให้คำแนะนำและบริการที่ดีมากครับ",
		avatar: "https://randomuser.me/api/portraits/women/6.jpg",
	},
	{
		id: 3,
		name: "Pharanya S. Möök",
		designation: undefined,
		company: undefined,
		testimonial: "บริการดี ดูแลดีมาก แอดมินน่ารัก คุยง่าย ได้ป้ายตามสั่งเลย 👍",
		avatar: "https://randomuser.me/api/portraits/men/3.jpg",
	},
	{
		id: 4,
		name: "Phunnita Intarapimai ",
		designation: "Digital creator",
		company: undefined,
		testimonial: "ป้ายสวยติดให้จริงเจ้าของน่ารักค่ะ",
		avatar: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		id: 5,
		name: "Stamppong",
		designation: undefined,
		company: undefined,
		testimonial:
			"ทำงานรวดเร็ว ราคาเป็นกันเอง แก้ไขขงานรวดเร็ว ได้งานตามที่ต้องการ มีคุณภาพมากคะ กลับมาจ้างใหม่แน่นอนคะ ",
		avatar: "https://randomuser.me/api/portraits/men/5.jpg",
	},
];

const Testimonial = () => (
	<div className="min-h-screen flex justify-center items-center py-12 px-6">
		<div>
			<h2 className="mb-14 text-5xl md:text-6xl font-bold text-center tracking-tight">
				เสียงจากลูกค้าของเรา
			</h2>
			<div className="max-w-screen-xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
				{testimonials.map((testimonial) => (
					<div
						key={testimonial.id}
						className="mb-8 bg-accent rounded-xl p-6 break-inside-avoid"
					>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-4">
								<Avatar>
									<AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
										{testimonial.name.charAt(0)}
									</AvatarFallback>
								</Avatar>
								<div>
									<p className="text-lg font-semibold">{testimonial.name}</p>
									<p className="text-sm text-gray-500">
										{testimonial.designation}
									</p>
								</div>
							</div>
							{/* <Button variant="ghost" size="icon" asChild>
                <Link href="#" target="_blank">
                  <Twitter />
                </Link>
              </Button> */}
						</div>
						<p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
					</div>
				))}
			</div>
		</div>
	</div>
);

export default Testimonial;
