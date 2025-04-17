import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
			<h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
			<p className="text-xl text-gray-600 mb-6">ขออภัย ไม่พบหน้าที่คุณต้องการ</p>
			<Link
				href="/"
				className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
			>
				กลับสู่หน้าหลัก
			</Link>
		</main>
	);
}
