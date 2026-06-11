import { ShinyText } from "@/components/elements/ShinyText";
import { useTheme } from "@/hooks/useTheme";

export interface BrandProps {
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

export function Brand({ href }: BrandProps) {
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
