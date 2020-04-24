//salio en junio de 2019
// FLAT
// nos va a devolver una matri con cualquier submatriz, aplanada 

//flat, recibe como argumento la PROFUNDIDAD
// si ejecutamos solita, por default dira un primer nivel.
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

// flatmap
//me permite mapear cada elemento
//despues pasarlo a una funcion y aplanar segun el resultado 

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]))
//TRIMSTART
// me permite elimiar espacion e blanco de una string 
let hello = '            hello world           :)';
console.log(hello);
console.log(hello.trimStart());
let hello = 'hello world          :)';
console.log(hello.trimEnd());

//OPTIONAL CATCH BILDING
// DIRECTMENT ERRO YA ESTA incluido  dentro del catch, 

//OBJECT.FROMeNTRIES
//va a transformar data valor en un OBJETO
// arreglo que queremos pasar a objeto.
let entries = [["name","sue"], ["edad", 28, "hobby",'crossfit']];

console.log(Object.fromEntries(entries))


//objeto tipo simbolo que nos ayudara a aacceder a una descrpcxion
// veremos que elementos se encuentran 
let mySymbol = 'my symbol';
let symbol = Symbol(mySymbol);
console.log(symobol.description)


// QUE VIENE???
// es.next 
// es como se le llama a la proxima version 
// comite tecnico: TC39 grupo de desarrolladores que revisan propuestas y que cumplan con requisitos

// stage 0 idea   - inquietud de alguien 
// stage 1 proposal  - como y por que se necesitac
// stage 2 draft -  lista la especificacion com ose p`rueba funciona y resuelve tema particular
// stage 3 candidate - aqui será probado y valorado
// stage 4 ready - 