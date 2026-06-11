import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
	const { strings } = useLanguage();

	return (
		<section id="hero" className="mx-auto px-6 py-24 md:py-32 max-w-7xl">
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
		</section>
	);
}
