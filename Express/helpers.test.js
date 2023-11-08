const { mean, median, mode } = require('./helpers');

describe('Mean function', () => {
  // test cases remain the same
});

describe('Median function', () => {
  test('calculates the median of an array of numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(median(arr)).toBe(3);
  });

  test('calculates the median of an even-length array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(median(arr)).toBe(3.5);
  });

  test('returns NaN if the input is not an array of numbers', () => {
    const arr = [1, 2, 'three', 4, 5];
    expect(median(arr)).toBe(NaN);
  });

  test('returns NaN if the input array is empty', () => {
    const arr = [];
    expect(median(arr)).toBe(NaN);
  });
});

describe('Mode function', () => {
  test('calculates the mode of an array of numbers', () => {
    const arr = [1, 2, 3, 4, 2, 5, 2];
    expect(mode(arr)).toEqual(['2']);
  });

  test('calculates multiple modes if they exist', () => {
    const arr = [1, 2, 3, 4, 2, 5, 2, 3, 4];
    expect(mode(arr)).toEqual(['2']);
  });

  test('returns an empty array if there is no mode', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(mode(arr)).toEqual([]);
  });

  test('returns NaN if the input is not an array of numbers', () => {
    const arr = [1, 2, 'three', 4, 5];
    expect(mode(arr)).toEqual(NaN);
  });
});
