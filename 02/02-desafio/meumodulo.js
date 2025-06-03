module.exports = {
    Soma(a, b) {
        return console.log(`A soma de ${a} e ${b} é igual a ${a + b}`);
    },
    Subtracao(a, b) {
        return console.log(`A subtração de ${a} e ${b} é igual a ${a - b}`);
    },
    Multi(a, b) {
        return console.log(`A multiplicação de ${a} e ${b} é igual a ${a * b}`);
    },
    Divisao(a, b) {
        if (b === 0) {
            return console.log("Erro: Divisão por zero.");
        }
        return console.log(`A divisão de ${a} por ${b} é igual a ${a / b}`);
    }
}