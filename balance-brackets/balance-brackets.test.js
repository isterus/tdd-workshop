const balanceBrackets = require('./balance-brackets');

test('[] is balanced', () => {
  expect(balanceBrackets('[]')).toBeTruthy();
});

test('() is balanced', () => {
  expect(balanceBrackets('()')).toBeTruthy();
});
