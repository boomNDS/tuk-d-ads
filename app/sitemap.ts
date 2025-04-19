import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const today = new Date();
	return [
		{
			url: "https://tukdads.com",
			lastModified: today,
			changeFrequency: "daily",
			priority: 1.0,
		},
		{
			url: "https://tukdads.com/terms",
			lastModified: today,
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: "https://tukdads.com/privacy",
			lastModified: today,
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: "https://tukdads.com/cookies",
			lastModified: today,
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];
}
