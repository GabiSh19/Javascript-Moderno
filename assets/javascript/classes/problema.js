//Hoy en día no se trabaja ya de esta manera, pero se estudia ya que aún hay casos en la actualidad. 

// Si necesito extenderlo, añadirle propiedades, funcionalidade, se complicaría más

// Esto se debe crear con la palabra new
function Persona (nombre, edad) {
    console.log('Se ejecutó esta línea');
    
    //El this hace referencia a las propiedades del objeto. Sin this aparecería en consola sólo Persona{}, sin propiedades. 
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function (){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad } `);
    }
}

//Con new le digo a JS que quiero crear una nueva instancia. 
const maria = new Persona('Maria', 20);
console.log(maria);     
maria.imprimir();