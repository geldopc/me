/**
 * Componente de layout principal que agrupa as partes do TopMenu
 */

import type { RefObject } from "react";
import { TopMenuBrand } from "@/components/TopMenu/TopMenuBrand";
import { TopMenuControls } from "@/components/TopMenu/TopMenuControls";
import { type MenuItem, TopMenuLinks } from "@/components/TopMenu/TopMenuLinks";

export interface TopMenuLayoutProps {
	activeSection?: string;
	items: MenuItem[];
	language: string;
	languageTitle: string;
	onLanguageToggle: () => void;
	languageButtonRef: RefObject<HTMLButtonElement | null>;
	theme: string;
	themeTitle: string;
	onThemeToggle: () => void;
	themeButtonRef: RefObject<HTMLButtonElement | null>;
}

export function TopMenuLayout({
	activeSection,
	items,
	language,
	languageTitle,
	onLanguageToggle,
	languageButtonRef,
	theme,
	themeTitle,
	onThemeToggle,
	themeButtonRef,
}: TopMenuLayoutProps) {
	return (
		<div
			id="top-menu-content"
			className="relative flex justify-between items-center"
		>
			<TopMenuBrand href="/" />
			<TopMenuLinks activeSection={activeSection} items={items} />
			<TopMenuControls
				language={language}
				languageTitle={languageTitle}
				onLanguageToggle={onLanguageToggle}
				languageButtonRef={languageButtonRef}
				theme={theme}
				themeTitle={themeTitle}
				onThemeToggle={onThemeToggle}
				themeButtonRef={themeButtonRef}
			/>
		</div>
	);
}
