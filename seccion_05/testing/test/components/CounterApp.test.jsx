import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/components/CounterApp";

describe('Pruebas en <CounterApp />', () => {

  const value = 100;

  test('Debe de hacer match con el snapshot', () => {

    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();

  });

  test('Debe de mostrar el valor inicial de 100', () => {

    render(<CounterApp value={value} />);
    // expect(screen.getByText(value)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(`${value}`);

  });

  test('Debe de incrementar con el boton +1', () => {

    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText(`${value + 1}`)).toBeTruthy();

  });

  test('Debe de decrementar con el boton -1', () => {

    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText(`${value - 1}`)).toBeTruthy();

  });

  test('Debe de restablecer con el boton reset', () => {

    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(value)).toBeTruthy();

  });

});