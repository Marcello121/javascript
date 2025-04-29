function gerar(){
    let num1 = document.getElementById ('num')

    let numero = Number(num1.value)

    let contador = 0

    x1 = document.getElementById ('x1')

    x2 = document.getElementById ('x2')



    if (numero >= 1){
        
        

        x1.innerHTML = `${numero} x 1 = ${numero * 1}`
        x2.innerHTML = `${numero} x 1 =${numero * 2}`
        x3.innerHTML = `${numero} x 1 =${numero * 3}`
        x4.innerHTML = `${numero} x 1 =${numero * 4}`
        x5.innerHTML = `${numero} x 1 =${numero * 5}`
        x6.innerHTML = `${numero} x 1 =${numero * 6}`
        x7.innerHTML = `${numero} x 1 =${numero * 7}`
        x8.innerHTML = `${numero} x 1 =${numero * 8}`
        x9.innerHTML = `${numero} x 1 =${numero * 9}`
        x10.innerHTML = `${numero} x 1 =${numero * 10}`



        
        


        

    } else if (numero <= 0){
        alert('Impossível calcular burrão.')
    }
}