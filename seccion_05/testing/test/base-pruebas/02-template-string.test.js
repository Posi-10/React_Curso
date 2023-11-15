import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe de retornar "Hola Posi"', () => {
    const name = 'Posi';
    const massage = getSaludo(name);

    expect(massage).toBe(`Hola ${name}`);
  })
});