let array = [];






// Verifica se algum número repetido vai ser inserido

function inLista (nz, lista) {
    if (lista.indexOf(Number(nz)) != -1 ){
        return true
    } else {
        return false
    }
}


function adicionar(){

    let n1 = document.getElementById ('num');

    let numero = Number(n1.value);

    let pTexto = document.getElementById ('p1');

    let texto = document.createElement ('p');

    pTexto.appendChild(texto);

    // Peguei do GPT essa arrow function que nem consigo ler direito pq não consegui resolver de outra forma

    const paragrafos = pTexto.querySelectorAll('p');
    paragrafos.forEach(p => pTexto.removeChild(p));

    
    if (numero < 1 || numero > 100 || inLista(numero, array)) {

        alert('É só de 1 a 100 burrão e não pode número repetido');

    } else {
    
        array.push(numero);

        let tab = document.getElementById ('itab');

        let area = document.createElement ('option');

        area.innerText = `Valor ${numero} foi adicionado`;

        tab.appendChild(area);

        // Limpa a caixa de input onde os números são digitados e com o num.focus() já deixa selecionado para digitar o número seguinte, ou seja, não precisa clicar em "adicionar" e depois ir clicar de novo na caixa para digitar o número, pode só digitar, adicionar e digitar outro.

        num.value = ''
        num.focus()

        
        
    }
    
}

function enviar(){

    if (array == 0){
        alert('Adicione valores')
    } else {

        let pTexto = document.getElementById ('p1');

        // Remove todos os <p> filhos de pTexto
        const paragrafos = pTexto.querySelectorAll('p');
        paragrafos.forEach(p => pTexto.removeChild(p));

        let texto = document.createElement ('p');

        pTexto.appendChild(texto);

        // Resultados

        let total = array.length;

        let maior = Math.max(...array);

        let menor = Math.min(...array);

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

    

}

