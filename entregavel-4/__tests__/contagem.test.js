const { exibirNumerosInteiros } = require('../codigos/contagem');

describe("exibirNumerosInteiros", () => {
  it("deve retornar a sequência de números inteiros corretamente", () => {
    const resultado = exibirNumerosInteiros(1, 5);
    expect(resultado.numeros).toEqual("1, 2, 3, 4, 5");
    expect(resultado.total).toEqual(5);
  });

  it("deve inverter min e max se min > max", () => {
    const resultado = exibirNumerosInteiros(5, 1);
    expect(resultado.numeros).toEqual("1, 2, 3, 4, 5");
    expect(resultado.total).toEqual(5);
  });
});
