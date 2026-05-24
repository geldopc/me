import { PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { BackgroundItem } from "./BackgroundItem";
import { Timeline } from "./Timeline";

export interface Background {
	id: string;
	title: string;
	company: string;
	period: string;
	description: string;
	skills: string[];
}

const background: Record<string, Background[]> = {
	en: [
		{
			id: "riachuelo",
			title: "Senior Software Engineer",
			company: "Riachuelo",
			period: "Nov 2019 - Present",
			description:
				"Participating in the Pdv Omni (Omnichannel Point of Sale) project, a new point of sale system for Riachuelo stores, which will enable the same sales background across various platforms, whether traditional store checkout, mobile POS, self-checkout or e-commerce. Activities: Analysis and Development (back-end and front-end). More focused on the front-end, creating the component library, screens and working together with UI/UXs on usability issues.",
			skills: [
				"React",
				"React Native",
				"Redux",
				"Node.js",
				"TypeScript",
				"Electron",
				"Java",
				"Spring Boot",
				"Kafka",
				"AWS",
			],
		},
		{
			id: "sm-solucoes",
			title: "Systems Development Analyst",
			company: "SM Soluções para Gestão da Informação",
			period: "Apr 2015 - Sep 2019",
			description:
				"Participated in SIAPEC1, SIAPEC2 projects, Co-Author of SIAPEC3 Project, Agricultural Integration System, which manages Agricultural Defense activities and serves as a bridge between state entities and various Agribusiness segments. Activities: Development of web and mobile platforms (back-end and front-end) and system analysis.",
			skills: ["Java", "JSF", "Hibernate", "Angular", "React", "Ionic"],
		},
		{
			id: "sgn",
			title: "Analyst / Programmer / Technical Lead",
			company: "SGN - Soluções em Gestão de Negócios",
			period: "Aug 2013 - Mar 2015",
			description:
				"Participated in the Banese (Bank of the State of Sergipe) Anti-fraud Project, a platform that detects, notifies and presents, through Business Intelligence, possible bank card fraud attempts. Activities: Development (back-end and front-end) and system analysis.",
			skills: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server"],
		},
		{
			id: "infox",
			title: "Web Developer",
			company: "Infox Tecnologia da Informação",
			period: "Nov 2010 - Jul 2013",
			description:
				"Participated in the PJe (Electronic Judicial Process) Project, a system that allows procedural acts in all branches of the Judiciary (Federal, State and Labor). Activities: Development (back-end and front-end).",
			skills: ["Java", "JSF", "Hibernate", "JBoss Seam", "PostgreSQL"],
		},
	],
	pt: [
		{
			id: "riachuelo",
			title: "Engenheiro de Software Sênior",
			company: "Riachuelo",
			period: "Nov 2019 - Atual",
			description:
				"Participante do projeto Pdv Omni (Ponto de venda omnichannel), novo sistema dos pontos de venda das lojas Riachuelo, que possibilitará a mesma experiência de venda para diversas plataformas, seja o caixa tradicional de loja, pdv mobile, self checkout ou ecommerce. Atividades: Análise e Desenvolvimento (back-end e front-end). Mais focado na parte do front, com a criação da biblioteca de componentes, telas e atuando junto com os UI/UXs com questões relacionadas à usabilidade.",
			skills: [
				"React",
				"React Native",
				"Redux",
				"Node.js",
				"TypeScript",
				"Electron",
				"Java",
				"Spring Boot",
				"Kafka",
				"AWS",
			],
		},
		{
			id: "sm-solucoes",
			title: "Analista de Desenvolvimento de Sistemas",
			company: "SM Soluções para Gestão da Informação",
			period: "Abr 2015 - Set 2019",
			description:
				"Participante dos projetos SIAPEC1, SIAPEC2, CO-Autor do Projeto SIAPEC3, Sistema de Integração Agropecuária, que realiza a gestão das atividades de Defesa Agropecuária e serve de ponte entre as entidades estaduais e os diversos segmentos do Agronegócio. Atividades: Desenvolvimento das plataformas web e mobile(back-end e front-end) e análise de sistema.",
			skills: ["Java", "JSF", "Hibernate", "Angular", "React", "Ionic"],
		},
		{
			id: "sgn",
			title: "Analista / Programador / Líder Técnico",
			company: "SGN - Soluções em Gestão de Negócios",
			period: "Ago 2013 - Mar 2015",
			description:
				"Participante do Projeto Antifraude Banese(Banco do Estado de Sergipe), plataforma que detecta, notifica e apresenta, através de Business Intelligence, as possíveis tentativas de fraudes de cartões bancários. Atividades: Desenvolvimento (back-end e front-end) e análise de sistema.",
			skills: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server"],
		},
		{
			id: "infox",
			title: "Desenvolvedor Web",
			company: "Infox Tecnologia da Informação",
			period: "Nov 2010 - Jul 2013",
			description:
				"Participante do Projeto Pje (Processo Judicial Eletrônico), sistema que permite a prática de atos processuais em todos os ramos do Judiciário (Federal, Estadual e do Trabalho). Atividades: Desenvolvimento (back-end e front-end).",
			skills: ["Java", "JSF", "Hibernate", "JBoss Seam", "PostgreSQL"],
		},
	],
};

export function Backgrounds() {
	const { language } = useLanguage();
	const currentBackgrounds = background[language];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const handleBackgroundSelect = (id: string) => {
		const index = currentBackgrounds.findIndex((exp) => exp.id === id);
		if (index !== -1) {
			setCurrentIndex(index);
			setIsPlaying(false);
		}
	};

	useEffect(() => {
		if (isPlaying) {
			timerRef.current = setInterval(() => {
				setCurrentIndex(
					(prev) =>
						(prev - 1 + currentBackgrounds.length) % currentBackgrounds.length,
				);
			}, 5000);
		}
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [isPlaying, currentBackgrounds.length]);

	return (
		<section
			id="background"
			className="mx-auto px-6 py-24 border-black/10 dark:border-white/10 border-t max-w-6xl"
		>
			<div className="space-y-8">
				<div className="flex justify-between items-center gap-4">
					<h2 className="font-space-grotesk font-bold text-3xl whitespace-nowrap shrink-0">
						{language === "en" ? "Background" : "Experiência"}
					</h2>

					<Timeline
						onSelectBackground={handleBackgroundSelect}
						activeBackgroundId={currentBackgrounds[currentIndex]?.id}
						isPlaying={isPlaying}
						onPause={() => setIsPlaying(false)}
					/>

					<button
						type="button"
						onClick={() => {
							setIsPlaying(!isPlaying);
							document
								.getElementById("background")
								?.scrollIntoView({ behavior: "smooth" });
						}}
						className="p-2 border border-black/10 dark:border-white/10 rounded-md text-black/40 hover:text-black/60 dark:hover:text-white/60 dark:text-white/40 transition-colors shrink-0"
						aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
						title={isPlaying ? "Pause" : "Play"}
					>
						{isPlaying ? (
							<PauseIcon size={24} weight="regular" />
						) : (
							<PlayIcon size={24} weight="regular" />
						)}
					</button>
				</div>

				<div className="relative items-start w-full">
					{/* Main Background Display */}
					<div className="relative min-h-[400px]">
						{currentBackgrounds.map((exp, index) => (
							<div
								key={exp.id}
								className={`absolute inset-0 transition-opacity duration-500 ${
									index === currentIndex
										? "opacity-100 pointer-events-auto"
										: "opacity-0 pointer-events-none"
								}`}
							>
								<BackgroundItem
									background={exp}
									isCurrent={index === currentIndex}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
