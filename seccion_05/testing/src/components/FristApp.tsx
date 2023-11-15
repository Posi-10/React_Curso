import React from 'react';
import PropTypes from 'prop-types'; // Forma aternativa de TypeScript
/* const newMessage = {
  message: 'Hola Mundo',
  title: 'Posi'
};

const saludar = (msg) => {
  return `Hola ${msg}`
} */

export const FristApp = ({ title, subTitle, name }) => {

  // console.log(props)

  /* if (!title) {
    throw new Error('El title no existe');
  } */

  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      {/* <h1>{saludar('Posi')}</h1> */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );

};

FristApp.protoTypes = {
  subTitle: PropTypes.number,
  title: PropTypes.string.isRequired,
};

FristApp.defaultProps = {
  name: 'Posi Posada',
  subTitle: 'no hay subtitulo',
  title: 'No hay titulo',
}

/** Para el padre se puede hacer con el
 * <div></div> -> pero respeta la etiqueta div como tal 
 * <Fragment></Fragment> -> pero tenemos que importar el elemento 
 * <></> -> sin importar y no respeta la etiqueta como tal.
 */