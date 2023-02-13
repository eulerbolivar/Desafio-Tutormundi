const todasEstrelas = document.querySelectorAll('.estrela');

todasEstrelas.forEach((star, i) => {
    star.onclick = function (){
        console.log(star);
        console.log(i);
    }
})