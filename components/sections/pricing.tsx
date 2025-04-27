// components/Pricing.tsx
"use client";

import React from "react";
import UnitSelector from "@/components/commons/unit-selector";
import DurationTabs from "@/components/commons/duration-tabs";
import CarCountInput from "@/components/commons/car-count-input";
import TierCard from "@/components/commons/tier-card";
import { Separator } from "@/components/ui/separator";

const dayTiers = [
	{ name: "1–9 คัน", baseRates: { 7: 1250, 15: 1500, 30: 1800 } },
	{
		name: "10–19 คัน",
		isPopular: true,
		baseRates: { 7: 1220, 15: 1320, 30: 1570 },
	},
	{
		name: "20+ คัน",
		discount: 0,
		baseRates: { 7: 1190, 15: 1290, 30: 1540 },
	},
];
const hourlyOptions = [
	{ maxHour: 5, isPopular: true, rate: 350, printCost: 999, label: "1–5 ชม." },
	{ maxHour: 8, rate: 2000, printCost: 999, label: "8 ชม." },
	{ maxHour: 24, rate: 3500, printCost: 0, label: "เต็มวัน" },
];

type Unit = "days" | "hours";

export default function Pricing() {
	const [unit, setUnit] = React.useState<Unit>("days");
	const [duration, setDuration] = React.useState<number>(7);
	const [cars, setCars] = React.useState<number>(1);

	return (
		<div className="py-12 px-4 bg-gray-50 min-h-[500px]">
			<h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
				ราคาแพ็กเกจ TUK D ADS
			</h1>

			<div className="max-w-screen-lg mx-auto flex justify-between">
				{/* 1. Unit selector */}
				<UnitSelector unit={unit} setUnit={setUnit} />

				{/* 2. Duration tabs + car count */}
				<div className="flex items-center gap-5">
					{unit === "days" ? (
						<DurationTabs
							unit={unit}
							duration={duration}
							setDuration={setDuration}
						/>
					) : (
						<></>
					)}
					<CarCountInput cars={cars} setCars={setCars} />
				</div>
			</div>

			<Separator className="my-6" />

			{/* 3. Tier cards */}
			<div className="mt-8 max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{unit === "days"
					? dayTiers.map((tier) => {
							const rate = Math.round(
								tier.baseRates[duration as 7 | 15 | 30] *
									(1 - (tier.discount || 0)),
							);
							const total = rate * cars;
							return (
								<TierCard
									key={tier.name}
									title={tier.name}
									rate={rate}
									total={total}
									discount={tier.discount}
									isPopular={tier.isPopular}
								/>
							);
						})
					: hourlyOptions.map((opt) => {
							const total = opt.rate * cars;
							return (
								<TierCard
									key={opt.maxHour}
									title={opt.label}
									rate={opt.rate}
									total={total}
									printCost={opt.printCost}
									isPopular={opt.isPopular}
								/>
							);
						})}
			</div>

			<p className="mt-6 text-center text-sm text-gray-500">
				*ราคาคำนวณโดยประมาณ กรุณายืนยันจำนวนเพื่อรับราคาล่าสุด
			</p>
		</div>
	);
}
