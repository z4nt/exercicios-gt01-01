var prato = [0, 180, 230, 250, 350]
var sobremesa = [0, 75, 110, 170, 200]
var bebida = [0, 20, 70, 100, 65]
pratoInput = prompt('Digite a opção de prato que deseja: ')
sobremesaInput = prompt('Digite a opção de sobremesa que deseja: ')
bebidaInput = prompt('Digite a opção de bebida que deseja: ')
pegarPrato(pratoInput,sobremesaInput,bebidaInput)
function pegarPrato(pratoInput,sobremesaInput,bebidaInput) {
    if (parseInt(pratoInput) < 1 || parseInt(pratoInput) > 4) {
        console.log('Digite uma opção válida')
    } else {
        var caloria_um = prato[pratoInput]
        console.log(caloria_um)
    }

    if (parseInt(sobremesaInput) < 1 || parseInt(sobremesaInput) > 4) {
        console.log('Digite uma opção válida')
    } else {
        var caloria_dois = sobremesa[sobremesaInput]
        console.log(caloria_dois)
    }

    if (parseInt(bebidaInput) < 1 || parseInt(bebidaInput) > 4) {
        console.log('Digite uma opção válida')
    } else {
        var caloria_tres = bebida[bebidaInput]
        console.log(caloria_tres)
    }
    let calorias = caloria_um + caloria_dois + caloria_tres
    return console.log('As calorias da sua refeição é: ', calorias )
}

