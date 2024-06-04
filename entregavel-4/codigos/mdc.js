function calcularMDC(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function calcularMDCNumeros(numero1, numero2) {
    return calcularMDC(numero1, numero2);
}

module.exports = { calcularMDCNumeros };
