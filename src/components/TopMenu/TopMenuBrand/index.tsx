/**
 * Componente responsável pela renderização da marca/logo no TopMenu
 */

import { useTheme } from "@/components/theme-provider";
import { ShinyText } from "@/components/ui/ShinyText";

export interface TopMenuBrandProps {
	href: string;
}

function Logo() {
	const { theme } = useTheme();
	const isDark =
		theme === "dark" ||
		(theme === "system" &&
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches);
	const color = isDark ? "#b5b5b5" : "#4a4a4a";
	const shineColor = isDark ? "#ffffff" : "#000000";

	return (
		<div
			id="top-menu-logo"
			className="font-space-grotesk font-semibold text-lg tracking-tight select-none"
		>
			<ShinyText
				text="@geldopc"
				disabled={false}
				speed={3}
				color={color}
				shineColor={shineColor}
			/>
		</div>
	);
}

export function TopMenuBrand({ href }: TopMenuBrandProps) {
	return (
		<a
			id="top-menu-brand-link"
			href={href}
			className="group flex items-center gap-2 hover:opacity-70 transition-all duration-300"
		>
			<Logo />
		</a>
	);
}
