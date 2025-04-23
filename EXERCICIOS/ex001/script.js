function carregar(){

    let texto = document.getElementById('textoH')

    let imagem = document.getElementById('imagem')

    let dataAtual = new Date();

    let horas = dataAtual.getHours();
    

    if (horas >= 0 && horas < 11){
        // Manhã

        imagem.src = 'imagens/dia.jpg';
        texto.innerText = (`Agora são ${horas} horas`);
        document.body.style.background = '#f9e389';
        
    }

    else if (horas >= 12 && horas < 19){
        // Tarde


        imagem.src =  'imagens/tarde.jpg';
        texto.innerText = (`Agora são ${horas} horas`);
        document.body.style.background = '#A47661';
    }

    else {
        // Noite
        imagem.src = 'imagens/noite.webp';
        texto.innerText = (`Agora são ${horas} horas`);
        document.body.style.background = '#494B4B';

    }

}
        
    
