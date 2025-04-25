"use client";

import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface CustomMotionCountProps {
	from?: number;
	to: number;
	duration?: number;
	suffix?: string;
	className?: string;
}

export function CustomMotionCount({
	from = 0,
	to,
	duration = 2,
	suffix = "+",
	className = "",
}: CustomMotionCountProps) {
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const controls = animate(from, to, {
			duration,
			onUpdate(value) {
				node.textContent = `${Math.round(value)}${suffix}`;
			},
		});

		return () => controls.stop();
	}, [from, to, duration, suffix]);

	return <span ref={ref} className={className}>{`${from}${suffix}`}</span>;
}
