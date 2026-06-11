import type { SkillTag } from "@/i18n";
import { Tag } from "@/pages/Home/sections/Skills/Tag";

export interface GroupProps {
	id: string;
	label: string;
	tags: SkillTag[];
	unit: string;
	currentLabel: string;
	muted?: boolean;
	startIndex?: number;
}

export function Group({
	id,
	label,
	tags,
	unit,
	currentLabel,
	muted,
	startIndex = 0,
}: GroupProps) {
	return (
		<div id={`skill-group-${id}`} className="space-y-4">
			<p className="font-space-grotesk text-black/40 dark:text-white/40 text-xs uppercase tracking-widest">
				{label}
			</p>
			<div className="flex flex-wrap gap-3">
				{tags.map((tag, position) => (
					<Tag
						key={tag.name}
						name={tag.name}
						years={tag.years}
						plus={tag.plus}
						current={tag.current}
						muted={muted}
						unit={unit}
						currentLabel={currentLabel}
						index={startIndex + position}
					/>
				))}
			</div>
		</div>
	);
}
