import {
	RESUME_FILES,
	SKILL_TAGS_CORE,
	SKILL_TAGS_EARLIER,
} from "@/i18n/config";
import type { Translations } from "@/i18n/types";

export const fr: Translations = {
	nav: {
		about: "À propos",
		background: "Parcours",
		skills: "Compétences",
		projects: "Projets",
	},
	hero: {
		greeting: "Bonjour, je suis",
		name: "Geldo Pina Costa",
		role: "Ingénieur Full-Stack Senior · Ingénieur IA",
		tagline:
			"15 ans à transformer des problèmes complexes en produits simples et fiables. Je conçois des plateformes web de bout en bout — des frontends React soignés aux backends évolutifs — et j'applique l'IA pour livrer des solutions plus intelligentes et plus rapides. Philosophie : faire simple et juste.",
	},
	about: {
		title: "À propos",
		lead: "Je dirige aujourd'hui l'ingénierie d'un checkout omnicanal qui alimente plus de 500 magasins de détail au Brésil — un système où la fiabilité et la performance ne sont pas négociables.",
		bio: "Dans le commerce de détail, la finance, le secteur public et l'agro-industrie, j'ai conçu des solutions full-stack, créé des bibliothèques de composants, encadré des ingénieurs et collaboré avec le design pour livrer des expériences que les gens aiment utiliser. Récemment, j'ai associé ces bases à l'ingénierie de l'IA — en intégrant des LLM et des outils intelligents dans de vrais produits. J'avance vite sans rompre la confiance, et je tiens autant à une architecture propre qu'aux personnes qui la construisent.",
	},
	skills: {
		title: "Compétences",
		subtitle:
			"Chaque outil avec lequel j'ai livré — et depuis combien de temps.",
		unit: "ans",
		currentLabel: "Actuel",
		coreLabel: "Stack principale",
		earlierLabel: "Expérience antérieure",
		core: SKILL_TAGS_CORE,
		earlier: SKILL_TAGS_EARLIER,
	},
	projects: {
		title: "Projets",
		empty: "Projets en vedette bientôt disponibles",
	},
	resume: {
		cta: "Télécharger le CV",
		files: RESUME_FILES,
	},
	contact: {
		title: "Me contacter",
		description:
			"Je suis ouvert aux nouvelles opportunités et collaborations — n'hésitez pas à me contacter par n'importe quel canal.",
		email: "E-mail",
		linkedin: "LinkedIn",
		github: "GitHub",
	},
	footer: {
		copyright: "© 2026 Geldo Pina Costa. Tous droits réservés.",
	},
};
