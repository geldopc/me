export interface MenuItem {
	id: string;
	label: string;
	href: string;
}

export interface LinksProps {
	activeSection?: string;
	items: MenuItem[];
}

export function Links({ activeSection, items }: LinksProps) {
	return (
		<div id="top-menu-links" className="hidden md:flex items-center gap-8">
			{items.map((item) => (
				<a
					key={item.id}
					id={`top-menu-link-${item.id}`}
					href={item.href}
					className={`text-sm font-medium transition-all duration-300 relative group cursor-pointer ${activeSection === item.id ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"}`}
				>
					<span className="relative">
						{item.label}
						<span className="bottom-0 left-0 absolute bg-black dark:bg-white w-0 group-hover:w-full h-0.5 transition-all duration-300" />
					</span>
				</a>
			))}
		</div>
	);
}
