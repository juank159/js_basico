let a = 4 + '7';    // esto nos arroja una concatenacion "47"
let b = 4 * '7';   //  esto nos arroja un tipo numero 28
let c = 2 + true;   //  esto nos arroja un typo number 3
let d = false + -3;   //  esto nos arroja un typo number -3

console.log('a = ',a,typeof(a));
console.log('b = ',b,typeof(b));
console.log('c = ',c,typeof(c));
console.log('d = ',d,typeof(d));

// convertir de string a number

let e = '7';
let x = String(e);

// convertir de number a string

let f = 7;
let z = number(f);