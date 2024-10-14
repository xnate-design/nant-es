import { describe, expect, it } from 'vitest';
import { isNullOrUndefined } from './isNullOrUndefined';

describe('function isNullOrUndefined', () => {
	describe('Right cases', () => {
		it('param null', () => {
			expect(isNullOrUndefined(null)).toBe(true);
		});
		it('param undefined', () => {
			expect(isNullOrUndefined(undefined)).toBe(true);
		});
	});

	describe('Wrong cases', () => {
		it('param object', () => {
			expect(isNullOrUndefined({})).toBe(false);
		});

		it('param string', () => {
			expect(isNullOrUndefined('')).toBe(false);
		});

		it('param number', () => {
			expect(isNullOrUndefined(0)).toBe(false);
		});

		it('param boolean', () => {
			expect(isNullOrUndefined(true)).toBe(false);
		});

		it('param function', () => {
			expect(isNullOrUndefined(Symbol('0'))).toBe(false);
		});

		it('param bigint', () => {
			expect(isNullOrUndefined(BigInt(0))).toBe(false);
		});
	});
});
