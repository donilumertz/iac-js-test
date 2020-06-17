var a = true;
var b = true;

var s = !a;
console.log("negando a " + s);

var s = a && b;
console.log(" a AND b " + s);

var s = a || b;
console.log(" a OR b " + s);

var s = a != b;
console.log("a xor b (2) " + s);

var s = (a || b) && !(a && b);
console.log("a xor b (3) " + s);

/**var nome = "João da Silva";

console.log("o conteúdo da variável nome é: " + nome);

var numero = 10;
var numeroDois = 2.22;
var a = true;
var b = false;

console.log("a variavel numero é um " + typeof(numero));
console.log("a variavel numeroDois é uma " + typeof(numeroDois));
console.log("var a é " + typeof(a));

console.log("var b é " + typeof(b));

var resultSoma = numero + numeroDois;

console.log("teste");
*/


// //Armaenar números
// var numero1 = parseInt((prompt("Informe o primeiro número")));
// var numero2 = parseInt((prompt("Informe o segundo número")));

// //Exibir o calculo
// document.write("A multiplicação dos valores é: " + (numero1 * numero2));

// alert("A divisão dos valores é: "+ (numero1 / numero2));

// console.log("A soma dos valores é: "+ (numero1 + numero2));