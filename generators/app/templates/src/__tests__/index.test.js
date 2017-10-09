import defaultExport from 'src/index';

describe('Entry file', () => {
  test('Default', () => {
    defaultExport();
    expect(true).toBe(true);
  });
});
