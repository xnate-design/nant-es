import { describe, expect, it } from 'vitest';
import { isArray } from './isArray';

describe('function isArray', () => {
	describe('Right cases', () => {
		it('param array', () => {
			expect(isArray([])).toBe(true);
		});
	});

	describe('Wrong cases', () => {
		it('param object', () => {
			expect(isArray({})).toBe(false);
		});

		it('param string', () => {
			expect(isArray('')).toBe(false);
		});

		it('param number', () => {
			expect(isArray(0)).toBe(false);
		});

		it('param boolean', () => {
			expect(isArray(true)).toBe(false);
		});

		it('param null', () => {
			expect(isArray(null)).toBe(false);
		});

		it('param undefined', () => {
			expect(isArray(undefined)).toBe(false);
		});

		it('param function', () => {
			expect(isArray(() => null)).toBe(false);
		});
	});

	describe('throw cases', () => {
		it('param null', () => {
			expect(() => isArray(null)).toThrowError('undefined');
		});
		it('param undefined', () => {
			expect(() => isArray(undefined)).toThrowError('call');
		});
	});
});
