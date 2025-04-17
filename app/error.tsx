"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-background text-foreground">
			<h2 className="text-2xl font-semibold mb-4">เกิดข้อผิดพลาด</h2>
			<p className="mb-6 text-muted-foreground">โปรดลองอีกครั้ง</p>
			<Button onClick={reset}>ลองอีกครั้ง</Button>
		</div>
	);
}
