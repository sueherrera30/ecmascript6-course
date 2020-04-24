// junio 2017:

// OBJECT.ENTRIES
// nos permitira devolver 
//la clave y los valroes de una matriz.

const data = {
  frontend: 'sue',
  backend: 'dany',
  design: 'raul',
}
// como transformo este OBJETO A UNA MATRIZ
const entries = Object.entries(data);
console.log(entries);
// al usarlo, para saber ucanto elementos tiene un objeto
// disponemos de length asi sabremos cuantos elementos tenemos.
console.log(entries.length);

//OBJECT.VALUES  :o incredibooool!!!
// me devuelve lso Valores de un objeto a un arreglo :O 

const data = {
  frontend: 'sue',
  backend: 'dany',
  design: 'raul',
}

const values = Object.values(data);
console.log(values.length);

//PADSTART PADEND
const string = 'hello';
// como podemos anteponer elementos o espacios a el string
// primer parametro: cuantos caracteres voy a tener, si ya tengo 5 
// y quiero añadir 2, entnces paso 7.
// segundo parametro, los que quiro agregar.
// segundo parametro cuales son 
console.log(string.padStart(7, 'hi'))

console.log(string.padEnd(12, '----'))

//para que nos serviria esto?
// frontend al rpesentar elementos, ejemplo menu, 

console.log('food'.padEnd(12, ' -----'));

//traling comas, 
// puedo poner una coma final dentro del objeto para 
// establecer uan forma que es mas amigable de añadir elementos 
// estavlece que al siguiente puede haber un valor.
