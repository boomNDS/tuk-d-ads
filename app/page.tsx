import Hero from "@/components/sections/hero";
import WhatIsSection from "@/components/sections/what-is";
import ServicesSection from "@/components/sections/services";
import Workflows from "@/components/sections/workflows";
import SupportedAds from "@/components/sections/supported-ads";
import OurClientsSection from "@/components/sections/our-clients";

export default function Home() {
	return (
		<div className="w-screen max-w-none flex flex-col">
			<Hero />
			<OurClientsSection />
			<WhatIsSection />
			<ServicesSection />
			<Workflows />
			<SupportedAds />
		</div>
	);
}
