import { useLanguage } from "@/hooks/useLanguage";
import { PROJECTS } from "@/i18n/config";
import { Item } from "@/pages/Home/sections/Projects/Item";

export function Projects() {
	const { strings } = useLanguage();
	const { title, subtitle, empty, liveCta, sourceCta, descriptions } =
		strings.projects;

	return (
		<section
			id="projects"
			className="mx-auto px-6 py-24 border-black/10 dark:border-white/10 border-t max-w-6xl"
		>
			<div className="space-y-10">
				<div className="space-y-2">
					<h2 className="font-space-grotesk font-bold text-3xl">{title}</h2>
					<p className="text-black/50 dark:text-white/50 text-lg">{subtitle}</p>
				</div>
				{PROJECTS.length > 0 ? (
					<div className="space-y-6 max-w-3xl">
						{PROJECTS.map((project) => (
							<Item
								key={project.id}
								project={project}
								description={descriptions[project.id] ?? ""}
								liveCta={liveCta}
								sourceCta={sourceCta}
							/>
						))}
					</div>
				) : (
					<p className="text-black/60 dark:text-white/60 text-lg">{empty}</p>
				)}
			</div>
		</section>
	);
}
