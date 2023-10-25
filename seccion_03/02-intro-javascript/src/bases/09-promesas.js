/*------------Promesas------------*/
import { getHeroeById } from "./08-imp-exp";

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(1);
    (Object.is(heroe)) ?
      reject('No se pudo encontrar el héroe') :
      resolve(heroe);

  }, 2000)
});

promesa
  .then(heroe => {
    console.log('Heroe: ', heroe);
  })
  .catch(err => {
    console.warn(err);
  })
  .finally(console.log('Fin de la Promesa'));


const getHeroeByIdAsync = id => new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(id);
    (Object.is(heroe)) ?
      reject('No se pudo encontrar el héroe') :
      resolve(heroe);

  }, 2000)
});

getHeroeByIdAsync(3).then(console.log).catch(console.warn)