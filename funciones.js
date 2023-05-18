// Declarativas

function miFuncion(){
    return 3;
}

var miFuncion = function(a,b){
    return a +b;
}

miFuncion(3,4);



// otro ejemplo 
function solution(car) {
  
    if ( car.licensePlate){
      car.drivingLicense = true;
    }
    else{
      car.drivingLicense = false;
    }
    return car;
  }
  
  
  // Prueba 2
  solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  });