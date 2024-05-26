/**
 * EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
 * Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos:
• Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y
número de cuenta.
• Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una
condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a
depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado
correctamente y la cantidad depositada.
• Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes
que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y
cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
• Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
• Define un objeto de la clase Cuenta y llama sus métodos.
 */
export class Cuenta {
    public nombre:string;
    public tipoCuenta:string;
    private cantidad:number;
    private numeroCuenta:string;
    constructor(nombre:string,tipoCuenta:string,numeroCuenta:string,cantidad:number) {
        this.nombre = nombre;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
        this.cantidad = cantidad;
    }
    // getter y setter
    /**
     * get NumeroCuenta
     */
    public get NumeroCuenta():string {
        return this.numeroCuenta;
    }
    /**
     * get cantidad
     */
    public get Cantidad():number {
        return this.cantidad;
    }
    /**
     * set Cantidad
    */
    public set Cantidad(valor:number) {
        this.cantidad = valor;
    }
    /**
     * depositar
     */
    public depositar(monto:number):void {
        if(monto<5.00){
            console.log('el valor a depositar debe ser mayor a $5.00');
        }else{
            this.Cantidad += monto;
            console.log(`Se ha depositado correctamente la cantidad de: $${monto.toFixed(2)}`);
        }
    }
    /**
     * retirar
     */
    public retirar(valor:number):void {
        if(valor<5.00){
            console.log('la cantidad a retirar debe ser mayor a $5.00');
        }else if (this.Cantidad < valor) {
            console.log('No hay suficientes fondos');
        }else{
            this.Cantidad -= valor;
            console.log(`ha retirado la cantidad de $${valor.toFixed(2)} su nuevo saldo es: $${this.Cantidad.toFixed(2)}`);
        }
    }
    /**
     * MostrarDatos
 :void    */
    public MostrarDatos():void {
        console.log(`Datos de Cuenta:\n Nombre: ${this.nombre}\n Tipo de cuenta: ${this.tipoCuenta}\n Numero de cuenta: ${this.NumeroCuenta}`);
    }
    /**
     * Saldo
 :void    */
    public Saldo():void {
        console.log(`Saldo en cuenta: $${this.Cantidad}`);
    }
}