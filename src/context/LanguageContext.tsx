import type { ReactNode } from "react";
import { createContext, useState } from "react";

export type Language = "en" | "pt";

type Translations = {
	nav: {
		about: string;
		projects: string;
		background: string;
		skills: string;
		resume: string;
	};
	hero: {
		title: string;
		subtitle: string;
		description: string;
	};
	about: {
		title: string;
		intro: string;
		bio: string;
	};
	projects: {
		title: string;
		empty: string;
	};
	skills: {
		title: string;
		frontend: string;
		tools: string;
	};
	footer: {
		copyright: string;
	};
};

type TranslationGetter = {
	nav: Translations["nav"];
	hero: Translations["hero"];
	about: Translations["about"];
	projects: Translations["projects"];
	skills: Translations["skills"];
	footer: Translations["footer"];
};

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	strings: TranslationGetter;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

const translations: Record<Language, Translations> = {
	en: {
		nav: {
			about: "About",
			projects: "Projects",
			background: "Background",
			skills: "Skills",
			resume: "Resume",
		},
		hero: {
			title: "Geldo Pina Costa",
			subtitle: "Full Stack Engineer",
			description:
				"Hey, my name is Geldo Pina, also known as @geldopc online. I'm a Full Stack Developer recognized for delivering 'state of the art' solutions through creativity, refined taste, and a minimalist approach. Deeply inspired by the energy of Rock and Rap, I keep a low profile on social media, focusing my energy on what I love most: taking outdated, cluttered systems and transforming them into beautiful, seamless experiences. I'm always curious to push the boundaries of new technologies and creative coding. With over 15 years of experience in the field, I bring deep expertise and innovation to every project.",
		},
		about: {
			title: "About",
			intro:
				"Senior Software Engineer with 15+ years of experience. Currently leading the development of omnichannel checkout systems at Riachuelo, impacting 500+ retail stores across Brazil.",
			bio: "I architect and develop full-stack solutions with a focus on code quality, scalability, and innovation. Experienced in building component libraries, leading technical teams, and collaborating with design to deliver outstanding user experiences. Proactive problem-solver passionate about mentoring developers and driving technical excellence.",
		},
		projects: {
			title: "Projects",
			empty: "Featured projects coming soon",
		},
		skills: {
			title: "Skills",
			frontend: "Frontend",
			tools: "Tools & Practices",
		},
		footer: {
			copyright: "© 2026 Geldo Pina Costa. All rights reserved.",
		},
	},
	pt: {
		nav: {
			about: "Sobre",
			projects: "Projetos",
			background: "Experiência",
			skills: "Habilidades",
			resume: "Currículo",
		},
		hero: {
			title: "Geldo Pina Costa",
			subtitle: "Engenheiro Full Stack",
			description:
				"Olá, o meu nome é Geldo Pina, também conhecido como @geldopc. Sou um Desenvolvedor Full Stack reconhecido por entregar soluções 'estado da arte' através de criatividade, bom gosto e uma abordagem minimalista. Profundamente inspirado pela energia do Rock e Rap, mantenho um perfil discreto nas redes sociais, focando a minha energia no que mais amo: pegar em sistemas feios e obsoletos e transformá-los em experiências belas e fluidas. Sou movido pela curiosidade de explorar novas tecnologias e programação criativa. Com mais de 15 anos de experiência na área, trago expertise profunda e inovação para cada projeto.",
		},
		about: {
			title: "Sobre",
			intro:
				"Engenheiro de Software Sênior com 15+ anos de experiência. Atualmente liderando o desenvolvimento de sistemas de checkout omnichannel na Riachuelo, impactando 500+ lojas de varejo em todo o Brasil.",
			bio: "Arquiteto e desenvolvo soluções full-stack com foco em qualidade de código, escalabilidade e inovação. Experiente em construção de bibliotecas de componentes, liderança de equipes técnicas e colaboração com design para entregar experiências excepcionais. Proativo na resolução de problemas e apaixonado por mentoria de desenvolvedores e excelência técnica.",
		},
		projects: {
			title: "Projetos",
			empty: "Projetos em destaque em breve",
		},
		skills: {
			title: "Habilidades",
			frontend: "Frontend",
			tools: "Ferramentas & Práticas",
		},
		footer: {
			copyright: "© 2026 Geldo Pina Costa. Todos os direitos reservados.",
		},
	},
};

interface LanguageProviderProps {
	children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
	const [language, setLanguage] = useState<Language>("pt");

	const strings: TranslationGetter = {
		nav: translations[language].nav,
		hero: translations[language].hero,
		about: translations[language].about,
		projects: translations[language].projects,
		skills: translations[language].skills,
		footer: translations[language].footer,
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, strings }}>
			{children}
		</LanguageContext.Provider>
	);
}
