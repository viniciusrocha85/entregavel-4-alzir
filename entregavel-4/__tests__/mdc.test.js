const { calcularMDCNumeros } = require('../codigos/mdc');

describe("calcularMDCNumeros", () => {
  it("deve calcular o MDC corretamente", () => {
    expect(calcularMDCNumeros(12, 18)).toEqual(6);
    expect(calcularMDCNumeros(36, 48)).toEqual(12);
    expect(calcularMDCNumeros(17, 23)).toEqual(1);
  });

  it("deve retornar 0 se um dos números for 0", () => {
    expect(calcularMDCNumeros(0, 5)).toEqual(5);
    expect(calcularMDCNumeros(10, 0)).toEqual(10);
    expect(calcularMDCNumeros(0, 0)).toEqual(0);
  });
});
