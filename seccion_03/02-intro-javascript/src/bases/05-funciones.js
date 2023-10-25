/*------------Funciones------------*/

const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;


console.log(saludar('Goku'));
console.log(saludar2('Veggta'));
console.log(saludar3('Gohan'));
console.log(saludar4());

const getUser = () => {
  return {
    uid: 'ABC1230',
    username: 'MapiPosi'
  }
};

const getUser2 = () => ({
  uid: 'ABC1230',
  username: 'MapiPosi'
});

console.log(getUser());
console.log(getUser2());

/**HomeWork 
 * 1. Trasnformen a una funcion de flecha       ✔️
 * 2. Tiene que retornar un objeto implícito    ✔️
 * 3. Pruebas                                   ✔️
*/

function getUsuarioActivo(nombre) {
  return {
    uid: 'ABC567',
    username: nombre
  };
}

const usuarioActivo = getUsuarioActivo('Miguel Angel');

console.log(usuarioActivo);

// Result

const getActiveUser = (name) => ({
  uid: 'ABC567',
  username: name
});

const activeUser = getActiveUser('Miguel Posada');

console.log(activeUser);