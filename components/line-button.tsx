"use client";

import Link from "next/link";
import { FaLine } from "react-icons/fa";
import { sendGTMEvent } from "@next/third-parties/google";

export default function LineButton() {
	return (
		<Link
			href="https://lin.ee/75FQXCM"
			target="_blank"
			rel="noopener noreferrer"
			className="w-full sm:w-auto inline-flex items-center rounded-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-medium"
			onClick={() => {
				sendGTMEvent({
					event: "button_click",
					button_id: "line-btn",
					button_text: "Add Friend",
				});
			}}
		>
			<FaLine className="text-lg" />
			<span className="hidden md:inline ml-2">เพิ่มเพื่อน</span>
		</Link>
	);
}
