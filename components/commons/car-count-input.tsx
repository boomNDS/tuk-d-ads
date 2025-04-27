import React from "react";
import { Input } from "@/components/ui/input";

interface Props {
	cars: number;
	setCars: (n: number) => void;
}

export default function CarCountInput({ cars, setCars }: Props) {
	return (
		<div className="flex justify-end items-center space-x-2">
			<label htmlFor="carCount" className="font-medium w-[105px]">
				จำนวนรถ (คัน):
			</label>
			<Input
				id="carCount"
				type="number"
				min={1}
				value={cars}
				onChange={(e) => setCars(Math.max(1, Number(e.target.value)))}
				className="w-full sm:w-20 text-center"
			/>
		</div>
	);
}
