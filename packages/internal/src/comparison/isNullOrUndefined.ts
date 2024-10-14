import type { LanguageType } from '../types/languageType';

export function isNullOrUndefined(it: LanguageType) {
	return it === null || it === undefined;
}
