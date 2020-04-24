
// clases , forma mas faci lde manejar objetos
// y tambien manera de manejar la herencia con Js
// calculadora

class Calculator {
  // asignamos constructor 
  //aqui varialbes que estaran disponibles de manera global
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  //creo metodos que me ayudan a definir acciones  que podremos ejecutar
  suma (valueA,valueB) {
    //asigno valores a variables que previamente defini 
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
};

const calc = new Calculator();
console.log(calc.suma(2,4));
