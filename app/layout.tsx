import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbars/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";

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
	metadataBase: new URL("https://tukdads.com"),
	alternates: {
		canonical: "/",
	},
	keywords: [
		"ติดป้าย",
		"ติดป้ายรถตุ๊กๆ",
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
	twitter: {
		card: "summary_large_image",
		title: "TUK D ADS - โฆษณาบนรถตุ๊กตุ๊ก | เข้าถึงคนเมืองได้มากกว่าวิ่ง",
		description:
			"บริการโฆษณาบนรถตุ๊กตุ๊กที่ช่วยให้แบรนด์ของคุณเข้าถึงกลุ่มเป้าหมายได้อย่างมีประสิทธิภาพ",
		images: [],
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
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}
					<GoogleAnalytics gaId="G-HBD45TGZRY" />
					<GoogleTagManager gtmId="GTM-N5ZV5BVQ" />
					<SpeedInsights />
					<Analytics />
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
