import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/elements/HoverCard";
import { useLanguage } from "@/hooks/useLanguage";

const timelineData = {
	en: [
		{
			id: "infox",
			company: "Infox Tecnologia",
			startYear: "2010",
			endYear: "2013",
			role: "Web Developer",
			description:
				"Pioneered work on electronic judicial process system (PJe) for Federal Courts.",
		},
		{
			id: "sgn",
			company: "SGN",
			startYear: "2013",
			endYear: "2015",
			role: "Technical Lead & Developer",
			description:
				"Developed fraud detection platform for state bank with Business Intelligence features.",
		},
		{
			id: "sm-solucoes",
			company: "SM Soluções",
			startYear: "2015",
			endYear: "2019",
			role: "Systems Development Analyst",
			description:
				"Co-authored agricultural integration platform (SIAPEC3) serving multiple state entities.",
		},
		{
			id: "riachuelo",
			company: "Riachuelo",
			startYear: "2019",
			endYear: "Present",
			role: "Senior Software Engineer",
			description:
				"Leading development of omnichannel POS system impacting 500+ retail stores across Brazil. (Also briefly worked at Resource IT in 2019).",
		},
	],
	pt: [
		{
			id: "infox",
			company: "Infox Tecnologia",
			startYear: "2010",
			endYear: "2013",
			role: "Desenvolvedor Web",
			description:
				"Trabalho pioneiro no sistema de processo judicial eletrônico (PJe) para Tribunais Federais.",
		},
		{
			id: "sgn",
			company: "SGN",
			startYear: "2013",
			endYear: "2015",
			role: "Líder Técnico & Desenvolvedor",
			description:
				"Desenvolvimento de plataforma de detecção de fraudes de cartões bancários com Business Intelligence.",
		},
		{
			id: "sm-solucoes",
			company: "SM Soluções",
			startYear: "2015",
			endYear: "2019",
			role: "Analista de Desenvolvimento de Sistemas",
			description:
				"Co-autor da plataforma de integração agropecuária (SIAPEC3) servindo múltiplas entidades estaduais.",
		},
		{
			id: "riachuelo",
			company: "Riachuelo",
			startYear: "2019",
			endYear: "Atual",
			role: "Engenheiro de Software Sênior",
			description:
				"Liderando desenvolvimento de sistema de checkout omnichannel impactando 500+ lojas no Brasil. (Neste mesmo ano atuei brevemente na Resource IT).",
		},
	],
	fr: [
		{
			id: "infox",
			company: "Infox Tecnologia",
			startYear: "2010",
			endYear: "2013",
			role: "Développeur Web",
			description:
				"Pionnier sur le système de processus judiciaire électronique (PJe) pour les tribunaux fédéraux.",
		},
		{
			id: "sgn",
			company: "SGN",
			startYear: "2013",
			endYear: "2015",
			role: "Référent technique & Développeur",
			description:
				"Développement d'une plateforme de détection de fraude pour une banque d'État avec des fonctionnalités de Business Intelligence.",
		},
		{
			id: "sm-solucoes",
			company: "SM Soluções",
			startYear: "2015",
			endYear: "2019",
			role: "Analyste en Développement de Systèmes",
			description:
				"Co-auteur de la plateforme d'intégration agricole (SIAPEC3) au service de plusieurs entités étatiques.",
		},
		{
			id: "riachuelo",
			company: "Riachuelo",
			startYear: "2019",
			endYear: "Présent",
			role: "Ingénieur Logiciel Senior",
			description:
				"Direction du développement frontend pour un système de PDV omnicanal dans plus de 500 magasins.",
		},
	],
};

interface TimelineProps {
	onSelectBackground?: (id: string) => void;
	activeBackgroundId?: string;
	isPlaying?: boolean;
	onPause?: () => void;
}

export function Timeline({
	onSelectBackground,
	activeBackgroundId,
	isPlaying,
	onPause,
}: TimelineProps) {
	const { language } = useLanguage();
	const data = timelineData[language] ?? timelineData.en;

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: Pause is a visual enhancement on hover
		<div
			id="timeline"
			className="hidden z-50 relative lg:flex flex-1 items-center mx-auto px-4 max-w-2xl h-10"
			onMouseEnter={onPause}
		>
			<style>{`
				@keyframes fillProgress {
					from { width: 0%; }
					to { width: 100%; }
				}
			`}</style>
			<div className="top-1/2 right-4 left-4 absolute bg-black/10 dark:bg-white/10 h-[2px] -translate-y-1/2 pointer-events-none" />

			{data.map((item, index) => {
				const startY = Number.parseInt(item.startYear, 10);
				const endY =
					item.endYear === "Present" || item.endYear === "Atual"
						? new Date().getFullYear()
						: Number.parseInt(item.endYear, 10);

				const duration = Math.max(endY - startY, 0.5);
				const isLast = index === data.length - 1;
				const isActive = item.id === activeBackgroundId;

				return (
					<div
						key={item.id}
						style={{ flex: `${duration} 1 0%` }}
						className="z-10 hover:z-20 relative h-full"
					>
						<HoverCard
							openDelay={100}
							closeDelay={100}
							onOpenChange={(open) => {
								if (open) onSelectBackground?.(item.id);
							}}
						>
							<HoverCardTrigger asChild>
								<div className="group relative flex items-center w-full h-full cursor-pointer">
									<div className="top-1/2 right-0 left-0 z-0 absolute bg-transparent dark:group-hover:bg-white/60 group-hover:bg-black/60 h-[2px] group-hover:h-[4px] transition-all -translate-y-1/2" />
									<div
										className={`top-1/2 left-0 z-0 absolute bg-black dark:bg-white h-[2px] transition-all -translate-y-1/2 ${isActive ? "opacity-100" : "opacity-0"}`}
										style={{
											animation:
												isActive && isPlaying
													? "fillProgress 5s linear forwards"
													: "none",
											width: isActive && !isPlaying ? "100%" : "0%",
										}}
									/>

									<div className="top-1/2 left-0 z-10 absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
										<div
											className={`border-2 border-white dark:border-black rounded-full w-2.5 h-2.5 transition-all transform ${isActive ? "bg-black dark:bg-white scale-125" : "bg-black/20 dark:bg-white/20 dark:group-hover:bg-white group-hover:bg-black group-hover:scale-125"}`}
										/>

										<div
											className={`absolute ${index % 2 === 0 ? "top-4 mt-1" : "bottom-4 mb-1"} opacity-50 group-hover:opacity-100 transition-opacity`}
										>
											<span className="font-medium text-[10px] text-black dark:text-white">
												{item.startYear}
											</span>
										</div>
									</div>

									<div className="top-1/2 right-0 z-10 absolute flex flex-col items-center -translate-y-1/2 translate-x-1/2">
										<div
											className={`border-2 border-white dark:border-black rounded-full w-2.5 h-2.5 transition-all transform ${isActive ? "bg-black dark:bg-white scale-125" : "bg-black/20 dark:bg-white/20 dark:group-hover:bg-white group-hover:bg-black group-hover:scale-125"}`}
										/>

										{isLast && (
											<div
												className={`absolute ${index % 2 === 0 ? "bottom-4 mb-1" : "top-4 mt-1"} opacity-50 group-hover:opacity-100 transition-opacity`}
											>
												<span className="font-medium text-[10px] text-black dark:text-white">
													{endY}
												</span>
											</div>
										)}
									</div>
								</div>
							</HoverCardTrigger>
							<HoverCardContent
								side="top"
								className="z-50 bg-white dark:bg-black shadow-xl p-4 border border-black/10 dark:border-white/10 rounded-xl w-80"
							>
								<div className="space-y-2">
									<h4 className="font-semibold text-black dark:text-white text-sm">
										{item.company}
									</h4>
									<p className="font-medium text-black/70 dark:text-white/70 text-sm">
										{item.role}
									</p>
									<p className="text-black/60 dark:text-white/60 text-xs leading-relaxed">
										{item.description}
									</p>
								</div>
							</HoverCardContent>
						</HoverCard>
					</div>
				);
			})}
		</div>
	);
}
