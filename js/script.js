const btnMenu = document.querySelector('i.fas.fa-bars');
const btnCerrar = document.querySelector('i.fas.fa-times');
const barraLateral= document.querySelector('.barra-lateral');

btnMenu.addEventListener('click', mostrarMenu);
btnCerrar.addEventListener('click', ocultarMenu);

let contador = 0;

function mostrarMenu() {
    contador++;
    if(contador == 1 ) {
       barraLateral.classList.add('activo');
    }
}


function ocultarMenu() {
    contador=0;
    if(contador == 0 ) {
       barraLateral.classList.remove('activo');
    }
}
