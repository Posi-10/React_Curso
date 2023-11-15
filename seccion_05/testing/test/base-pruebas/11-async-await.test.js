import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
  test('getImagen debe de retornar una dicreccion de la imagen (url)', async () => {
    const resp = await getImagen();

    expect(resp).toEqual(expect.any(String));
  })
});