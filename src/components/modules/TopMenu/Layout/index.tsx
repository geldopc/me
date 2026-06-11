import type { ReactNode } from "react";

export interface LayoutProps {
	brand: ReactNode;
	links: ReactNode;
	controls: ReactNode;
	mobile: ReactNode;
}

export function Layout({ brand, links, controls, mobile }: LayoutProps) {
	return (
		<div
			id="top-menu-content"
			className="relative flex justify-between items-center"
		>
			{brand}
			<div
				id="top-menu-links-center"
				className="hidden md:block left-1/2 absolute -translate-x-1/2"
			>
				{links}
			</div>
			{controls}
			{mobile}
		</div>
	);
}
