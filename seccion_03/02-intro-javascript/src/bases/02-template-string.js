/*------------Template String------------*/

const nombre = 'Posi';
const apellido = 'Posada';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

const textoBloque = `Espacio
${nombre}
${apellido}
${2 + 3}`;

console.log(textoBloque);

function getSaludo(nombre) {
  return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);