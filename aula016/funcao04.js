function fatorial(n) {

    // O fatorial de um número é calculado pela multiplicação desse número por todos os seus antecessores até chegar ao número 1

    // 5!  5x4x3x2x1
    res = ``
    var fatorando = n-1

    for (fator = n; fatorando > 0 ; fatorando--) {
        fator*=fatorando
    }
    console.log(`${fator}`)
}
fatorial(5)