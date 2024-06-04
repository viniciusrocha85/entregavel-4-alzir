const { ordenarArray } = require('../codigos/quicksort');

describe("ordenarArray", () => {
    it("deve retornar um array ordenado", () => {
      expect(ordenarArray("1,4,9,2,6,5,3")).toEqual([1, 2, 3, 4, 5, 6, 9]);
    });
  
    it("deve retornar uma mensagem de erro para entrada inválida", () => {
      expect(ordenarArray("3,1,4,abc,5")).toEqual("Por favor, insira apenas números válidos.");
    });
  });
  
