let agora = new Date()

let hora = agora.getHours()


if (hora > 4 && hora < 12){
    console.log('Bom dia')
}

else if (hora > 12 && hora < 19){
    console.log('Boa tarde')
}

else if (hora < 4 && hora > 0){
    console.log('Boa madrugada')
}

else{
    console.log('Boa noite')
}