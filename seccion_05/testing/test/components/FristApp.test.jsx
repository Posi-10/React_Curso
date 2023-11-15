import { render } from '@testing-library/react';
import { FristApp } from '../../src/components/FristApp';

describe('Pruebas en <FristApp />', () => {

  /*   test('Debe de hacer match con el snapshot', () => {
  
      const title = 'Hola, soy Goku';
      const subTitle = 'Hame Hame HAAAAAAAÁ';
      const { container } = render(<FristApp title={title} subTitle={subTitle} />);
      expect(container).toMatchSnapshot();
  
    }); */

  test('Debe de mostrar el titulo en un h1', () => {

    const title = 'Hola, soy Goku';
    const { container, getByText, getByTestId } = render(<FristApp title={title} />);
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId('test-title').innerHTML).toContain(title);

  });

  test('Debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un Sajagin';
    const { getAllByText } = render(<FristApp title={title} subTitle={subTitle} />);

    expect(getAllByText(subTitle).length).toBe(2);
  });

});