function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var year = document.getElementById('textano')
    var res = document.getElementById('res')

    if (year.value.length == 0 || year.value > ano ){

        window.alert('Error, informe os campos corretamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(year.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade <=10){
                //criança
                img.setAttribute('src','foto-bebe-m.png')

            }else if(idade >10 && idade <=18){
                //adolescente
                img.setAttribute('src','foto-jovem-m.png')

            }else if(idade >18 && idade < 30){
                //jovem
                img.setAttribute('src','foto-jovem-m.png')

            }else if(idade >=30 && idade < 60){
                //adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src','foto-idoso-m.png')

            }
        }else{
            gênero = 'Mulher'
            if(idade >=0 && idade <=10){
                //criança
                img.setAttribute('src','foto-bebe-f.png')

            }else if(idade >10 && idade <=18){
                //adolescente

            }else if(idade >18 && idade < 30){
                //jovem

            }else if(idade >=30 && idade < 60){
                //adulto

            }else{
                //idoso

            }
        } 
        

        res.style.textAlign ='center'
        res.innerHTML = 'Dectectamos '+(gênero)+' com idade Calculada de ' +(idade) //Frase na caixa
        res.appendChild(img) // imagem na caixa
     
    }

    

}