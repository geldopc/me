import type { Language } from "@/i18n/config";
import { en } from "@/i18n/locales/en";
import { fr } from "@/i18n/locales/fr";
import { pt } from "@/i18n/locales/pt";
import type { Translations } from "@/i18n/types";

export const translations: Record<Language, Translations> = { pt, en, fr };

export type { Language } from "@/i18n/config";
export { DEFAULT_LANGUAGE, LANGUAGES, RESUME_FILES } from "@/i18n/config";
export type { ResumeFile, SkillTag, Translations } from "@/i18n/types";
