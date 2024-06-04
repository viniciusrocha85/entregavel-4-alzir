const calcularFibonacci = require('../codigos/fibonacci');

test('calcularFibonacci retorna a sequência correta para um número dado', () => {
  expect(calcularFibonacci(0)).toEqual([]);
  expect(calcularFibonacci(1)).toEqual([0]);
  expect(calcularFibonacci(2)).toEqual([0, 1]);
  expect(calcularFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
});

test('os 10 primeiros números da contagem de fibonacci devem ser os corretos', () => {
  expect(calcularFibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('Os 2 primeiros números da contagem de fibonacci devem ser, respectivamente, 0 e 1', () => {
    expect(calcularFibonacci(2)).toMatchObject([0, 1]);
});
