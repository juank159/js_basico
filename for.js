let alumnos = ['juank','pedro','luis','maria'];

function saludar_estudiante(estudiantes){
    let longitud = alumnos.length;
    for(i=0;i<longitud;i++){
        console.log(`hola ${alumnos[i]}`);
    }
}

saludar_estudiante(alumnos);

let numeros = [1,2,3,4,5,6,7,8,9];

for (i in numeros){
    console.log(i);
}