import humanizeNumber from './humanizeNumber';

describe('Test: humanizeNumber()', () => {
  test('1000 should humanize', () => {
    const num = 1000;
    const result = humanizeNumber(num);
    expect(result).toBe('1k');
  });

  test("'100' should not humanize", () => {
    const num = '100';
    const result = humanizeNumber(num);
    expect(result).toBe('100');
  });

  test('1234 should humanize', () => {
    const num = 1234;
    const result = humanizeNumber(num);
    expect(result).toBe('1.2k');
  });
});
