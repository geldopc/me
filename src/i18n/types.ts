export interface SkillTag {
	name: string;
	years?: number;
	plus?: boolean;
	current?: boolean;
}

export interface ResumeFile {
	code: string;
	label: string;
	file: string;
}

export interface Project {
	id: string;
	name: string;
	url: string;
	repo?: string;
	tech: string[];
}

export interface Translations {
	nav: {
		about: string;
		background: string;
		skills: string;
		projects: string;
	};
	hero: {
		greeting: string;
		name: string;
		role: string;
		tagline: string;
	};
	about: {
		title: string;
		lead: string;
		bio: string;
	};
	skills: {
		title: string;
		subtitle: string;
		unit: string;
		currentLabel: string;
		coreLabel: string;
		earlierLabel: string;
		core: SkillTag[];
		earlier: SkillTag[];
	};
	projects: {
		title: string;
		subtitle: string;
		empty: string;
		liveCta: string;
		sourceCta: string;
		descriptions: Record<string, string>;
	};
	resume: {
		cta: string;
		files: ResumeFile[];
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
}
