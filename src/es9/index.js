// lanzada en junio de 2018

//OPERADRO DE REPOSO
// puede extraer las propiedades de un objeto 

const obj = {
 name: 'sue',
 age: 28,
 country: 'MX',
 hobby: 'crossfit',
 instrument:'cello,'
}

// let { name, ...all} = obj;
// console.log(name,all);

// vere los ementos y todo lo xemas lo encapsulo
// de esta forma pdoes establecer l oque necesitamos de un objeto
// solo necesito nombre y edad, l odemas no// pero no quiero destructurar todos los elementos
// 

let { country, ...all} = obj;
console.log(all);

// PROPAGACION 
// PODREMOS ANIDAR  elementos de diferentes objetos.

const obj = {
  name: 'sue',
 }

 const obj1 = {
  ...obj,
  country: 'MX',
 }
 console.log(obj1);

 // primise.
 // podremso saber cuando a 
 //terminado el llamado y podremso ejecutar
 // alguna funcion o logica segun sea el caso

 const helloWorld = () => {
   //no olvidar retornar!
   return new Promise((resolve,mreject) => {
    (true)
    ? setTimeout(() => resolve('que chido banda, HOLA!'), 3000)
    : reject(new Error('test error please,'))
   });
 };

 //llamaremso y desencademos logica segun sea el caso
 //cuando sabemos que ya la promesa obtuvo su respuesta,
 // podemso obtener tambien su llam ado final 
 // el cual me permite ejecutar bloque de codigo segun sea el caso.

 helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finish bebé'))


// REGEX ?? expresiones regulares??
// como podemos agrupar bloques de regex
// y poder acceder a cada uno de ellos
// podre ACCEDER a elementos de regexssegun sea el caso.
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year)
console.log(month)
console.log(day)