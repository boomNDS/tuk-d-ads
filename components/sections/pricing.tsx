"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const durations = [7, 14, 30] as const;
type Days = (typeof durations)[number];

const tiers = [
	{ name: "1–9 คัน", discount: 0 },
	{ name: "10–19 คัน", discount: 0.05, isPopular: true },
	{ name: "20+ คัน", discount: 0.1 },
];

// Base rates from PDF
const baseRates: Record<Days, number> = { 7: 1770, 14: 1800, 30: 1900 };

export default function Pricing() {
	const [days, setDays] = React.useState<Days>(7);
	const [cars, setCars] = React.useState(1);

	return (
		<div className="py-12 px-4 bg-gray-50 min-h-screen">
			<h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
				ราคาแพ็กเกจ TUK D ADS
			</h1>

			{/* Tabs and Car count inline */}
			<div className="max-w-md mx-auto flex items-center space-x-4">
				<Tabs defaultValue={String(days)} className="flex-1">
					<TabsList className="grid grid-cols-3">
						{durations.map((d) => (
							<TabsTrigger
								key={d}
								value={String(d)}
								onClick={() => setDays(d)}
								className={cn(
									"py-2 text-center",
									days === d ? "border-b-2 border-blue-600" : "text-gray-600",
								)}
							>
								{d} วัน
							</TabsTrigger>
						))}
					</TabsList>
				</Tabs>
				<div className="flex items-center space-x-2">
					<label htmlFor="carCount" className="font-medium">
						จำนวนรถตุ๊ก-ตุ๊ก (คัน):
					</label>
					<Input
						id="carCount"
						type="number"
						min={1}
						value={cars}
						onChange={(e) => setCars(Math.max(1, Number(e.target.value)))}
						className="w-20 text-center"
					/>
				</div>
			</div>

			{/* Tier cards */}
			<div className="mt-8 max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{tiers.map((tier) => {
					const unitRate = Math.round(baseRates[days] * (1 - tier.discount));
					const total = unitRate * cars;
					return (
						<div
							key={tier.name}
							className={cn(
								"relative border rounded-lg p-6 bg-white flex flex-col",
								{
									"border-2 border-blue-600 py-10": tier.isPopular,
								},
							)}
						>
							{tier.isPopular && (
								<Badge className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2">
									แพ็กเกจยอดนิยม
								</Badge>
							)}
							<h3 className="text-xl font-semibold text-center">{tier.name}</h3>
							<p className="mt-2 text-4xl font-bold text-center">
								฿{unitRate.toLocaleString()}
								<span className="text-lg font-medium text-gray-500"> / คัน</span>
							</p>
							{tier.discount > 0 && (
								<p className="text-green-600 text-center mt-1">
									รับส่วนลด {tier.discount * 100}%
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
									รวม:{" "}
									<span className="font-bold">฿{total.toLocaleString()}</span>
								</p>
								<Button
									className="mt-3 w-full"
									onClick={() =>
										window.open(
											"https://line.me/R/ti/p/@YOUR_LINE_ID",
											"_blank",
										)
									}
								>
									ติดต่อผ่าน LINE
								</Button>
							</div>
						</div>
					);
				})}
			</div>

			{/* Note */}
			<p className="mt-6 text-center text-sm text-gray-500">
				*ราคานี้เป็นการคำนวณโดยประมาณ
				กรุณาตรวจสอบรายละเอียดและยืนยันจำนวนที่แน่นอนเพื่อรับข้อมูลราคาล่าสุด
			</p>
		</div>
	);
}
