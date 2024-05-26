/**
 * EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial
 */
export class Calculadora {
    /**
     * Sumar
     */
    public Sumar(a:number,b:number):string {
        const resultado =a+b
        return `la suma de ${a} + ${b} = ${resultado}`;
    }
    /**
     * restar
     */
    public restar(a:number,b:number):string {
        const resultado =a-b
        return `la resta de ${a} - ${b} = ${resultado}`;
    }
    /**
     * multiplicar
     */
    public multiplicar(a:number,b:number):string {
        const resultado =a*b
        return `la multiplicacion de ${a} x ${b} = ${resultado}`;
    }
    /**
     * dividir
     */
    public dividir(a:number,b:number):string {
        if(b === 0){
            throw new Error('no se puede dividir por cero');
        }else if (a === 0) {
            throw new Error('cero no se puede dividor');
        }
        const resultado = a/b;
        // usamos el metodo number.isInteger() para verificar si resultado es un numero entero
        if(Number.isInteger(resultado)){
            return `la division de ${a} entre ${b} es igual a: ${resultado.toString()}`;
        }else{
            return `la division de ${a} entre ${b} es igual a: ${resultado.toFixed(2)}`;
        }
    }
    /**
     * potencia
     */
    public potencia(a:number,b:number):string {
        //Math.pow() es un metodo reservado para obtener la exponencia tambien esta '**'
        const resultado = Math.pow(a,b);
        return `la potencia de ${a} por ${b} = ${resultado}`;
    }
    /**
     * factorial
    */
    public factorial(n: number): string {
        if (n < 0) {
            throw new Error('El factorial no está definido para números negativos.');
        }
        if (n === 0 || n === 1) {
            return `El factorial de ${n} es igual a 1`;
        }
        const resultado = this.calcularFactorial(n);
        return `El factorial de ${n} es igual a ${resultado}`;
    }
    // Método auxiliar para calcular el factorial de forma recursiva
    private calcularFactorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.calcularFactorial(n - 1);
    }
}