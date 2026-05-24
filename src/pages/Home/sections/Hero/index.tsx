import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
	const { strings } = useLanguage();

	return (
		<section className="mx-auto px-6 py-24 md:py-32 max-w-7xl">
			<div className="space-y-6">
				<div className="space-y-2">
					<h1 className="font-space-grotesk font-bold text-5xl md:text-7xl tracking-tight">
						{strings.hero.title}
					</h1>
					<p className="font-outfit text-black/60 dark:text-white/60 text-xl md:text-2xl">
						{strings.hero.subtitle}
					</p>
				</div>
				<p className="max-w-2xl text-black/70 dark:text-white/70 text-lg leading-relaxed">
					{strings.hero.description}
				</p>
			</div>
		</section>
	);
}
