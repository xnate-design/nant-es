import { requireObjectCoercible } from '../comparison/index';
import type { LanguageType } from '../types/languageType';

// https://tc39.es/ecma262/#sec-toobject
export function toObject(it: LanguageType) {
	return Object(requireObjectCoercible(it));
}
