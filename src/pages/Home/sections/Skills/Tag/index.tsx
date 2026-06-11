import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/elements/Badge";

export interface TagProps {
	name: string;
	years?: number;
	plus?: boolean;
	current?: boolean;
	muted?: boolean;
	unit: string;
	currentLabel: string;
	index: number;
}

export function Tag({
	name,
	years,
	plus,
	current,
	muted,
	unit,
	currentLabel,
	index,
}: TagProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.2 },
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
	const yearLabel = current
		? currentLabel
		: `${years}${plus ? "+" : ""} ${unit}`;

	return (
		<div
			id={`skill-tag-${slug}`}
			ref={ref}
			className="inline-flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 py-1 pr-1.5 pl-3 border border-black/10 dark:border-white/10 rounded-3xl whitespace-nowrap"
			style={{
				opacity: visible ? 1 : 0,
				transform: visible ? "translateY(0)" : "translateY(8px)",
				transition:
					"opacity 0.5s ease, transform 0.5s ease, background-color 0.3s ease",
				transitionDelay: `${Math.min(index, 10) * 40}ms`,
			}}
		>
			<span
				className={`font-space-grotesk font-medium text-sm ${
					muted ? "text-black/55 dark:text-white/55" : ""
				}`}
			>
				{name}
			</span>
			<Badge
				variant={current ? "default" : muted ? "outline" : "secondary"}
				className="tabular-nums"
			>
				{yearLabel}
			</Badge>
		</div>
	);
}
