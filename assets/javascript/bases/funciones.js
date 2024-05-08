
function saludar( nombre ) {
    // console.log( arguments );
    // console.log('Hola ' + nombre );
    return [1,2];

    // Esto nunca se va a ejecutar ya que está después del return.
    console.log('Soy un código que está después del return');
}

// Función tradicional:
const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre );
}
// Función de flecha:
const saludarFlecha = () => {
    console.log('Hola Flecha');
}
// Función de flecha con parámetro
const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre );
}

// Podemos almacenar el retorno de una función en una variable: 
const retornoDeSaludar = saludar( 'Fernando', 40, true, 'Costa Rica' ); // 1

// saludar2( 'Fernando' );

// saludarFlecha();
// saludarFlecha2('Melissa');

function sumar( a, b ) {
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a + b;
// }

//Podemos simplificar la escritura de la función de flecha: siempre y cuando en esta se ejecute sólo una línea de código (a+b)
const sumar2 = (a,b) => a + b;

function getAleatorio() {
    return Math.random();
}
// o .. simplificada de la siguiente forma: 
// En una función de flecha, que no tenga llaves { }
const getAleatorio2 = () => Math.random();
console.log(  getAleatorio2()   );
