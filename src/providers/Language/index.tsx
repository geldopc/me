import type { ReactNode } from "react";
import { createContext, useCallback, useState } from "react";
import {
	DEFAULT_LANGUAGE,
	LANGUAGES,
	type Language,
	type Translations,
	translations,
} from "@/i18n";

export type { Language, ResumeFile, SkillTag, Translations } from "@/i18n";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	cycleLanguage: () => void;
	languages: typeof LANGUAGES;
	strings: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

interface LanguageProviderProps {
	children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
	const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);

	const cycleLanguage = useCallback(() => {
		setLanguage((current) => {
			const index = LANGUAGES.findIndex((item) => item.code === current);
			return LANGUAGES[(index + 1) % LANGUAGES.length].code;
		});
	}, []);

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage,
				cycleLanguage,
				languages: LANGUAGES,
				strings: translations[language],
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
}
