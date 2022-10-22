function Tabuada()
{
    var numero = $('#text-number').val()
    var tabela = document.querySelector('#seltab')

    tabela.innerHTML = ""

    

    if ( numero.length == 0)

    {
        alert(`[ERRO!] A área de texto está em branco!`)
    }
    
    else
    {
        var mult = "1" 

        for (numero; mult <= 10; mult++) {
            result = +numero*mult

            tabela.innerHTML += (`<option value="${result}">
            ${numero} x ${mult} = ${result}</option>`)
            
        }
    }
}