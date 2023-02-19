// CONTROLE DO BOTÃO DE CONFIRMAR 
const estrelas = document.querySelector('.estrelas')
let selecao = [];

estrelas.addEventListener('change', event => {
  if (event.target.type === 'radio') {
    const starChecked = document.querySelectorAll('input[type="radio"]:checked')
    selecao = Array.from(starChecked).map(x => x.value)
    selecao.sort()

    if (selecao.length != 0){
        document.getElementById("confirmar1").disabled = false;
    }
  }
})

// PRINT DA QUANTIDADE DE ESTRELAS
function qualEstrela(){
    console.log(selecao[(selecao.length)-1])
}