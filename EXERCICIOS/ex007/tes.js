let array = [];

let n1 = document.getElementById ('num');

let numero = Number(n1.value);




function adicionar(){

    if (Number(n1.value) >= 100 || Number(n1.value <= 0)){

        alert('É só de 1 a 100 burrão');

    } else {

        let n1 = document.getElementById ('num');

        let numero = Number(n1.value);
    
        array.push(numero);

        let tab = document.getElementById ('itab');

        let area = document.createElement ('option');

        area.innerText = `Valor ${numero} foi adicionado`;

        numero.value = '';

        tab.appendChild(area);
        
    }
    
}

function enviar(){

    let pTexto = document.getElementById ('p1');

    // Remove todos os <p> filhos de pTexto
    const paragrafos = pTexto.querySelectorAll('p');
    paragrafos.forEach(p => pTexto.removeChild(p));


    let texto = document.createElement ('p');

    let total = array.length;

    let maior = Math.max(...array);

    let menor = Math.min(...array);

    pTexto.appendChild(texto);

    let somagem = array.reduce ((x, z) => x + z, 0);

    // Estilo

    // Pra conseguir escrever múltiplas mensagens na chamada da função é necessário usar "+=" (sem aspas) para que a mensagem seguinte não sobrescreva a mensagem anterior (isso levaria a mostrar apenas uma mensagem, a última)
    
    // É possível usar \n para quebrar a linha e organizar melhor a saída das mensagens

    // Se estiver usando innerHTML posso usar <br>

    texto.style.padding = '15px';

    texto.style.textAlign = 'center'; // Não tem traços na estilização direta em JS, text-align tem que virar textAlign (em camelCase (boas práticas de JS))

    texto.style.marginLeft = '80px'

    texto.style.fontSize = '18px'

    texto.style.textShadow = '2px 2px 2px black'


    // Mensagens 


    texto.innerText += `Ao todo temos ${total} números cadastrados\n \n` 

    texto.innerText += `O maior número adicionado foi ${maior}\n \n`

    texto.innerText += `O menor número adicionado foi ${menor}\n \n`

    texto.innerText += `A soma total dos números é ${somagem}\n \n`

    texto.innerText += `A média total dos números é ${somagem / 6}`

    

}

