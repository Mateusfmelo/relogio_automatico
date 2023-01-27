function carregar() {
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        day.innerHTML = 'Bom dia!'
        img.src = 'manha.png'
        document.body.style.background = '#F3A68C'
    } else if (hora >= 12 && hora <= 18) {
        day.innerHTML = 'Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#FD9F4E'
    } else {
        day.innerHTML= 'Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = '#100E0F'
    }
}
