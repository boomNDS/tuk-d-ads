import { Separator } from "@/components/ui/separator";
// import { FacebookIcon, InstagramIcon } from "lucide-react";
import { SiTiktok, SiFacebook, SiInstagram } from "react-icons/si";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";
import Logo from "@/components/logo";

// TODO: add Privacy Policy Terms of Service Cookie Policy
const footerSections = [
	// {
	//   title: "Product",
	//   links: [
	//     {
	//       title: "Overview",
	//       href: "#",
	//     },
	//     {
	//       title: "Features",
	//       href: "#",
	//     },
	//     {
	//       title: "Solutions",
	//       href: "#",
	//     },
	//     {
	//       title: "Tutorials",
	//       href: "#",
	//     },
	//     {
	//       title: "Pricing",
	//       href: "#",
	//     },
	//     {
	//       title: "Releases",
	//       href: "#",
	//     },
	//   ],
	// },
	{
		title: "Social",
		links: [
			{
				title: "Facebook",
				href: SOCIAL_LINKS.facebook,
			},
			{
				title: "Instagram",
				href: SOCIAL_LINKS.instagram,
			},
			{
				title: "TikTok",
				href: SOCIAL_LINKS.tiktok,
			},
			{
				title: "Line",
				href: SOCIAL_LINKS.line,
			},
		],
	},
	{
		title: "Legal",
		links: [
			{
				title: "Terms of Service",
				href: "/terms",
			},
			{
				title: "Privacy Policy",
				href: "/privacy",
			},
			{
				title: "Cookies",
				href: "/cookies",
			},
			{
				title: "Contact",
				href: "#contact",
			},
		],
	},
];

const Footer = () => {
	return (
		<footer className="mt-12 xs:mt-20 dark bg-background border-t">
			<div className="max-w-screen-xl mx-auto py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6">
				<div className="col-span-full xl:col-span-2">
					{/* Logo */}
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<Logo src="/logo-white.png" />

					<p className="mt-4 text-muted-foreground">
						พบกับบริการ TUK D ADS ที่จะช่วยให้ธุรกิจของคุณโดดเด่น! รับติดป้ายโฆษณาหลังรถตุ๊กตุ๊ก
						เพิ่มโอกาสในการโปรโมทสินค้าของคุณให้คนเห็นได้อย่างกว้างขวาง
						ด้วยราคามิตรภาพและบริการที่ครบวงจร
					</p>
				</div>

				{footerSections.map(({ title, links }) => (
					<div key={title} className="xl:justify-self-end">
						<h6 className="font-semibold text-foreground">{title}</h6>
						<ul className="mt-6 space-y-4">
							{links.map(({ title, href }) => (
								<li key={title}>
									<Link
										href={href}
										className="text-muted-foreground hover:text-foreground"
									>
										{title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<Separator />
			<div className="max-w-screen-xl mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
				{/* Copyright */}
				<span className="text-muted-foreground text-center xs:text-start">
					&copy; {new Date().getFullYear()}{" "}
					<Link href="https://shadcnui-blocks.com" target="_blank">
						TUK D ADS
					</Link>
					. All rights reserved.
				</span>

				<div className="flex items-center gap-5 text-muted-foreground">
					<Link
						href={SOCIAL_LINKS.facebook}
						target="_blank"
						className="transition-all duration-300 hover:text-white cursor-pointer transform hover:scale-110"
					>
						<SiFacebook className="h-5 w-5" />
					</Link>
					<Link
						href={SOCIAL_LINKS.instagram}
						target="_blank"
						className="transition-all duration-300 hover:text-white cursor-pointer transform hover:scale-110"
					>
						<SiInstagram className="h-5 w-5" />
					</Link>
					<Link
						href={SOCIAL_LINKS.tiktok}
						target="_blank"
						className="transition-all duration-300 hover:text-white cursor-pointer transform hover:scale-110"
					>
						<SiTiktok className="h-5 w-5" />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
