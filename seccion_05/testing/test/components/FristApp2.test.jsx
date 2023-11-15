import { render, screen } from '@testing-library/react';
import { FristApp } from '../../src/components/FristApp';

describe('Pruebas en <FristApp />', () => {

  const title = 'Hola, soy Goku';
  const subTitle = 'Soy un Sajagin';

  test('Debe de hacer match con el snapshot', () => {

    const { container } = render(<FristApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hola. soy Goku"', () => {

    render(<FristApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug();
  });

  test('Debe de mostrar el titulo en un h1', () => {

    render(<FristApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);

  });

  test('Debe de mostrar el subtitulo enviado por props', () => {

    render(<FristApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);

  });

});