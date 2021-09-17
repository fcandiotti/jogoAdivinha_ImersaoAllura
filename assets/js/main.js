let numeroSecreto = parseInt(Math.random() * 11);
let tentativa = 1;

function Chutar() {
  let elementoResultado = document.getElementById('resultado');
  let chute = parseInt(document.getElementById('valor').value);
  

    
    if (tentativa > 3) {
      elementoResultado.innerHTML = `Você não tem mais chances, o numero era ${numeroSecreto}`
      return;
    } 

    if (chute > 10 || chute <0) {
      elementoResultado.innerHTML = 'Você deve digitar um número de 0 a 10';
      return;
    }

    if (chute === numeroSecreto) {
      elementoResultado.innerHTML = 'Você acertou!' 
      return;

    } else if(chute < numeroSecreto) {
      elementoResultado.innerHTML = 'Você errou! o numero é maior'
      
    } else if(chute > numeroSecreto) {
      elementoResultado.innerHTML = 'Você errou! o numero é menor'
    }
    tentativa++
    
    console.log(tentativa)
  }
  
