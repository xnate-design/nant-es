import { describe, expect, it } from 'vitest';
import { requireObjectCoercible } from './requireObjectCoercible';


describe('function requireObjectCoercible', () => {
  describe('throw cases', () => {
    it('param null', () => {
      expect(() => requireObjectCoercible(null)).toThrowError('undefined');
    });
    it('param undefined', () => {
      expect(() => requireObjectCoercible(undefined)).toThrowError('call');
    });
  });

  describe('Wrong cases', () => {
    it('param object', () => {
      const obj = {}
      expect(requireObjectCoercible(obj)).toBe(obj);
    });

    it('param string', () => {
      expect(requireObjectCoercible('')).toBe('');
    });

    it('param number', () => {
      expect(requireObjectCoercible(0)).toBe(0);
    });

    it('param boolean', () => {
      expect(requireObjectCoercible(true)).toBe(true);
    });

    it('param bigint', () => {
      expect(requireObjectCoercible(BigInt(0))).toBe(BigInt(0));
    });

    it('param symbol', () => {
      const symbol = Symbol('symbol')
      expect(requireObjectCoercible(symbol)).toBe(symbol);
    });
  });
})