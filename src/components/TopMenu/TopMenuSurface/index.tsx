/**
 * Componente de superfície (fundo) do TopMenu, lidando com os efeitos de rolagem
 */

import type { ReactNode } from "react";
import { GlassSurface } from "@/components/GlassSurface";

export type TopMenuScrolledStyle = "default" | "glass";

export interface TopMenuSurfaceProps {
	isScrolled: boolean;
	scrolledStyle: TopMenuScrolledStyle;
	children: ReactNode;
}

export function TopMenuSurface({
	isScrolled,
	scrolledStyle,
	children,
}: TopMenuSurfaceProps) {
	const shouldUseGlassSurface = isScrolled && scrolledStyle === "glass";
	const navClassName = `relative mx-auto px-6 py-4 w-full max-w-6xl transition-all duration-500 ${
		shouldUseGlassSurface
			? ""
			: isScrolled
				? "rounded-2xl border-2 border-black/15 dark:border-white/15 overflow-hidden"
				: "border-b border-black/5 dark:border-white/5"
	}`;

	if (shouldUseGlassSurface) {
		return (
			<GlassSurface
				width="100%"
				height="auto"
				borderRadius={24}
				borderWidth={0.08}
				brightness={46}
				opacity={0.9}
				blur={10}
				displace={0.4}
				backgroundOpacity={0.12}
				saturation={1.15}
				distortionScale={-110}
				redOffset={0}
				greenOffset={8}
				blueOffset={14}
				className="mx-auto border-2 border-black/15 dark:border-white/15 max-w-6xl"
				contentClassName="p-0"
			>
				<nav id="top-menu-nav-glass" className={navClassName}>
					{children}
				</nav>
			</GlassSurface>
		);
	}

	return (
		<nav id="top-menu-nav-default" className={navClassName}>
			<div
				id="top-menu-surface-default"
				className={`absolute inset-0 pointer-events-none transition-all duration-500 ${isScrolled ? "rounded-2xl" : ""}`}
			>
				<div
					id="top-menu-surface-gradient"
					className="absolute inset-0 bg-linear-to-b from-white dark:from-black via-white/80 dark:via-black/80 to-transparent"
				/>
				<div
					id="top-menu-surface-blur"
					className="absolute inset-0 bg-white/5 dark:bg-black/5 backdrop-blur-xs"
				/>
			</div>
			{children}
		</nav>
	);
}
