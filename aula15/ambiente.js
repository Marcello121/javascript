let num = [10, 5, 14, 25, 7]

// Tem esse comando pra adicionar um novo valor ao array (vetor,variável composta) O [5] ali se refere a posição em que o novo valor será colocado

num[5] = 57

// num.push é para adicionar um novo valor sem precisar se preocupar com a ordem de numeração (0, 1, 2, 3, etc.,) -- Ele vai automaticamente jogar o número na última posição

num.push(9)

// Comando para saber o comprimento do array -- CUIDADO para não confundir lenGTH (CERTO) com lenGHT (ERRADO) -- Esse comando deve ser usado na hora de exibir algo, exemplo:                console.log(`Nosso vetor é ${num.length}`)

num.length

// Comando que organiza os valores que estão dentro do array e os colocam em ordem crescente
num.sort()


// Ordem das coisas no for --> Primeiro elemnto é a inicialização, Segundo elemento é o teste lógico e Terceiro elemento é o incremento
for (let contador = 0; contador < num.length; contador++ ){
    

    // O num[contador] faz com que os valores do array sejam exibidos um de cada vez (??) não entendi muito bom pq isso acontece não mas acontece
    console.log (num[contador])
}
    

console.log(`Nosso vetor é ${num.length}`)
