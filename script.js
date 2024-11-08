function information(informationPersonal){ 
    prompt('Vamos conhecer mais sobre mim?')
    confirm('sim/não')
}
let menu = ''
do{
menu = prompt(`opção disponível
    1- saber sobre meus gostos.
    2- saber sobre informações sobre minha pessoa.
    3- sair`)
    switch(menu){
        case'1': 
      alert('`Eu gosto de assistir filmes e séries, gosto de jogar de handbol, tenho muitas comidas preferidas, pizza, lasanha, açaí, purê de batata e muitas outras.`')
        break
        case'2': 
     alert('Meu nome completo é Vívian Maria Vaz Ribeiro, eu tenho 15 anos, nasci em 06 de março de 2009, em Caucaia, tenho 1,55 de altura e moro em General Sampaio.')
        break
        case'3': 
        alert('saindo...')
        break
    }
} while(menu !=="3")
