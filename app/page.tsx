import Hero from "@/components/sections/hero";
import WhatIsSection from "@/components/sections/what-is";
import ServicesSection from "@/components/sections/services";
import Workflows from "@/components/sections/workflows";
import SupportedAds from "@/components/sections/supported-ads";
import OurClientsSection from "@/components/sections/our-clients";
import Testimonial from "@/components/sections/testimonial";
import FAQSection from "@/components/sections/faq";
import Pricing from "@/components/sections/pricing";
import GallerySection from "@/components/sections/gallery";

export default function Home() {
	return (
		<div className="w-screen max-w-none flex flex-col">
			<Hero />
			<WhatIsSection />
			<ServicesSection />
			<SupportedAds />
			<Workflows />
			<OurClientsSection />
			<Testimonial />
			<GallerySection />
			<Pricing />
			<FAQSection />
		</div>
	);
}
