// PARAMETROS POR DEFECTO:
// podemos establecer ciertos valores que pasamos a una función

function newFunction(name,age, country) {
// poniamos valores por defecto de esta forma.
 var name = name || 'oscar';
 var age = age || '32';
 var country = country || 'MX';
 console.log(name,age,country);
}
newFunction();
// podemos ahora establecer desde la asignaciòn de los paramentros;

function newFunction2( name='oscar', age= 32, country= 'MX'){
  console.log(name,age,country);
}

// dos formas de llamar:
newFunction2() 
//sin paramentrso nos dara lo que esta por default.

newFunction2('Ricardo', '23', 'CO');

//TEMPLATES LITERALS
// Separaro unir varior elementos

let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' +  world;
console.log(epicPhrase);

const epicPhraseNewStyle = `${hello} ${world} amiguis!`;
console.log(epicPhraseNewStyle);