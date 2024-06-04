function exibirNumerosInteiros(min, max) {
    const inicio = min <= max ? min : max;
    const fim = min <= max ? max : min;

    let numerosString = '';

    for (let i = inicio; i <= fim; i++) {
        if (numerosString !== '') {
            numerosString += ', ';
        }
        numerosString += i;
    }

    return {
        numeros: numerosString,
        total: fim - inicio + 1
    };
}

module.exports = { exibirNumerosInteiros };
