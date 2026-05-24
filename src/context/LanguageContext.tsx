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
	contact: {
		title: string;
		description: string;
		email: string;
		linkedin: string;
		github: string;
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
	contact: Translations["contact"];
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
			title: "Hi there, I'm Geldo Pina Costa! 👋",
			subtitle: "🚀 Senior Software Engineer | Full-Stack Developer",
			description:
				"I am a Senior Software Engineer with 15 years of experience building scalable, high-performance applications across critical sectors such as Retail, Finance, Government, and Agribusiness. My engineering philosophy is straightforward: \"Make it simple and right\". I thrive on solving complex architectural problems and delivering solutions that drive real business value.",
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
		contact: {
			title: "Get in Touch",
			description:
				"Feel free to reach out to me through any of these channels. I'm always interested in new opportunities and collaborations.",
			email: "Email",
			linkedin: "LinkedIn",
			github: "GitHub",
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
			title: "Olá, eu sou Geldo Pina Costa! 👋",
			subtitle: "🚀 Engenheiro de Software Sênior | Desenvolvedor Full-Stack",
			description:
				"Sou um Engenheiro de Software Sênior com 15 anos de experiência na construção de aplicações escaláveis e de alta performance em setores críticos como Varejo, Finanças, Governo e Agronegócio. Minha filosofia de engenharia é direta: \"Faça simples e certo\". Gosto de resolver problemas arquitetônicos complexos e entregar soluções que gerem valor real para o negócio.",
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
		contact: {
			title: "Entre em Contato",
			description:
				"Sinta-se à vontade para entrar em contato comigo através de qualquer um desses canais. Estou sempre interessado em novas oportunidades e colaborações.",
			email: "Email",
			linkedin: "LinkedIn",
			github: "GitHub",
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
		contact: translations[language].contact,
		footer: translations[language].footer,
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, strings }}>
			{children}
		</LanguageContext.Provider>
	);
}
