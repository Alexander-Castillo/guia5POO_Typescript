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
import { Persona } from './Persona';
export class Empleado extends Persona {
    private sueldo:number;
    constructor(
        name:string,
        lastname:string,
        adress:string,
        phone:string,
        age:number,
        salario:number
    ) {
        super(name,lastname,adress,phone,age);
        this.sueldo = salario;
    }
    mostrarDatos(): void {
        console.log(
            `Nombre del empleado: ${this.nombre}\n
            Apellidos del empleado: ${this.apellido}\n
            Direccion del empleado: ${this.direccion}\n
            Numero de contacto del empleado: ${this.telefono}\n
            edad del empleado: ${this.edad}`
        );
    }
    // Método para cargar el sueldo
    public cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    // Método para imprimir el sueldo
    public imprimirSueldo(): void {
        console.log(`El sueldo de ${this.nombre} ${this.apellido} es: $${this.sueldo.toFixed(2)}`);
    }
}