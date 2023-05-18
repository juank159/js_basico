let dia = 1;
let dia_de_semana;

switch(dia){
    case 1:
        dia_de_semana = 'lunes';
        break;
    case 2:
        dia_de_semana = 'martes';
        break;
    case 3:
        dia_de_semana = 'miercoles';
        break;
    case 4 :
        dia_de_semana = 'jueves';
        break;
    case 5:
        dia_de_semana = 'viernes';
        break;
    case 6:
        dia_de_semana = 'sabado';
        break;
    case 7:
        dia_de_semana = 'domingo';
        break;
    default:
        console.log('superaste los dias de la semana');
}

console.log(dia_de_semana);