let cartaoTotal = document.querySelector('.cartao')
//cartaoTotal.setAttribute('height', '450px')

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

function qualEstrela(){
    if (selecao.length == 0){
        return console.log("Nenhuma estrela foi escolhida!")
    }
    console.log(selecao[(selecao.length)-1])
}