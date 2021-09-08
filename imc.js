const calcular = document.getElementById('calcular')

function imc() { //peso / altura^2 entre 18,5 e 24,9

    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if(nome.value !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso/(altura*altura)).toFixed(2)

        let classificação = ''

            if(valorIMC < 19){
                classificação = 'abaixo do peso!'}
            else if(valorIMC < 25 && valorIMC > 19){
                classificação = 'dentro do peso ideal. Parabéns!'}
            else if(valorIMC < 30 && valorIMC > 25){
                classificação = 'acima do peso!'}
            else if(valorIMC < 35 && valorIMC > 30){
                classificação = 'com obesidade Grau 1!'}
            else if(valorIMC < 40 && valorIMC > 35){
                classificação = 'com obesidade Grau 2!'}
            else{
                classificação = 'com obesidade Grau 3, Mórbida!'}

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificação}`

    }else {
        resultado.textContent = 'Preencha os dados corretamente!'
    }
}

calcular.addEventListener('click', imc ) // O link para o imc.js só funcionou quando coloquei esse EventListener aqui no final.
