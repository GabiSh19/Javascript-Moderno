class Persona {

    constructor ( nombre, apellido, pais ) {
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;

    } 

    getInfo() {
        console.log(`Información: ${this.nombre},  ${this.apellido},  ${this.pais}`);
    }


}