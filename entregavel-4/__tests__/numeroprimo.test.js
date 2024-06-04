const { isPrimo } = require('../codigos/numeroprimo');

describe("isPrimo", () => {
  it("deve retornar true se o número for primo", () => {
    expect(isPrimo(2)).toEqual(true);
    expect(isPrimo(3)).toEqual(true);
    expect(isPrimo(5)).toEqual(true);
    expect(isPrimo(7)).toEqual(true);
  });

  it("deve retornar false se o número não for primo", () => {
    expect(isPrimo(0)).toEqual(false);
    expect(isPrimo(1)).toEqual(false);
    expect(isPrimo(4)).toEqual(false);
    expect(isPrimo(9)).toEqual(false);
  });

  it("deve retornar false para números negativos", () => {
    expect(isPrimo(-2)).toEqual(false);
    expect(isPrimo(-3)).toEqual(false);
    expect(isPrimo(-5)).toEqual(false);
    expect(isPrimo(-7)).toEqual(false);
  });
});
