import {
	RESUME_FILES,
	SKILL_TAGS_CORE,
	SKILL_TAGS_EARLIER,
} from "@/i18n/config";
import type { Translations } from "@/i18n/types";

export const en: Translations = {
	nav: {
		about: "About",
		background: "Background",
		skills: "Skills",
		projects: "Projects",
	},
	hero: {
		greeting: "Hi, I'm",
		name: "Geldo Pina Costa",
		role: "Senior Full-Stack Engineer · AI Engineer",
		tagline:
			"15 years turning complex problems into simple, reliable products. I build end-to-end web platforms — from polished React frontends to scalable backends — and apply AI to ship smarter, faster solutions. Philosophy: make it simple and right.",
	},
	about: {
		title: "About",
		lead: "I currently lead the engineering of an omnichannel checkout that powers 500+ retail stores across Brazil — a system where reliability and performance are non-negotiable.",
		bio: "Across Retail, Finance, Government and Agribusiness, I've architected full-stack solutions, built component libraries, mentored engineers and partnered with design to ship experiences people enjoy using. Lately I've been pairing that foundation with AI engineering — integrating LLMs and intelligent tooling into real products. I move fast without breaking trust, and I care as much about clean architecture as about the people building it.",
	},
	skills: {
		title: "Skills",
		subtitle: "Every tool I've shipped with — and how long.",
		unit: "yrs",
		currentLabel: "Now",
		coreLabel: "Core stack",
		earlierLabel: "Earlier experience",
		core: SKILL_TAGS_CORE,
		earlier: SKILL_TAGS_EARLIER,
	},
	projects: {
		title: "Projects",
		subtitle: "Things I build for the craft of it.",
		empty: "Featured projects coming soon",
		liveCta: "Live demo",
		sourceCta: "Source",
		descriptions: {
			"xml-formatter":
				"A full-screen XML formatter — prettify, minify and inspect XML with live syntax highlighting, drag-and-drop and shareable compressed URLs. Fully client-side, no backend.",
			"json-formatter":
				"A full-screen JSON formatter — prettify, minify and validate JSON with live syntax highlighting and instant error feedback. Fully client-side, no backend.",
		},
	},
	resume: {
		cta: "Download CV",
		files: RESUME_FILES,
	},
	contact: {
		title: "Get in Touch",
		description:
			"I'm open to new opportunities and collaborations — feel free to reach out through any channel.",
		email: "Email",
		linkedin: "LinkedIn",
		github: "GitHub",
	},
	footer: {
		copyright: "© 2026 Geldo Pina Costa. All rights reserved.",
	},
};
