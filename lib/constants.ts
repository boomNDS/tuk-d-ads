// Company/Brand Info
export const COMPANY_INFO = {
	name: "Tuk D Ads",
	fullName: "Tuk D Ads | ร้านรับติดป้ายโฆษณาหลังรถตุ๊กๆ",
	slogan: "สร้างความประทับใจด้วยการติดป้ายรถตุ๊ก ๆ",
	description:
		"สร้างความประทับใจด้วยการติดป้ายรถตุ๊ก ๆ อวยพรศิลปินหรือโปรโมทสินค้าและบริการในวันเกิดของคุณ เปลี่ยนทุกการเดินทางให้เป็นโอกาสพิเศษ!",
	email: "contact@tukdads.com",
	phone: "+66123456789",
	foundedYear: 2023,
	websiteUrl: "https://tukdads.com",
};

// Social Media
export const SOCIAL_LINKS = {
	facebook: "https://www.facebook.com/profile.php?id=100066581749086",
	instagram: "https://www.instagram.com/tukdads.tuktuk/",
	tiktok: "https://www.tiktok.com/@tukdads.official",
	line: "https://lin.ee/WHd0Vdh",
};

// Services
export const SERVICES = [
	{
		id: "advertising",
		title: "ติดป้ายโฆษณาหลังรถตุ๊กตุ๊ก",
		description: "ดึงดูดความสนใจด้วยการติดป้ายโฆษณาหลังรถตุ๊กตุ๊กที่วิ่งไปทั่วเมือง",
		icon: "BillboardIcon", // Reference to an icon component
		price: "เริ่มต้น 500 บาท",
	},
	{
		id: "birthday",
		title: "ป้ายวันเกิดอวยพรศิลปิน",
		description: "แสดงความรักต่อศิลปินที่คุณชื่นชอบด้วยป้ายอวยพรวันเกิดสุดพิเศษ",
		icon: "GiftIcon",
		price: "เริ่มต้น 700 บาท",
	},
	{
		id: "promotion",
		title: "โปรโมทสินค้าและบริการ",
		description: "โปรโมทธุรกิจของคุณด้วยป้ายโฆษณาเคลื่อนที่ที่สะดุดตา",
		icon: "MegaphoneIcon",
		price: "เริ่มต้น 1,000 บาท",
	},
];

// Pricing Packages
export const PRICING = [
	{
		id: "basic",
		name: "แพ็คเกจพื้นฐาน",
		price: "500",
		features: [
			"ติดป้ายโฆษณา 1 คัน",
			"ระยะเวลา 1 วัน",
			"พื้นที่ให้บริการ: กรุงเทพฯ ชั้นใน",
			"รายงานภาพถ่าย 5 ภาพ",
		],
		popular: false,
	},
	{
		id: "standard",
		name: "แพ็คเกจมาตรฐาน",
		price: "1,200",
		features: [
			"ติดป้ายโฆษณา 3 คัน",
			"ระยะเวลา 2 วัน",
			"พื้นที่ให้บริการ: กรุงเทพฯ ทั้งหมด",
			"รายงานภาพถ่าย 10 ภาพ",
			"วีดีโอสั้น 1 คลิป",
		],
		popular: true,
	},
	{
		id: "premium",
		name: "แพ็คเกจพรีเมียม",
		price: "2,500",
		features: [
			"ติดป้ายโฆษณา 5 คัน",
			"ระยะเวลา 5 วัน",
			"พื้นที่ให้บริการ: กรุงเทพฯ และปริมณฑล",
			"รายงานภาพถ่าย 20 ภาพ",
			"วีดีโอสั้น 3 คลิป",
			"โปรโมทบน Social Media",
		],
		popular: false,
	},
];

// FAQ
export const FAQ = [
	{
		question: "บริการป้ายโฆษณารถตุ๊กตุ๊กมีพื้นที่ให้บริการที่ไหนบ้าง?",
		answer:
			"เราให้บริการครอบคลุมพื้นที่กรุงเทพฯ และปริมณฑล โดยสามารถกำหนดเส้นทางเฉพาะได้ตามความต้องการของลูกค้า",
	},
	{
		question: "ราคาติดป้ายโฆษณาเริ่มต้นเท่าไร?",
		answer:
			"ราคาเริ่มต้นที่ 500 บาทต่อคัน ขึ้นอยู่กับระยะเวลาและพื้นที่ให้บริการ สามารถติดต่อเราเพื่อรับใบเสนอราคาที่เหมาะกับความต้องการของคุณ",
	},
	{
		question: "ต้องสั่งล่วงหน้ากี่วัน?",
		answer:
			"แนะนำให้สั่งล่วงหน้าอย่างน้อย 3-5 วัน สำหรับบริการทั่วไป และล่วงหน้า 7 วันสำหรับแคมเปญขนาดใหญ่หรือในช่วงเทศกาล",
	},
	{
		question: "มีบริการออกแบบป้ายโฆษณาหรือไม่?",
		answer:
			"มีบริการออกแบบป้ายโฆษณาในราคาเพิ่มเติม หรือลูกค้าสามารถส่งไฟล์ดีไซน์ที่ต้องการได้ตามขนาดและมาตรฐานที่เรากำหนด",
	},
	{
		question: "ได้รับรายงานผลงานอย่างไร?",
		answer:
			"เราจะส่งภาพถ่ายและ/หรือวีดีโอการติดป้ายจริงให้ลูกค้าระหว่างและหลังจากดำเนินงานผ่านช่องทางที่ลูกค้าสะดวก เช่น Line, Email หรือ WhatsApp",
	},
];

export const NAV_LINKS = [
	{ href: "/", label: "หน้าแรก" },
	{ href: "#services", label: "บริการ" },
	{ href: "#pricing", label: "ราคา" },
	{ href: "#gallery", label: "ผลงาน" },
	{ href: "#contact", label: "ติดต่อเรา" },
];

export const FOOTER_LINKS = [
	{
		title: "บริการ",
		links: [
			{ href: "#advertising", label: "ป้ายโฆษณาหลังรถตุ๊กตุ๊ก" },
			{ href: "#birthday", label: "ป้ายอวยพรวันเกิด" },
			{ href: "#promotion", label: "โปรโมทธุรกิจ" },
		],
	},
	{
		title: "ข้อมูล",
		links: [
			{ href: "/about", label: "เกี่ยวกับเรา" },
			{ href: "/privacy", label: "นโยบายความเป็นส่วนตัว" },
			{ href: "/terms", label: "เงื่อนไขการใช้บริการ" },
		],
	},
];
