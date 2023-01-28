function carregar() {
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var hora = new Date()

    var horario = 'Agora são: ' + corrigirHorario(hora.getHours()) + ' hora(s), ' + corrigirHorario(hora.getMinutes()) + ' minuto(s) e ' + corrigirHorario(hora.getSeconds()) + ' segundo(s)!'

    msg.textContent = horario

    if (hora.getHours() >= 0 && hora.getHours() < 12) {
        day.innerHTML = 'Bom dia!'
        img.src = 'manha.png'
        document.body.style.background = '#F3A68C'
    } else if (hora.getHours() >= 12 && hora.getHours() < 18) {
        day.innerHTML = 'Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#FD9F4E'
    } else {
        day.innerHTML= 'Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = '#100E0F'
    }
}

function corrigirHorario(numero) {
    if (numero < 10) {
        numero = '0' + numero
    }
    return numero
}

setInterval(carregar, 1000);
