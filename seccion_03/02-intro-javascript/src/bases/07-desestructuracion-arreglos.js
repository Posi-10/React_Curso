/*------------Desestructuración de Arreglos------------*/

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

const retornaArreglo = () => {
  return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras);
console.log(numeros);

/**HomeWork 
 * 1. el primer valor del arr se llamara nombre
 * 2. el segundo valor del arr se llamra setNombre
*/

const usestate = (valor) => {
  return [valor, () => { return console.log('HolaMundo') }];
}

const arr = usestate('Goku');

console.log(arr)

// result

const [nombre, setNombre] = usestate('Goku');

console.log(nombre);
setNombre();