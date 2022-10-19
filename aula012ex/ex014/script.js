function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')

var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()



if (hora >= 0 && hora < 12) {
    msg.innerHTML = (`Agora são ${hora}:${min} da manhã`)
    foto.src = 'img/fotomanha.png'
    document.body.style.background = '#ffffe1'

} else if(hora < 18 && hora >= 12){
    msg.innerHTML = (`Agora são ${hora}:${min} da tarde`)
    foto.src = 'img/fototarde.png'
    document.body.style.background = '#f99d54'
} else {
    msg.innerHTML = (`Agora são ${hora}:${min} da noite`)
    foto.src = 'img/fotonoite.png'
    documento.body.style.background = '#101f26'


}

}

