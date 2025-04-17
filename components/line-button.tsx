import { FaLine } from "react-icons/fa";
import Link from "next/link";

export default function LineButton() {
	return (
		<Link
			href="https://lin.ee/75FQXCM"
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex items-center rounded-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-medium"
		>
			<FaLine className="mr-2 text-lg" />
			เพิ่มเพื่อน
		</Link>
	);
}
