
import { expect, it, describe } from 'vitest';
import { isCallable } from './isCallable';

describe('isCallable', () => {
  it('isCallable', () => {
    expect(isCallable(() => null)).toBe(true);
    expect(isCallable(null)).toBe(false);
  });
})