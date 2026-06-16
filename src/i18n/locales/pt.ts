import {
	RESUME_FILES,
	SKILL_TAGS_CORE,
	SKILL_TAGS_EARLIER,
} from "@/i18n/config";
import type { Translations } from "@/i18n/types";

export const pt: Translations = {
	nav: {
		about: "Sobre",
		background: "Experiência",
		skills: "Habilidades",
		projects: "Projetos",
	},
	hero: {
		greeting: "Olá, eu sou",
		name: "Geldo Pina Costa",
		role: "Engenheiro Full-Stack Sênior · Engenheiro de IA",
		tagline:
			"15 anos transformando problemas complexos em produtos simples e confiáveis. Construo plataformas web ponta a ponta — de frontends React refinados a backends escaláveis — e aplico IA para entregar soluções mais inteligentes e rápidas. Filosofia: faça simples e certo.",
	},
	about: {
		title: "Sobre",
		lead: "Hoje lidero a engenharia de um checkout omnichannel que move 500+ lojas de varejo no Brasil — um sistema onde confiabilidade e performance não são negociáveis.",
		bio: "Em Varejo, Finanças, Governo e Agronegócio, arquitetei soluções full-stack, construí bibliotecas de componentes, mentorei engenheiros e trabalhei junto ao design para entregar experiências que as pessoas gostam de usar. Recentemente venho unindo essa base à engenharia de IA — integrando LLMs e ferramentas inteligentes em produtos reais. Avanço rápido sem quebrar a confiança, e me importo tanto com arquitetura limpa quanto com as pessoas que a constroem.",
	},
	skills: {
		title: "Habilidades",
		subtitle: "Cada ferramenta com que já entreguei — e há quanto tempo.",
		unit: "anos",
		currentLabel: "Atual",
		coreLabel: "Stack principal",
		earlierLabel: "Experiência anterior",
		core: SKILL_TAGS_CORE,
		earlier: SKILL_TAGS_EARLIER,
	},
	projects: {
		title: "Projetos",
		subtitle: "Coisas que construo pelo prazer de construir.",
		empty: "Projetos em destaque em breve",
		liveCta: "Ver demo",
		sourceCta: "Código",
		descriptions: {
			"xml-formatter":
				"Um formatador de XML em tela cheia — identa, minifica e inspeciona XML com realce de sintaxe ao vivo, arrastar-e-soltar e URLs compartilháveis comprimidas. Tudo no cliente, sem backend.",
			"json-formatter":
				"Um formatador de JSON em tela cheia — identa, minifica e valida JSON com realce de sintaxe ao vivo e feedback de erro instantâneo. Tudo no cliente, sem backend.",
		},
	},
	resume: {
		cta: "Baixar CV",
		files: RESUME_FILES,
	},
	contact: {
		title: "Entre em Contato",
		description:
			"Estou aberto a novas oportunidades e colaborações — fique à vontade para falar comigo por qualquer canal.",
		email: "Email",
		linkedin: "LinkedIn",
		github: "GitHub",
	},
	footer: {
		copyright: "© 2026 Geldo Pina Costa. Todos os direitos reservados.",
	},
};
