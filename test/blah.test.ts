import freeGC from '../src';

describe('freeGC', () => {
  it('freeGC', () => {
    expect(() => freeGC()).not.toThrow();
  });
});
