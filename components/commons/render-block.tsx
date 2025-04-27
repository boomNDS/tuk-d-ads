import type { FaqBlock } from "@/data/faqItems";

type RenderBlockProps = {
	block: FaqBlock;
	idx: number;
};

export const RenderBlock: React.FC<RenderBlockProps> = ({ block, idx }) => {
	if (block.type === "paragraph") {
		return (
			<p key={idx} className="mb-2">
				{block.text}
			</p>
		);
	}

	if (block.type === "list") {
		return (
			<ul key={idx} className="list-disc list-inside mb-4">
				{block.items.map((item, i) => (
					<li className="text-[16px]" key={`${idx}-item-${i}`}>
						{item}
					</li>
				))}
			</ul>
		);
	}

	return null;
};
