import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
	const { strings } = useLanguage();
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-black/10 dark:border-white/10 border-t">
			<div className="mx-auto px-6 py-12 max-w-7xl text-center">
				<p className="text-black/50 dark:text-white/50 text-sm">
					{strings.footer.copyright.replace("2026", String(currentYear))}
				</p>
			</div>
		</footer>
	);
}
