import { describe, expect, it } from 'vitest';
import { isCallable } from './isCallable';

describe('function isCallable', () => {
	describe('Right cases', () => {
		it('param function', () => {
			expect(isCallable(() => null)).toBe(true);
		});
		it('param document', () => {
			expect(isCallable(document)).toBe(false);
		});
	});

	describe('Wrong cases', () => {
		it('param object', () => {
			expect(isCallable({})).toBe(false);
		});

		it('param string', () => {
			expect(isCallable('')).toBe(false);
		});

		it('param number', () => {
			expect(isCallable(0)).toBe(false);
		});

		it('param boolean', () => {
			expect(isCallable(true)).toBe(false);
		});

		it('param bigint', () => {
			expect(isCallable(0n)).toBe(false);
		});

		it('param symbol', () => {
			expect(isCallable(Symbol())).toBe(false);
		});
	});

	describe('Boundary cases', () => {
		it('param null', () => {
			expect(isCallable(null)).toBe(false);
		});

		it('param undefined', () => {
			expect(isCallable(undefined)).toBe(false);
		});
	});
});
