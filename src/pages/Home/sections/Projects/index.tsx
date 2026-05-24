import { useLanguage } from "@/hooks/useLanguage";

export function Projects() {
	const { strings } = useLanguage();

	return (
		<section
			id="projects"
			className="mx-auto px-6 py-24 border-black/10 dark:border-white/10 border-t max-w-6xl"
		>
			<div className="space-y-8">
				<div>
					<h2 className="font-space-grotesk font-bold text-3xl">
						{strings.projects.title}
					</h2>
				</div>
				<div>
					<p className="text-black/60 dark:text-white/60 text-lg">
						{strings.projects.empty}
					</p>
				</div>
			</div>
		</section>
	);
}
