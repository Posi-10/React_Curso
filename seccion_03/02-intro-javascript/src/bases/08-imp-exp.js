/*------------Import, export y funciones comunes de arreglos------------*/

import heroes, { owner } from '../data/heroes';

const getHeroeById = (id) => heroes.find(heroe => heroe.id === id); // find busca solo un documento o objeto

const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner); // filter busca mas de uno

// console.log(owner)
// console.log(getHeroeById(2));
// console.log(getHeroeByOwner('DC'));


export {
  getHeroeById,
  getHeroeByOwner
};