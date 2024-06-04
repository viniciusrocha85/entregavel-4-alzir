function somarNumeros(input) {
    var numeros = input.split(",");
    var soma = 0;
    
    for (var i = 0; i < numeros.length; i++) {
      var numero = parseFloat(numeros[i]);
      
      if (!isNaN(numero)) {
        soma += numero;
      }
    }
    
    return soma;
  }
  
  module.exports = { somarNumeros };
  