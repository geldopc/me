/**
 * Componente responsável pelos botões de controle (idioma, redes sociais, tema)
 */

import {
	EnvelopeSimpleIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	MoonIcon,
	SunIcon,
} from "@phosphor-icons/react";
import type { RefObject } from "react";
import { Button } from "@/components/ui/button";

export interface TopMenuControlsProps {
	language: string;
	languageTitle: string;
	onLanguageToggle: () => void;
	languageButtonRef: RefObject<HTMLButtonElement | null>;
	theme: string;
	themeTitle: string;
	onThemeToggle: () => void;
	themeButtonRef: RefObject<HTMLButtonElement | null>;
}

export function TopMenuControls({
	language,
	languageTitle,
	onLanguageToggle,
	languageButtonRef,
	theme,
	themeTitle,
	onThemeToggle,
	themeButtonRef,
}: TopMenuControlsProps) {
	return (
		<div id="top-menu-controls" className="flex items-center gap-2">
			<a
				id="top-menu-github-anchor"
				href="https://github.com/geldopc"
				target="_blank"
				rel="noopener noreferrer"
				title="GitHub"
			>
				<Button
					id="top-menu-github-link"
					variant="ghost"
					size="icon-sm"
					className="hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
				>
					<GithubLogoIcon size={18} />
				</Button>
			</a>
			<a
				id="top-menu-linkedin-anchor"
				href="https://www.linkedin.com/in/geldopc"
				target="_blank"
				rel="noopener noreferrer"
				title="LinkedIn"
			>
				<Button
					id="top-menu-linkedin-link"
					variant="ghost"
					size="icon-sm"
					className="hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
				>
					<LinkedinLogoIcon size={18} />
				</Button>
			</a>
			<a
				id="top-menu-email-anchor"
				href="mailto:geldopc@gmail.com"
				title="Email"
			>
				<Button
					id="top-menu-email-link"
					variant="ghost"
					size="icon-sm"
					className="hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
				>
					<EnvelopeSimpleIcon size={18} />
				</Button>
			</a>
			<div
				id="top-menu-divider-1"
				className="bg-black/10 dark:bg-white/10 w-px h-4"
			/>
			<Button
				id="top-menu-language-toggle"
				ref={languageButtonRef}
				variant="ghost"
				size="sm"
				onClick={onLanguageToggle}
				className="hover:bg-black/5 dark:hover:bg-white/5 font-medium text-xs transition-all duration-300"
				title={languageTitle}
			>
				{language.toUpperCase()}
			</Button>
			<div
				id="top-menu-divider-2"
				className="bg-black/10 dark:bg-white/10 w-px h-4"
			/>
			<Button
				id="top-menu-theme-toggle"
				ref={themeButtonRef}
				variant="ghost"
				size="icon-sm"
				onClick={onThemeToggle}
				className="hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
				title={themeTitle}
			>
				{theme === "light" ? <MoonIcon size={18} /> : <SunIcon size={18} />}
			</Button>
		</div>
	);
}
