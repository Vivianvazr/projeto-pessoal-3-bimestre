function askForInformation() {
    return confirm('Vamos conhecer mais sobre mim?')
}

let wantsToKnowMore = askForInformation()

if (wantsToKnowMore) {
    let menu = ''
    const options = [
        '1- saber sobre meus gostos.',
        '2- saber sobre informações sobre minha pessoa.',
        '3- mais informações.',
        '4- sair'
    ]
    do {
     menu = prompt(`Opções disponíveis:\n${options.join('\n')}`)
    switch(menu){
        case'1': 
      alert('Eu gosto de assistir filmes e séries, gosto de jogar de handebol, gosto de ficar em casa, tenho muitas comidas preferidas, pizza, lasanha, açaí e muitas outras.')
        break
        case'2': 
     alert('Meu nome completo é Vívian Maria Vaz Ribeiro, eu tenho 15 anos, nasci em 06 de março de 2009, em Caucaia, tenho 1,55 de altura e moro em General Sampaio.')
        break
        case'3':
        alert('Eu sou uma pessoa confiável, meio sensível, gosto de conversar, para mim feitos pequenos importam muito.')
        break
        case'4': 
        alert('saindo...')
        break
        default:
            alert('Opção inválida. Tente novamente.')
    }
} while(menu !=="4")
 } else {
        alert('Você escolheu por não conhecer sobre mim.')
    }