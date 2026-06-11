import { ScrambledText } from "@/components/elements/ScrambledText";
import { useLanguage } from "@/hooks/useLanguage";

export function About() {
	const { strings } = useLanguage();

	return (
		<section id="sobre" className="mx-auto px-6 pt-28 md:pt-36 pb-24 max-w-6xl">
			<div className="space-y-10">
				<div className="space-y-4">
					<p className="font-outfit text-black/50 dark:text-white/50 text-lg">
						{strings.hero.greeting}
					</p>
					<h1 className="font-space-grotesk font-bold text-5xl md:text-7xl tracking-tight">
						{strings.hero.name}
					</h1>
					<p className="font-outfit text-black/60 dark:text-white/60 text-xl md:text-2xl">
						{strings.hero.role}
					</p>
					<p className="max-w-2xl text-black/70 dark:text-white/70 text-lg leading-relaxed">
						{strings.hero.tagline}
					</p>
				</div>

				<div className="space-y-6 pt-6 border-black/10 dark:border-white/10 border-t">
					<h2 className="font-space-grotesk font-bold text-2xl">
						{strings.about.title}
					</h2>
					<p className="max-w-3xl text-black/70 dark:text-white/70 text-lg leading-relaxed">
						{strings.about.lead}
					</p>
					<div
						id="about-bio"
						className="max-w-3xl text-black/70 dark:text-white/70 text-lg leading-relaxed"
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
					</div>
				</div>
			</div>
		</section>
	);
}
