function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var genero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
             genero = 'Homem'
             if (idade >= 0 && idade < 2) {
                //bebe
                img.setAttribute('src', 'bebe-m.jpg')
             } else if (idade < 18) {
                //criança
                img.setAttribute('src', 'menino.jpg')
             } else if (idade > 18 && idade < 61) {
                 //adulto
                 img.setAttribute('src', 'homem.jpg')
             } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
             }
         } else if (fsex[1].checked) {
             genero = 'Mulher'
             if (idade >= 0 && idade < 2) {
                //bebe
                img.setAttribute('src', 'bebe-f.jpg')
             } else if (idade < 18) {
                //criança
                img.setAttribute('src', 'menina.jpg')
             } else if (idade > 18 && idade < 61) {
                 //adulto
                 img.setAttribute('src', 'mulher.jpg')
             } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
             }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
