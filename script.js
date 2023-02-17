// CONTROLE DO BOTÃO DE CONFIRMAR 
const estrelas = document.querySelector('.estrelas')
const cartaoTotal = document.querySelector('.cartao')
let selecao = [];

estrelas.addEventListener('change', event => {
  if (event.target.type === 'radio') {
    const starChecked = document.querySelectorAll('input[type="radio"]:checked')
    selecao = Array.from(starChecked).map(x => x.value)

    selecao.sort()
    if (selecao.length != 0){
        document.getElementById("confirmar1").disabled = false;
    }

    if (selecao == 1 || selecao == 2){
      cartaoTotal.style.height = '450px'
      //console.log(`a selecao está valendo ${selecao}`)
    } else {
      cartaoTotal.style.height = '350px'
    }
  }
})

// PRINT DA QUANTIDADE DE ESTRELAS
function qualEstrela(){
    if (selecao.length == 0){
        return console.log("Nenhuma estrela foi escolhida!")
    }
    console.log(selecao[(selecao.length)-1])
}

// CONTROLE DA CAIXA DE COMENTÁRIOS

//