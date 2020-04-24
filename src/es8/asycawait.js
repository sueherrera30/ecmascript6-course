// ASYNC AWAIT 
// primero se crea funcion
// dentro promesa 
// luego se invoca

const helloWorld = () => {
  return new Promise((resolve,reject)=>{
    (true)
      ? setTimeout(()=>{resolve('holiiii Que patso bebé, hello world over here')},3000)
      : reject(new Error('Test error'));
  })
};
// se indentifica por que ponermos palabra reservada async, antes de 
// pasar los paramentros.

const helloAsync = async () => {
  // va a hacer el llmado de nuestra funcion con promesa 
  // va a esperar a que  suceda y despues imprimira en consola.
  const hello = await helloWorld();
  console.log(hello);
}
helloAsync();

// tambien se añade:
// ortra propuesta es generar una funcion 
// dodne vamos poner la funcion asincrona 
// usando TRY Y CATCH

const helloAsync2 = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  }
  catch(error) {
    console.log(error);
  }

}
helloAsync2();