
// var res = document.querySelector('div')

function Clicar() {

    let NumberStart = document.querySelector('#number-start')
    let NumberEnd = document.querySelector('#number-end')
    let NumberIndex = document.querySelector('#number-index')
    let res = document.getElementById('res')


    if (NumberStart.value.length == 0 || NumberEnd.value.length == 0 || NumberIndex.value.length == 0) {
        alert(`[ERRO!] Os dados estão incompletos!`)
    } else { 

        var index = Number((NumberStart).value)
        var fim = Number((NumberEnd).value)
        var passo = Number((NumberIndex).value)

        res.innerHTML = `Contando: `


        if (index > fim) {
            // CONTAGEM PROGESSIVA
            for ( index; index <= fim; index += passo)
        {

            res.innerHTML += ` \u{1F962} ${index}`
        }}

        else {
            // CONTAGEM REGRESSIVA
            for ( index; index <= fim; index += passo)
        {

            res.innerHTML += ` \u{1F962} ${index}`
        }
        }
    }
}
