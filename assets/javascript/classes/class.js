class Persona {
    nombre;
    codigo;
    frase;

    constructor(nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    
    }

}


const spiderman = new Persona ('Peter Parker', 'Spidy', 'Hola, soy Spiderman')
console.log(spiderman)