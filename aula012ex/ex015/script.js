function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')

        

    } else{
        var sexo = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 8) {
                //criamsa
                img.setAttribute('src', 'foto-bebe-m.png')

            }else if(idade < 21){
                //jovi
                img.setAttribute('src', 'foto-jovem-m.png')
 
            }else if(idade < 51){
                //adulte
                img.setAttribute('src', 'foto-adulto-m.png')

            }else if(idade > 51){
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

            }
        else if(sexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 8) {
                //criamsa
                img.setAttribute('src', 'foto-bebe-f.png')

            }else if(idade < 21){
                //jovi
                img.setAttribute('src', 'foto-jovem-f.png')
 
            }else if(idade < 51){
                //adulte
                img.setAttribute('src', 'foto-adulto-f.png')

            }else if(idade > 51){
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectectamos ${genero} com ${idade} anos<br>`
        res.appendChild(img)
}