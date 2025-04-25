import Image from "next/image";

const supportedAds = [
	{
		title: "รถสองแถว/ตู้ทึบ",
		images: [
			"/images/categories/bus_01.webp",
			"/images/categories/bus_02.webp",
			"/images/categories/bus_03.webp",
		],
	},
	{
		title: "รถตุ๊กๆ",
		images: [
			"/images/categories/tuk_01.webp",
			"/images/categories/tuk_02.webp",
			"/images/categories/tuk_03.webp",
		],
	},
	{
		title: "วินมอเตอร์ไซค์",
		images: [
			"/images/categories/mo_01.webp",
			"/images/categories/mo_02.webp",
			"/images/categories/mo_03.webp",
		],
	},
];
const SupportedAds = () => (
	<div className="max-w-4xl mx-auto px-6 py-12">
		<h2 className="text-3xl font-bold text-center mb-8">เรารองรับโฆษณาบน</h2>
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-[5rem]">
			{supportedAds.map((ad) => (
				<div key={ad.title} className="flex flex-col">
					<h3 className="text-xl font-semibold text-center mb-4 text-red-500">
						{ad.title}
					</h3>
					{/* Main image */}
					<div className="relative h-48 w-full rounded-lg overflow-hidden">
						<Image
							src={ad.images[0]}
							alt={`${ad.title} main`}
							layout="fill"
							objectFit="cover"
							className="hover:scale-110 duration-300 transition-transform"
						/>
					</div>
					{/* Thumbnails row */}
					<div className="mt-4 grid grid-cols-2 gap-8">
						{ad.images.slice(1).map((src, idx) => (
							<div
								key={`thumbnail-${idx}`}
								className="relative h-[100px] w-[100px] rounded-lg overflow-hidden"
							>
								<Image
									src={src}
									alt={`${ad.title} ${idx + 1}`}
									layout="fill"
									objectFit="cover"
									className="hover:scale-110 duration-300 transition-transform"
								/>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	</div>
);

export default SupportedAds;
