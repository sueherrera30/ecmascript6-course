//G E  N  E R A T O  R S

//funcion especial que retorna uan serie
// de valores segun el ALGORITMO DEFINIDO.

// tiene sintaxis especial, llega un * despeus de palabra function 

function* helloWorld() {
  // segun el algoritmo es como retprnara los valores
  if (true) {
    // me ayudará a RETORNAR algo
    // declaro primerelemento
    yield 'hello, ';
  }
  // el segundo elemeneto  que va a ser llamado cuando se 
  // ha ejecutado el siguiente valor.
  if(true){
    yield 'World'
  }
} 
// para ejecutarla, en cosntante nueva la llamo.
// asi pdore unsar valor next que me va a permitir
// ejecutar la primera logica y obtener valor, segun sea el caso
// y cuando vuelva a ejecutar siguiente valor , va a recordar 
// dodne esta la asignación logica qeu acabo de crear para msotrarme el swegund ovalor 
// y asi por cada step que peuda tener la lagica
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);// da undefinded ya
                                        // que ya no hay siguiente.es el ultimo

