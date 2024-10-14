import type { LanguageType } from '../types/languageType';

/**
 * Determine whether the passed-in value is an *Array object*.
 * https://tc39.es/ecma262/#sec-isarray
 * @param it The value to be checked.
 * @returns `it` is an *Array object*.
 */
export const isArray = (it: LanguageType): it is LanguageType[] => {
	if (!Array.isArray) {
		return Object.prototype.toString.call(it) === '[object Array]';
	}
	return Array.isArray(it);
};
