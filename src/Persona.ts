/**
 * EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
 */
export abstract class Persona {
    protected nombre:string;
    protected apellido:string;
    protected direccion:string;
    protected telefono:string;
    protected edad:number;
    constructor(
        name:string,
        lastname:string,
        adress:string,
        phone:string,
        age:number
    ) {
        this.nombre = name;
        this.apellido = lastname;
        this.direccion = adress;
        this.telefono = phone;
        this.edad = age;
    }
    /**
     * mayorMenor
     */
    public mayorMenor():void {
        if (this.edad<18) {
            console.log(`tienes ${this.edad} eres menor de edad.`);
        }else if (this.edad>=18) {
            console.log(`tienes ${this.edad}, eres mayor de edad`);
        }
    };
    /**
     * name
     */
    abstract mostrarDatos():void;
}
