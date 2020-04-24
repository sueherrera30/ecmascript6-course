//podre tener logica separa de mi hilo o archiv principal.

 const hello = () => {
  return 'hello moto';
}

export default hello;


// lo llamamos en otro document de esta manera:

import { hello } from './module';
