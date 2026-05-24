import { useEffect, useMemo, useRef, useState } from "react";
import { TopMenuLayout } from "@/components/TopMenu/TopMenuLayout";
import type { MenuItem } from "@/components/TopMenu/TopMenuLinks";
import {
	type TopMenuScrolledStyle,
	TopMenuSurface,
} from "@/components/TopMenu/TopMenuSurface";
import { useTheme } from "@/components/theme-provider";
import { useAnimations } from "@/hooks/useAnimations";
import { useLanguage } from "@/hooks/useLanguage";

const TOP_MENU_SCROLLED_STYLE: TopMenuScrolledStyle = "default";

export interface TopMenuProps {
	activeSection?: string;
}

export function TopMenu({ activeSection }: TopMenuProps) {
	const { language, setLanguage, strings } = useLanguage();
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
		setTimeout(() => setLanguage(language === "en" ? "pt" : "en"), 150);
	};

	const toggleTheme = () => {
		if (themeButtonRef.current) bounce(themeButtonRef.current);
		setTimeout(() => setTheme(theme === "light" ? "dark" : "light"), 150);
	};

	const languageTitle =
		language === "en" ? "Switch to Portuguese" : "Mudar para Inglês";
	const themeTitle =
		theme === "light" ? "Switch to dark mode" : "Switch to light mode";

	const items: MenuItem[] = useMemo(
		() => [
			{ id: "about", label: strings.nav.about, href: "#about" },
			{ id: "background", label: strings.nav.background, href: "#background" },
			{ id: "skills", label: strings.nav.skills, href: "#skills" },
			{ id: "projects", label: strings.nav.projects, href: "#projects" },
			{ id: "resume", label: strings.nav.resume, href: "#resume" },
		],
		[strings],
	);

	const headerClassName = `top-0 z-50 sticky transition-all duration-500 ${
		isScrolled ? "px-4 py-2" : "px-0 py-0"
	}`;

	return (
		<header id="top-menu" className={headerClassName}>
			<TopMenuSurface
				isScrolled={isScrolled}
				scrolledStyle={TOP_MENU_SCROLLED_STYLE}
			>
				<TopMenuLayout
					activeSection={activeSection}
					items={items}
					language={language}
					languageTitle={languageTitle}
					onLanguageToggle={toggleLanguage}
					languageButtonRef={languageButtonRef}
					theme={theme}
					themeTitle={themeTitle}
					onThemeToggle={toggleTheme}
					themeButtonRef={themeButtonRef}
				/>
			</TopMenuSurface>
		</header>
	);
}
