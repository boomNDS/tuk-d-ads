import Image from "next/image";

const clientLogos = [
	"/images/our_clients/un.webp",
	"/images/our_clients/mbk.webp",
	"/images/our_clients/j_lek.webp",
	"/images/our_clients/haidilao.webp",
	"/images/our_clients/yuedpao.webp",
	"/images/our_clients/somsai.webp",
	"/images/our_clients/meetpark.webp",
	"/images/our_clients/dezpax.webp",
	"/images/our_clients/easy_money.webp",
];

const OurClientSection = () => (
	<div className="overflow-hidden py-12 bg-muted mt-10">
		<h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
			ลูกค้าของเรา
		</h2>
		<div className="relative group">
			<div className="flex space-x-8 animate-scroll-left group-hover:paused">
				{clientLogos.map((logo, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className="flex-shrink-0 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
					>
						<Image
							src={logo}
							alt={`Client ${index + 1}`}
							width={150}
							height={100}
						/>
					</div>
				))}
				{/* Duplicate logos for seamless looping */}
				{clientLogos.map((logo, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={`dup-${index}`}
						className="flex-shrink-0 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
					>
						<Image
							src={logo}
							alt={`Client Duplicate ${index + 1}`}
							width={150}
							height={100}
						/>
					</div>
				))}
			</div>
		</div>
	</div>
);

export default OurClientSection;
