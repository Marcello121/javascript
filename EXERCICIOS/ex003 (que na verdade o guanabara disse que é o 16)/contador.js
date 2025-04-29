

// !! SEMPRE COMENTE OS SEUS CÓDIGOS - SEMPRE COMENTE OS SEUS CÓDIGOS - SEMPRE COMENTE OS SEUS CÓDIGOS !!


function contar(){
    let n1 = document.getElementById('num1')

    let n2 = document.getElementById('num2')

    let passo = document.getElementById('passo')

    let resultado = document.getElementById('resultado')

    let nt1 = Number(n1.value)

    let nt2 = Number(n2.value)

    let vpas = Number(passo.value)

    
    if (n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0) {
        alert('Faltam dados para a contagem')
        resultado.innerHTML = 'Impossível contar'

        
    } else {


        // Se o passo for definido como zero, ele automaticamente vai ser setado pra 1 pra contagem poder acontecer
        if (vpas <= 0){
            alert('Passo inválido, colocandoa automáticamente passo 1')
            vpas = 1
        }

        // Contagem progressiva
        
        if (nt1 < nt2){
            while (nt1 < nt2){
                resultado.innerHTML += `${nt1} ➡ ` 
                nt1 += vpas
            }
    
        // Contagem regressiva
            
        } else if (nt1 > nt2){
            while (nt1 > nt2){
                resultado.innerHTML += `${nt1} ➡ ` 
                nt1 -= vpas
            }
    }

    
    }
    resultado.innerHTML += '🏁'

    


}