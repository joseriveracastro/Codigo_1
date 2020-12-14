
function tabla(num) {

for(i=1; i<=10; i++){
    console.log(num + 'x'+ i+ '='+ num*i)
}

}

console.log('Bienvenido! programa de tabla de multiplicar');
let numero= parseInt(prompt('Ingresa el numero'));

tabla(numero);