import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Tuk D Ads | ร้านรับติดป้ายโฆษณาหลังรถตุ๊กๆ",
	description:
		"สร้างความประทับใจด้วยการติดป้ายรถตุ๊ก ๆ อวยพรศิลปินหรือโปรโมทสินค้าและบริการในวันเกิดของคุณ เปลี่ยนทุกการเดินทางให้เป็นโอกาสพิเศษ!",
	keywords: [
		"ติดป้ายรถตุ๊ก",
		"อวยพรศิลปิน",
		"โฆษณารถตุ๊กตุ๊ก",
		"วันเกิดสุดพิเศษ",
		"โปรโมทสินค้า",
		"บริการติดป้ายโฆษณา",
		"Tuk Tuk advertising",
		"Artist birthday ads",
		"Bangkok mobile ads",
		"Thai tuk tuk promotion",
		"Tuk D Ads",
		"โฆษณาเคลื่อนที่",
		"ป้ายโฆษณาหลังรถตุ๊กๆ",
	],
	openGraph: {
		type: "website",
		siteName: "Tuk D Ads | ร้านรับติดป้ายโฆษณาหลังรถตุ๊กๆ",
		locale: "th_TH",
		url: "https://tukdads.com",
		title: "Tuk D Ads | ร้านรับติดป้ายโฆษณาหลังรถตุ๊กๆ",
		description:
			"สร้างสรรค์ป้ายอวยพรและโปรโมทสินค้าด้วยรถตุ๊ก ๆ ที่มีเอกลักษณ์! ติดป้ายวันเกิดหรือสื่อสารบริการของคุณให้โดดเด่น รับรองว่าจะดึงดูดความสนใจและทำให้ทุกคนรู้จักคุณมากขึ้น!",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Tuk D Ads - บริการติดป้ายโฆษณาหลังรถตุ๊กๆ",
			},
		],
	},
	authors: [
		{
			name: "Tuk D Ads",
			url: "https://tukdads.com",
		},
	],
	creator: "Tuk D Ads",
	icons: [
		{
			rel: "icon",
			url: "/favicon.ico",
		},
		{
			rel: "apple-touch-icon",
			url: "/apple-touch-icon.png",
		},
		{
			rel: "icon",
			type: "image/png",
			url: "/favicon-32x32.png",
			sizes: "32x32",
		},
		{
			rel: "icon",
			type: "image/png",
			url: "/favicon-16x16.png",
			sizes: "16x16",
		},
		{
			rel: "icon",
			type: "image/png",
			url: "/android-chrome-192x192.png",
			sizes: "192x192",
		},
		{
			rel: "icon",
			type: "image/png",
			url: "/android-chrome-512x512.png",
			sizes: "512x512",
		},
	],
	robots: {
		index: true,
		follow: true,
	},
	manifest: "/site.webmanifest",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="th" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
