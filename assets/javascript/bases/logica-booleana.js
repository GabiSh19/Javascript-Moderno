const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

// NEGACIÓN 

console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true

console.log( !regresaFalse() ); // true

//OPERADOR AND

console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && !false ); // true

console.log('=========');
console.log(  regresaFalse() && regresaTrue() ); // false, ejecuta el false y se sale. No evalúa toda la línea.
console.log(  regresaTrue() && regresaFalse() ); // false

console.log('==== && =====');
regresaFalse() && regresaTrue(); // aparece el mensaje de cada función. 

console.log( '4 condiciones ', true && true && true && false ); // false

//OPERADOR OR

console.warn('OR'); // true
console.log( true || false );
console.log( false || false );

console.log( regresaTrue() || regresaFalse() );
console.log( '4 condiciones ', true || true || true || false ); // true


// ASIGNACIONES

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150; // Retornará false; si todo es verdadero retorna el último valor Verdadero.
const a2 = 'Hola' && 'Mundo' && soyFalso && true; // Retornará false
const a3 = soyFalso || 'Ya no soy falso'; // Retorna: 'Ya no soy falso
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; // Retorna: 'Ya no soy falso de nuevo' ya que es el primer true que encontró
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; 

console.log({a1, a2, a3, a4, a5 });

if ( regresaFalse() && regresaTrue() && (true || false || true) ) { //No se recomienda mucho esta manera ya que hace ininteligible el código.
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}

