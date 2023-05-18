let objetos = {
    marca:'toyota',
    modelo:'corrola',
    year:2020,
    detalles_Auto:function(){
        console.log(`Auto ${objetos.marca} modelo ${this.modelo} año ${this.year}`);
    }
};

console.log(objetos.marca);      // traer el valor del objeto, referenciando la clave.
console.log(objetos.detalles_Auto());