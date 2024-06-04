const { somarNumeros } = require('../codigos/somatorio');

describe("somarNumeros", () => {
  it("deve retornar a soma dos números separados por vírgula", () => {
    expect(somarNumeros("1,2,3,4,5")).toEqual(15);
    expect(somarNumeros("10,20,30,40,50")).toEqual(150);
  });

  it("deve lidar corretamente com números inválidos", () => {
    expect(somarNumeros("1,2,3,abc,5")).toEqual(11);
    expect(somarNumeros("10,20,30,,50")).toEqual(110);
  });

  it("deve retornar 0 se não houver números válidos", () => {
    expect(somarNumeros("")).toEqual(0);
    expect(somarNumeros("abc")).toEqual(0);
  });
});
