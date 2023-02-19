// CONTROLE DO BOTÃO DE CONFIRMAR 
const estrelas = document.querySelector('.estrelas')
const cartao = document.querySelector('.container')
const comentarios = document.querySelector('.blocoC')


let selecao = [];

cartao.addEventListener('mouseleave', comment => {
  comentarios.style.opacity = '0';
  comentarios.style.visibility = 'hidden';
})

estrelas.addEventListener('change', event => {
  if (event.target.type === 'radio') {
    const starChecked = document.querySelectorAll('input[type="radio"]:checked')
    selecao = Array.from(starChecked).map(x => x.value)
    selecao.sort()

    if (selecao.length != 0){
        document.getElementById("confirmar1").disabled = false;
    }
    
    if (selecao == 1 || selecao == 2){
      comentarios.style.opacity = '1';
      comentarios.style.visibility = 'visible';
    } else {
      comentarios.style.opacity = '0';
      comentarios.style.visibility = 'hidden';
    }
  }
})

// PRINT DA QUANTIDADE DE ESTRELAS
function qualEstrela(){
    console.log(selecao[(selecao.length)-1])
}