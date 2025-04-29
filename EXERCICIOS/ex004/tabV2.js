function gerar(){
    let num1 = document.getElementById ('num')

    let numero = Number(num1.value)

    let vezes = 1

    let contador = 1

    itab = document.getElementById ('itab')

    x1 = document.getElementById ('x1')

    x2 = document.getElementById ('x2')

    



    if (numero >= 1){


        itab.innerHTML = '' // Faz limpar o campo onde aparece a tabuada para dar lugar a nova tabuada que foi calculada, sem isso, se eu pedisse pra calcular a tabuada do 1 e depois (sem dar F5 na página) pedisse pra calcular a do 2, a tabuada do 2 ia surgir embaixo da do 1 e ia ficar uma bagunça

        do{ // Execute o BLOCO abaixo

            let tabuada = document.createElement('option'); // Cria um novo elemento do tipo 'option', se fosse 'p' ele criaria um <p>

            

            tabuada.text = `${numero} x ${vezes} = ${numero * vezes}`;
            
            itab.appendChild(tabuada); // Insere a variável 'tabuada' dentro do 'itab', ou seja, se 'itab' e 'option' fossem apenas divs, 'option' seria inserida dentro de 'itab' 

            vezes++ // A cada loopada a let vezes (que recebeu 1) ganha +1 e assim vai até o contador chegar em 10

            contador++ // A cada loopada o contador recebe +1 e assim vai até parar quando chegar em 10

            // ++ (Incremento)


        } while (contador <= 10) // Enquanto o contador <= (menor ou igual a 10)
        

    } else if (numero <= 0){
        alert('Impossível calcular, burrão.')
    }
}