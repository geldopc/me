import {
	DownloadSimpleIcon,
	EnvelopeSimpleIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	ListIcon,
	MoonIcon,
	SunIcon,
	XIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Button } from "@/components/elements/Button";
import type { MenuItem } from "@/components/modules/TopMenu/Links";
import { useLanguage } from "@/hooks/useLanguage";

export interface MobileProps {
	activeSection?: string;
	items: MenuItem[];
	language: string;
	onLanguageToggle: () => void;
	theme: string;
	onThemeToggle: () => void;
}

export function Mobile({
	activeSection,
	items,
	language,
	onLanguageToggle,
	theme,
	onThemeToggle,
}: MobileProps) {
	const { strings } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);

	const close = () => setIsOpen(false);

	return (
		<div id="top-menu-mobile" className="md:hidden">
			<Button
				id="top-menu-mobile-trigger"
				variant="ghost"
				size="icon-sm"
				onClick={() => setIsOpen((prev) => !prev)}
				aria-expanded={isOpen}
				aria-label="Menu"
				className="hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer"
			>
				{isOpen ? <XIcon size={20} /> : <ListIcon size={20} />}
			</Button>

			{isOpen && (
				<>
					<button
						id="top-menu-mobile-overlay"
						type="button"
						aria-label="Close menu"
						onClick={close}
						className="top-0 left-0 z-40 fixed bg-black/20 dark:bg-black/40 w-full h-full cursor-default"
					/>
					<div
						id="top-menu-mobile-panel"
						className="top-full right-0 left-0 z-50 absolute bg-white dark:bg-black shadow-lg mt-2 p-4 border-black/10 dark:border-white/10 border-t"
					>
						<nav id="top-menu-mobile-links" className="flex flex-col gap-1">
							{items.map((item) => (
								<a
									key={item.id}
									id={`top-menu-mobile-link-${item.id}`}
									href={item.href}
									onClick={close}
									className={`rounded-md px-3 py-3 text-base font-medium transition-colors duration-200 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 ${activeSection === item.id ? "text-black dark:text-white" : "text-black/60 dark:text-white/60"}`}
								>
									{item.label}
								</a>
							))}
						</nav>

						<div className="my-3 border-black/10 dark:border-white/10 border-t" />

						<div id="top-menu-mobile-resume" className="flex flex-col gap-1">
							<span className="flex items-center gap-2 px-3 py-1 font-medium text-black/40 dark:text-white/40 text-xs uppercase tracking-wide">
								<DownloadSimpleIcon size={14} />
								{strings.resume.cta}
							</span>
							{strings.resume.files.map((file) => (
								<a
									key={file.code}
									id={`top-menu-mobile-resume-${file.code}`}
									href={file.file}
									download
									onClick={close}
									className="flex justify-between items-center hover:bg-black/5 dark:hover:bg-white/5 px-3 py-2 rounded-md text-sm transition-colors duration-200 cursor-pointer"
								>
									<span>{file.label}</span>
									<span className="text-black/40 dark:text-white/40 text-xs">
										{file.code}
									</span>
								</a>
							))}
						</div>

						<div className="my-3 border-black/10 dark:border-white/10 border-t" />

						<div
							id="top-menu-mobile-actions"
							className="flex justify-between items-center"
						>
							<div className="flex items-center gap-1">
								<a
									href="https://github.com/geldopc"
									target="_blank"
									rel="noopener noreferrer"
									title="GitHub"
								>
									<Button
										variant="ghost"
										size="icon-sm"
										className="hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
									>
										<GithubLogoIcon size={18} />
									</Button>
								</a>
								<a
									href="https://www.linkedin.com/in/geldopc"
									target="_blank"
									rel="noopener noreferrer"
									title="LinkedIn"
								>
									<Button
										variant="ghost"
										size="icon-sm"
										className="hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
									>
										<LinkedinLogoIcon size={18} />
									</Button>
								</a>
								<a href="mailto:geldopc@gmail.com" title="Email">
									<Button
										variant="ghost"
										size="icon-sm"
										className="hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
									>
										<EnvelopeSimpleIcon size={18} />
									</Button>
								</a>
							</div>

							<div className="flex items-center gap-1">
								<Button
									variant="ghost"
									size="sm"
									onClick={onLanguageToggle}
									className="hover:bg-black/5 dark:hover:bg-white/5 font-medium text-xs cursor-pointer"
								>
									{language.toUpperCase()}
								</Button>
								<Button
									variant="ghost"
									size="icon-sm"
									onClick={onThemeToggle}
									className="hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
								>
									{theme === "light" ? (
										<MoonIcon size={18} />
									) : (
										<SunIcon size={18} />
									)}
								</Button>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
