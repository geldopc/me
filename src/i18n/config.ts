/**
 * Para adicionar um novo idioma:
 * 1. Crie o arquivo em `src/i18n/locales/<code>.ts` exportando um `Translations`.
 * 2. Registre o idioma aqui em `LANGUAGES`.
 * 3. Mapeie o locale em `src/i18n/index.ts`.
 * O TypeScript acusa erro caso algum passo fique faltando.
 */

export const LANGUAGES = [
	{ code: "pt", label: "Português" },
	{ code: "en", label: "English" },
	{ code: "fr", label: "Français" },
] as const;

export type Language = (typeof LANGUAGES)[number]["code"];

export const DEFAULT_LANGUAGE: Language = "pt";

import type { Project, ResumeFile, SkillTag } from "@/i18n/types";

export const RESUME_FILES: ResumeFile[] = [
	{ code: "PT", label: "Português", file: "/cv/geldo-pina-costa-pt.pdf" },
	{ code: "EN", label: "English", file: "/cv/geldo-pina-costa-en.pdf" },
	{ code: "FR", label: "Français", file: "/cv/geldo-pina-costa-fr.pdf" },
];

export const PROJECTS: Project[] = [
	{
		id: "xml-formatter",
		name: "myXmlFormatter",
		url: "https://geldopc.github.io/myXmlFormatter/",
		repo: "https://github.com/geldopc/myXmlFormatter",
		tech: ["React", "TypeScript", "Vite", "Tailwind"],
	},
	{
		id: "json-formatter",
		name: "myJsonFormatter",
		url: "https://geldopc.github.io/myJsonFormatter/",
		repo: "https://github.com/geldopc/myJsonFormatter",
		tech: ["React", "TypeScript", "Vite", "Tailwind"],
	},
];

export const SKILL_TAGS_CORE: SkillTag[] = [
	{ name: "React", years: 10, plus: true },
	{ name: "TypeScript", years: 6 },
	{ name: "Node.js", years: 6 },
	{ name: "AI / LLMs", current: true },
	{ name: "React Native", years: 6 },
	{ name: "AWS", years: 6 },
	{ name: "Kafka", years: 6 },
	{ name: "Spring Boot", years: 6 },
	{ name: "Redux", years: 6 },
	{ name: "Electron", years: 6 },
	{ name: "Java", years: 12, plus: true },
];

export const SKILL_TAGS_EARLIER: SkillTag[] = [
	{ name: "Angular", years: 4 },
	{ name: "Ionic", years: 4 },
	{ name: "JSF", years: 7 },
	{ name: "Hibernate", years: 7 },
	{ name: "PostgreSQL", years: 3 },
	{ name: "JBoss Seam", years: 3 },
	{ name: "C#", years: 2 },
	{ name: "ASP.NET MVC", years: 2 },
	{ name: "Entity Framework", years: 2 },
	{ name: "SQL Server", years: 2 },
];
