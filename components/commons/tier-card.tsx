import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaLine } from "react-icons/fa";

interface Props {
	title: string;
	rate: number;
	total: number;
	discount?: number;
	isPopular?: boolean;
	printCost?: number;
}

export default function TierCard({
	title,
	rate,
	total,
	discount,
	isPopular,
	printCost,
}: Props) {
	return (
		<div
			className={cn(
				"relative border rounded-lg p-6 bg-white flex flex-col",
				isPopular ? "border-2 border-blue-600 py-10" : "",
			)}
		>
			{isPopular && (
				<Badge className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2">
					แพ็กเกจยอดนิยม
				</Badge>
			)}
			<h3 className="text-xl font-semibold text-center">{title}</h3>
			<p className="mt-2 text-4xl font-bold text-center">
				฿{rate.toLocaleString()}
				<span className="text-lg text-gray-500"> / คัน</span>
			</p>
			{discount && discount > 0 ? (
				<p className="text-green-600 text-center mt-1">
					รับส่วนลด {discount * 100}%
				</p>
			) : null}
			{printCost !== undefined && (
				<p className="text-gray-600 text-center mt-1">
					Print ฟรี (฿{printCost.toLocaleString()})
				</p>
			)}
			<Separator className="my-4" />
			<ul className="space-y-2 flex-1">
				<li className="flex items-start gap-2">
					<CircleCheck className="h-5 w-5 text-green-600 mt-1" />
					<span>อัปเดตรูปภาพ & คลิปทุกสัปดาห์</span>
				</li>
				<li className="flex items-start gap-2">
					<CircleCheck className="h-5 w-5 text-green-600 mt-1" />
					<span>พิมพ์ & โปรโมทบน Facebook & TikTok</span>
				</li>
				<li className="flex items-start gap-2">
					<CircleCheck className="h-5 w-5 text-green-600 mt-1" />
					<span>รายงานประสิทธิภาพรายสัปดาห์</span>
				</li>
			</ul>
			<div className="mt-4 text-center">
				<p className="text-lg">
					รวม: <span className="font-bold">฿{total.toLocaleString()}</span>
				</p>
				<Button
					variant="success"
					className="mt-3 w-full"
					onClick={() => window.open("https://lin.ee/75FQXCM", "_blank")}
				>
					<FaLine className="text-lg" />
					ติดต่อผ่าน LINE
				</Button>
			</div>
		</div>
	);
}
