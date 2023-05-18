// RECORRIENDO CON LA FUNCION FILTER.
let articulos = [ 
    {name:'tv', price:2000},
    {name:'cellphone', price:3000},
    {name:'lapto', price:4000},
    {name:'car', price:200000},
];

let article_filter = articulos.filter(function(article){
    return article.price > 4000;
});

console.log(article_filter);

// RECORIENDO CON LA FUNCION MAP  = me trae en un nuevo array  y mapea en array ingresado
let article_map = articulos.map(function(article){
    return article.name
});

console.log(article_map);

//RECORRIENDO EL ARRAY CON FIND() Y ME ARROJA EL PRIMER RESULTADO DE LA BUSQUEDA
let buscar = articulos.find(function(article){
    return article.name === 'car';
});
console.log(buscar);

// RECORRE EL ARRAY CON FOREACH() Y RETORNA LOS DATOS SOLICITADOS
articulos.forEach(function(article){
    console.log(article.name);
});

// RECORRE EL ARRAY CON SOME()  Y RETURNA TRUE OR FALSE
let articulo_some = articulos.some(function(article){
    return article.price > 3000;
});

console.log(articulo_some);

