import { useLanguage } from "@/hooks/useLanguage";
import { Group } from "@/pages/Home/sections/Skills/Group";

export function Skills() {
	const { strings } = useLanguage();
	const {
		title,
		subtitle,
		unit,
		currentLabel,
		coreLabel,
		earlierLabel,
		core,
		earlier,
	} = strings.skills;

	return (
		<section
			id="skills"
			className="mx-auto px-6 py-24 border-black/10 dark:border-white/10 border-t max-w-6xl"
		>
			<div className="space-y-10">
				<div className="space-y-2">
					<h2 className="font-space-grotesk font-bold text-3xl">{title}</h2>
					<p className="text-black/50 dark:text-white/50 text-lg">{subtitle}</p>
				</div>
				<div className="space-y-8">
					<Group
						id="core"
						label={coreLabel}
						tags={core}
						unit={unit}
						currentLabel={currentLabel}
						startIndex={0}
					/>
					<Group
						id="earlier"
						label={earlierLabel}
						tags={earlier}
						unit={unit}
						currentLabel={currentLabel}
						muted
						startIndex={core.length}
					/>
				</div>
			</div>
		</section>
	);
}
