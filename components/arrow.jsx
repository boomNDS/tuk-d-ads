const Arrow = ({ length = 200, orientation = "horizontal", label = "" }) => {
	const arrowWidth = 10;
	const arrowHeight = 10;

	const isHorizontal = orientation === "horizontal";

	const svgWidth = isHorizontal ? length + arrowWidth : arrowHeight;
	const svgHeight = isHorizontal ? arrowHeight : length + arrowWidth;

	const lineProps = isHorizontal
		? { x1: 0, y1: arrowHeight / 2, x2: length, y2: arrowHeight / 2 }
		: { x1: arrowHeight / 2, y1: 0, x2: arrowHeight / 2, y2: length };

	const markerProps = {
		id: "arrowhead",
		markerWidth: arrowWidth,
		markerHeight: arrowHeight,
		refX: 0,
		refY: arrowHeight / 2,
		orient: "auto",
		markerUnits: "strokeWidth",
	};

	const polygonPoints = isHorizontal
		? `0 0, ${arrowWidth} ${arrowHeight / 2}, 0 ${arrowHeight}`
		: `0 0, ${arrowHeight / 2} ${arrowWidth}, ${arrowHeight} 0`;

	const textProps = isHorizontal
		? { x: length / 2, y: arrowHeight + 15 }
		: { x: arrowHeight + 5, y: length / 2 };

	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg width={svgWidth} height={svgHeight}>
			<defs>
				<marker {...markerProps}>
					<polygon points={polygonPoints} fill="gray" />
				</marker>
			</defs>
			<line
				{...lineProps}
				stroke="gray"
				strokeWidth="2"
				markerEnd="url(#arrowhead)"
			/>
			{label && (
				<text
					{...textProps}
					fill="gray"
					fontSize="12"
					textAnchor="middle"
					alignmentBaseline="middle"
				>
					{label}
				</text>
			)}
		</svg>
	);
};

export default Arrow;
