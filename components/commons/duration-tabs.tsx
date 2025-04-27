import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Unit = "days" | "hours";
interface Props {
	unit: Unit;
	duration: number;
	setDuration: (d: number) => void;
}

const dayDurations = [7, 15, 30];

export default function DurationTabs({ unit, duration, setDuration }: Props) {
	return (
		<div className="overflow-x-auto w-full">
			<Tabs defaultValue={String(duration)}>
				<TabsList>
					{dayDurations.map((d) => (
						<TabsTrigger
							key={d}
							value={String(d)}
							onClick={() => setDuration(d)}
							aria-selected={duration === d}
						>
							{unit === "days" ? `${d} วัน` : d === 24 ? "เต็มวัน" : `${d} ชม.`}
						</TabsTrigger>
					))}
				</TabsList>
			</Tabs>
		</div>
	);
}
