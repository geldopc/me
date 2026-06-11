import { useEffect, useMemo, useRef, useState } from "react";
import { Brand } from "@/components/modules/TopMenu/Brand";
import { Controls } from "@/components/modules/TopMenu/Controls";
import { Layout } from "@/components/modules/TopMenu/Layout";
import type { MenuItem } from "@/components/modules/TopMenu/Links";
import { Links } from "@/components/modules/TopMenu/Links";
import { Mobile } from "@/components/modules/TopMenu/Mobile";
import type { ScrolledStyle } from "@/components/modules/TopMenu/Surface";
import { Surface } from "@/components/modules/TopMenu/Surface";
import { useAnimations } from "@/hooks/useAnimations";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";

const TOP_MENU_SCROLLED_STYLE: ScrolledStyle = "default";

export interface TopMenuProps {
	activeSection?: string;
}

export function TopMenu({ activeSection }: TopMenuProps) {
	const { language, cycleLanguage, languages, strings } = useLanguage();
	const { theme, setTheme } = useTheme();
	const [isScrolled, setIsScrolled] = useState(false);
	const { bounce } = useAnimations();

	const languageButtonRef = useRef<HTMLButtonElement>(null);
	const themeButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleLanguage = () => {
		if (languageButtonRef.current) bounce(languageButtonRef.current);
		setTimeout(() => cycleLanguage(), 150);
	};

	const toggleTheme = () => {
		if (themeButtonRef.current) bounce(themeButtonRef.current);
		setTimeout(() => setTheme(theme === "light" ? "dark" : "light"), 150);
	};

	const nextLanguage =
		languages[
			(languages.findIndex((item) => item.code === language) + 1) %
				languages.length
		];
	const languageTitle = nextLanguage.label;
	const themeTitle =
		theme === "light" ? "Switch to dark mode" : "Switch to light mode";

	const items: MenuItem[] = useMemo(
		() => [
			{ id: "sobre", label: strings.nav.about, href: "#sobre" },
			{ id: "background", label: strings.nav.background, href: "#background" },
			{ id: "skills", label: strings.nav.skills, href: "#skills" },
			{ id: "projects", label: strings.nav.projects, href: "#projects" },
		],
		[strings],
	);

	const headerClassName = `top-0 z-50 sticky transition-all duration-500 ${
		isScrolled ? "px-4 py-2" : "px-0 py-0"
	}`;

	return (
		<header id="top-menu" className={headerClassName}>
			<Surface isScrolled={isScrolled} scrolledStyle={TOP_MENU_SCROLLED_STYLE}>
				<Layout
					brand={<Brand href="/" />}
					links={<Links items={items} activeSection={activeSection} />}
					controls={
						<Controls
							language={language}
							languageTitle={languageTitle}
							onLanguageToggle={toggleLanguage}
							languageButtonRef={languageButtonRef}
							theme={theme}
							themeTitle={themeTitle}
							onThemeToggle={toggleTheme}
							themeButtonRef={themeButtonRef}
						/>
					}
					mobile={
						<Mobile
							activeSection={activeSection}
							items={items}
							language={language}
							onLanguageToggle={toggleLanguage}
							theme={theme}
							onThemeToggle={toggleTheme}
						/>
					}
				/>
			</Surface>
		</header>
	);
}
