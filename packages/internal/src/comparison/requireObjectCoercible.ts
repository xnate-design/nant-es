import type { LanguageType } from '../types/languageType';
import { isNullOrUndefined } from './isNullOrUndefined';

// https://tc39.es/ecma262/#sec-requireobjectcoercible
export function requireObjectCoercible(it: LanguageType) {
	if (isNullOrUndefined(it))
		throw new TypeError(`Cannot call method on ${it?.toString()}`);
	return it;
}
