import { ScrambledText } from "@/components/ui/ScrambledText";
import { useLanguage } from "@/hooks/useLanguage";

export function About() {
	const { strings } = useLanguage();

	return (
		<section
			id="about"
			className="mx-auto px-6 py-24 border-black/10 dark:border-white/10 border-t max-w-6xl"
		>
			<div className="space-y-8">
				<div>
					<h2 className="font-space-grotesk font-bold text-3xl">
						{strings.about.title}
					</h2>
				</div>
				<div className="space-y-6">
					<p className="text-black/70 dark:text-white/70 text-lg leading-relaxed">
						{strings.about.intro}
					</p>
					<p
						id="about-bio"
						className="text-black/70 dark:text-white/70 text-lg leading-relaxed"
					>
						<ScrambledText
							id="about-bio-scrambled-text"
							className=""
							radius={100}
							duration={1.2}
							speed={0.3}
							scrambleChars=".#"
						>
							{strings.about.bio}
						</ScrambledText>
					</p>
				</div>
			</div>
		</section>
	);
}
