import { PenTool, Printer, Package } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
	{
		icon: PenTool,
		title: "ออกแบบ",
		description: "ออกแบบงานให้คุณ หรืออัปโหลดแบบของคุณมาให้เรา",
	},
	{
		icon: Printer,
		title: "พิมพ์ป้าย",
		description: "บริการปริ้นแผ่นป้ายสำหรับติดตั้ง",
	},
	{
		icon: Package,
		title: "ติดตั้ง",
		description: "ติดตั้งในพื้นที่ พร้อมใช้งานจริง",
	},
];

const Services = () => {
	return (
		<div className="min-h-[350px] flex items-center justify-center py-10">
			<div>
				<h2
					className={cn(
						"text-4xl sm:text-5xl font-bold tracking-tight text-center",
						"motion-safe:animate-in motion-safe:fade-in duration-700",
					)}
				>
					บริการของเรา
				</h2>
				<div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto px-6">
					{features.map((feature) => (
						<div
							key={feature.title}
							className={cn(
								"flex flex-col items-center text-center border rounded-xl",
								"py-8 px-6",
								"shadow-sm hover:shadow-lg duration-200 ease-in-out hover:scale-105",
								"motion-safe:animate-in motion-safe:fade-in duration-700",
							)}
						>
							<div className="mb-4 flex items-center justify-center bg-muted rounded-full h-20 w-20">
								<feature.icon className="h-12 w-12" />
							</div>
							<h3 className="text-2xl font-semibold mt-2">{feature.title}</h3>
							<p className="mt-4 text-base text-foreground/80">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
