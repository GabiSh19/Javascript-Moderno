class Persona {
    //Lo siguiente es para simular otro constructor en esta clase Persona.
    static porObjeto ({ nombre, apellido, pais }) {
        return new Persona ( nombre, apellido, pais );    
    }

    constructor ( nombre, apellido, pais ) {
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    } 

    getInfo() {
        console.log(`Información: ${this.nombre},  ${this.apellido},  ${this.pais}`);
    }

}

const nombre1 = 'Melissa', 
    apellido1 = 'Flores', 
    pais1 = 'Colombia';

const fher = {

    nombre: 'Fher',
    apellido: 'Herrera',
    pais: 'Costa Rica'

}

const persona1 = new Persona ( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto( fher );

persona1.getInfo();
persona2.getInfo();
