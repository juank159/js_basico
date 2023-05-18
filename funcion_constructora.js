// Funcion constructora.

function auto (marca,modelo,year){
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;

}
let cant= parseInt(prompt('ingrese la cantidad de autos a reegistrar: '));
let cant_registrados = 0
parseInt

const autos = [];
 while(cant_registrados < cant){
    let marca = prompt('escribe la marca: ');
    let modelo = prompt('escribe el modelo: ');
    let year = prompt('escribe el modelo: ');

    let nuevo = new auto(marca,modelo,year);

    autos.push(nuevo);
    cant_registrados++;
 }
 console.log(autos);
