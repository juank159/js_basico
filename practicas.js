const input1 = document.querySelector('.calculo1');
const input2 = document.querySelector('.calculo2');
const presult = document.querySelector('.result')
const sumar = document.querySelector('.sumar');
const formulario = document.querySelector('.form');


formulario.addEventListener('submit',s);

function s(event){
    event.preventDefault();
    const suma = parseInt(input1.value) + parseInt(input2.value);
    presult.append(suma);
}
