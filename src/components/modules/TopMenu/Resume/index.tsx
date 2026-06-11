import { DownloadSimpleIcon } from "@phosphor-icons/react";
import { Button } from "@/components/elements/Button";
import { useLanguage } from "@/hooks/useLanguage";

export function Resume() {
	const { strings } = useLanguage();

	return (
		<div id="top-menu-resume" className="group relative">
			<Button
				id="top-menu-resume-trigger"
				variant="ghost"
				size="icon-sm"
				title={strings.resume.cta}
				className="hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer"
			>
				<DownloadSimpleIcon size={18} />
			</Button>
			<div
				id="top-menu-resume-menu"
				className="invisible group-focus-within:visible group-hover:visible top-full right-0 absolute opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 pt-2 transition-all duration-200"
			>
				<div className="bg-white dark:bg-black shadow-lg p-1 border border-black/10 dark:border-white/10 rounded-lg min-w-40">
					{strings.resume.files.map((file) => (
						<a
							key={file.code}
							id={`top-menu-resume-${file.code}`}
							href={file.file}
							download
							className="flex justify-between items-center hover:bg-black/5 dark:hover:bg-white/5 px-3 py-2 rounded-md text-sm transition-colors duration-200 cursor-pointer"
						>
							<span>{file.label}</span>
							<span className="text-black/40 dark:text-white/40 text-xs">
								{file.code}
							</span>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
