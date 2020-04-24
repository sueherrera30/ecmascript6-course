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

// MULTILINEA en scripts
// antes:
let lorem = "quiero escribir cositas divertidas para ver como fumnciona el salto de linea -> \n ";
+ "otra frase epica, donde explico como todo es hermoso."
console.log(lorem);

//ahora:
//Usamos comillas francesas:

let lorem2 = `igual todo esto es una prueba
el salto de linea se hace
muy facil
de 
identificar
wooow`;
console.log(lorem2);

//D  E S T  R U C T U R  A C  I Ó N 

let person = {
  'name': 'oscar',
  'age': 32,
  'country': 'MX',
}

// Ahora , como accedo s estos elementos?
// antes:
console.log(person.name, person.age);

//declaramos una variable donde asignaremos elementos que sabemos que vivien dentro del objeto,

let { name , age , country } = person
console.log(name,age,country);

//SPREAD OPERATOR 
//OPERADOR DE PROPAGACION: nos permite a nostros EXPANDIER de varias situaciones ciertos elementos.

// tenemos elementos en arreglos,los quiero unir en un solo elemento,para presentarlos.

// variables:
// NOS AYUDA A UNIR EN IUN SOLO arreglo.
let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['valeria', 'yesica', 'camila'];
//arreglo donde restructuraré teams,
// antes, usaba elementos para unirlos: los copianos. los UNIMOOOS 
let education = ['david', ...team1,...team2];
console.log(education)
{
  var global = "global"
}
{
  // ests no entrará  por que n oesta en ese contexto
  let global2 = "global con let"
  console.log(global2)
}

console.log(global)
//console.log(global2)
// variables LET Y CONST
//solo disponible en el scope se maneja por bloque donde va a swer llamado.


//CONST , variable que no sera constante, no cambiará su valor.

  const a = 'b';
  // a = b; asi no permitira 
  console.log(a);

  // A R  R O W FUNCTION 
  // 1. sinbtaxis mas reducida.
  // 2. un THIS no vinculado.

  const names = [
    {name: 'mone', edad:29 ,},
    {name: 'sue', edad: 28,},
    {name: 'karla', edad: 27,},
    {name: 'pili lalala', edad: 26,},
    ];

    let listOfNames =names.map(function(item) {
      console.log(item.name);
    })

    let listOfName2 = names.map(item =>console.log(item.name));

    //podemos asignar directamente si es solo un valor 
    const square = num  => num * num;

    // promesas:
    // al no ser un lenguaje asincrono necesitamos de recursos para hacer asi.
    // reparan callbackhell anidaciones
    //algo va a pasar

    // retorno dos elementos  y reject
    // entonces:
    // creamos unafuncion y dentro creamos una promesa nueva que
    //  retorna dos cosas lo que espera
    // ya sea una respuesta o un reject
    const hellopromise = () => {
     return new Promise((resolve, reject) => {
        if(true){
          resolve('iujuuuu!');
        }
        else{
          reject('uchalaaaaas!');
        }
     })
    }
// ahora vemos si promesa es chida o no.

hellopromise()
.then(response => console.log(response))
.catch(error => console.log(error));