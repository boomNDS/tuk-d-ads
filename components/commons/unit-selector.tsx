import React from "react";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
} from "@/components/ui/select";

type Unit = "days" | "hours";

interface Props {
	unit: Unit;
	setUnit: (u: Unit) => void;
}

export default function UnitSelector({ unit, setUnit }: Props) {
	return (
		<div className="flex items-center mb-6">
			<Select value={unit} onValueChange={(v) => setUnit(v as Unit)}>
				<SelectTrigger className="w-[100px]">
					<SelectValue placeholder="เลือกประเภท" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>เลือกประเภท</SelectLabel>
						<SelectItem value="days">วัน</SelectItem>
						<SelectItem value="hours">ชั่วโมง</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
