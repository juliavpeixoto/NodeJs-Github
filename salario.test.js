const salario = require('./salario');

test('Salário Líquido para folha de pagamento', () => {
  expect(salario(3000, 250)).toBe(2750);
});