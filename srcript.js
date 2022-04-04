function verificar(){
    
    var ano = new Date()
    var ano2 = ano.getFullYear()
    var fano = document.getElementById('txtano')
    var res = window.document.getElementById('res')
    
    if(fano.value.length == 0 || fano.value.length > ano2){
        window.alert('[ERROR] Verifique os dados novamente')

    } else{
        var fsexo = document.getElementsByName('sexo')
        var idade = ano2 - Number(fano.value)
        var genero = fsexo[0].checked ? 'Masculino':'Femenino' // utilizando os operadores
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        res.innerHTML = `Seu sexo é ${genero} e sua idade é de  ${idade} ano`
    } if(genero == "Masculino"){
        if(idade >= 0 && idade <= 10){
            imagem.setAttribute('src', 'img/criancaM.png')
        } else if(idade >10 && idade <= 18){
            imagem.setAttribute('src', 'img/jovemM.png')
        }
        
        else{
            imagem.setAttribute('src', 'img/idoso.png')
        }
    } else if( genero == "Femenino"){
        if(idade >= 0 && idade <= 10){
            imagem.setAttribute('src', 'img/criancaF.png')
        } else if(idade >10 && idade <= 18){
            imagem.setAttribute('src', 'img/jovemF.png')
        }
        
        else{
            imagem.setAttribute('src', 'img/idosa.png')
        }
    }

    res.appendChild(imagem)
}
