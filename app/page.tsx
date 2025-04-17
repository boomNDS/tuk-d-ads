"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>Count: {count || 0}</p>
			<Button onClick={() => setCount(count + 1)}>count++</Button>
			<ModeToggle />
		</div>
	);
}
